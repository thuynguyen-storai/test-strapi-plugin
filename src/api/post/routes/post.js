'use strict';

/**
 * post router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::post.post');

// Route-level middleware
// module.exports = createCoreRouter('api::post.post', {
//   config: {
//     find: {
//       middlewares: [
//         'plugin::simple-plugin.webhookMiddleware',

//         { name: 'plugin::simple-plugin.webhookMiddleware', config: {} },

//         (ctx, next) => {
//           return next()
//         }
//       ]
//     }
//   }
// });
