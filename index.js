var ngrok = require('ngrok');
var extend = require('extend');
var rand_id = require('./lib/random-id');

function Tunnel(config) {
  if (!this instanceof Tunnel) {
    return new Tunnel(config);
  }

  var self = this;

  self.tunnel_settings = config.tunnel;

  self.auto_uniq_subdomain = self.tunnel_settings.subdomain === '@unique';
}

Tunnel.prototype.connect = function(port, cb) {
  var self = this;

  if (self.auto_uniq_subdomain) {
    self.tunnel_settings.subdomain = rand_id();
  }

  ngrok.connect(extend({ port: port }, self.tunnel_settings), function(err, url) {
    if (err) {
      err.stack = '';
      cb(err);
      return;
    }

    cb(null, url.replace('tcp://', 'http://') + '/__zuul');
  });
};

Tunnel.prototype.close = function() {
  ngrok.disconnect();
};

module.exports = Tunnel;
