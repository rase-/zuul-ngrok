// Using the same subdomain generation scheme as `localtunnel-server` (https://github.com/defunctzombie/localtunnel-server)
var chars = 'abcdefghijklmnopqrstuvwxyz';

module.exports = function() {
  var randomstring = '';
  for (var i=0; i<10; ++i) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars[rnum];
  }

  return randomstring;
};
