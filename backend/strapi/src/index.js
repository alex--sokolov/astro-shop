'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    strapi.db.lifecycles.subscribe({
      models: ['plugin::users-permissions.user'],
      async afterUpdate(event) {
        const {result, params} = event;
        console.log('AFTER UPDATE');
        // await strapi.$io.raw("message:update", result);
        await strapi.$io.raw("message:update", "AFTER UPDATE");
        await strapi.$io.raw("message:update", "-------------");
        await strapi.$io.raw("message:update", result);
        await strapi.$io.raw("message:update", params);
        await strapi.$io.raw("message:update", "-------------");
      },
      async beforeCreate(event) {
        // beforeCreate lifeclcyle
      },
    });
  },
};
