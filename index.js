var ngrok = require('ngrok');
var extend = require('extend');

function Tunnel(config) {
  if (!this instanceof Tunnel) {
    return new Tunnel(config);
  }

  var self = this;

  self.tunnel_settings = config.tunnel;
}

Tunnel.prototype.connect = function(port, cb) {
  var self = this;

  ngrok.connect(extend({ port: port }, self.tunnel_settings), function(err, url) {
    if (err) {
      err.stack = '';
      cb(err);
      return;
    }

    self.ngrok_url = url;
    cb(null, url.replace('tcp://', 'http://') + '/__zuul');
  });
};

Tunnel.prototype.close = function() {
  var self = this;

  ngrok.disconnect(self.ngrok_url);
};

module.exports = Tunnel;
