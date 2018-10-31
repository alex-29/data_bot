let config = {};

config.dev = {
  "admin": {
    "users": 
      [{
        "username": "adminN",
        "password": "$2a$08$TYLxiSeAVYplFq/dkaCd6eb4I2kzm0nhlhUxSqVuenpS0pwil0GdO",
        "permissions": "*"
      }]
  },
  "server": {
    "host": "https://bot.morlaix.viseo.io:1880"
  }
};

module.exports = config;
