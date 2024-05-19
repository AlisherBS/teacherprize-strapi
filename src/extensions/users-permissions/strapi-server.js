module.exports = (plugin) => {
  plugin.controllers.user.updateMe = async (ctx) => {
    if (!ctx.state.user || !ctx.state.user.id) {
      return (ctx.response.status = 401);
    }
    await strapi.entityService
      .update("plugin::users-permissions.user", ctx.state.user.id, {
        data: ctx.request.body,
      })
      .then((res) => {
        const excludedFields = [
          "provider",
          "password",
          "resetPasswordToken",
          "confirmationToken",
          "confirmed",
          "createdAt",
          "updatedAt",
        ];
        const filteredData = Object.keys(res).reduce((result, key) => {
          if (!excludedFields.includes(key)) {
            result[key] = res[key];
          }
          return result;
        }, {});
        ctx.response.status = 200;
        ctx.response.body = filteredData;
      });
  };

  plugin.routes["content-api"].routes.push({
    method: "PUT",
    path: "/user/me",
    handler: "user.updateMe",
    config: {
      prefix: "",
      policies: [],
    },
  });

  return plugin;
};
