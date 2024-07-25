module.exports = (app) => {
  app.route("/signin").post(app.api.auth.signin);

  app.route("/users").post(app.api.user.save).get(app.api.user.get);

  app
    .route("/users/:id")
    .put(app.api.user.save)
    .get(app.api.user.getById)
    .delete(app.api.user.remove);

  app.route("/clients").post(app.api.clients.save).get(app.api.clients.get);

  app.route("/clients/nextControlNum").get(app.api.clients.nextControlNum);

  app.route("/clients/search").get(app.api.clients.getByName);

  app.route("/clients/:control_num").get(app.api.clients.getByControlNum);

  app.route("/contaluz").post(app.api.contaluz.save).get(app.api.contaluz.get);

  app
    .route("/contaluz/:clientId")
    .put(app.api.contaluz.save)
    .get(app.api.contaluz.getByClientId);

  app
    .route("/contaluz/calculate/:clientId")
    .get(app.api.calcConsumoTotal.calculateMediaEValores);

    app
    .route("/contaluz/calculate/:clientId/:uc")
    .get(app.api.calcConsumoTotal.calculateMediaUc);
};
