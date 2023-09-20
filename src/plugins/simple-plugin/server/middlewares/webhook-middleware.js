const https = require('https')

const webhookUrl = 'https://webhook.site/da0387cc-5b6b-4223-8140-ba35e13d9ff9'

module.exports = (options, { strapi }) => {
  return async (ctx, next) => {
    console.log(`${ctx.request.path} ${ctx.request.method}`)
    await next();
    https.get(webhookUrl, (res) => {
      console.log(`Hello, ${res}`)
      // strapi.log.http(`${ctx.method} ${ctx.url}`);
    });
  }
}