var ngrok = require('ngrok');

function Tunnel(config) {
  if (!this instanceof Tunnel) {
    return new Tunnel(config);
  }

  var self = this;

  self.auth_token = config.tunnel.authtoken;
}

Tunnel.prototype.connect = function(port, cb) {
  var self = this;

  ngrok.connect({ port: port, authtoken: self.auth_token, proto: 'tcp' }, function(err, url) {
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
