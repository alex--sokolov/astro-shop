module.exports = ({ env }) => ({
  // ...
  "io": {
    "enabled": true,
    "config": {
      "IOServerOptions" :{
        "cors": { "origin": "http://localhost:3000", "methods": ["GET", "POST", "PUT"] },
      },
      "contentTypes": {
        "message": "*",
      },
      "events":[
        {
          "name": "connection",
          "handler": ({ strapi }, socket) => {
            strapi.log.info(`[io] new connection with id ${socket.id}`);
            strapi.$io.raw("message:update", "some data222");
          },
        },
        {
          "name": "message:update",
          "handler": ({ strapi }, socket) => {
            strapi.log.info(`updated ${socket.id} - ${strapi}`);
            strapi.$io.raw("message:update", "some data333");
          },
        },
      ]
    },
  },
  // ...
});
