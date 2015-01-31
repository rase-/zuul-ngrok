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
      cb(err);
    }

    cb(null, url.replace('tcp://', 'http://') + '/__zuul');
  });
};

Tunnel.prototype.close = function() {
  ngrok.disconnect();
};

module.exports = Tunnel;
