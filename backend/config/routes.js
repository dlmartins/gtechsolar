module.exports = (app) => {
  app
    .route("/users")
    .post(app.api.user.save)
    .get(app.api.user.get);

  app
    .route("/users/:id")
    .put(app.api.user.save)
    .get(app.api.user.getById)
    .delete(app.api.user.remove);

  app
    .route("/clients")
    .post(app.api.clients.save)
    .get(app.api.clients.get);

  app
    .route("/clients/:id")
    .put(app.api.clients.save)
    .get(app.api.clients.getById)
    .delete(app.api.clients.remove);

  app
    .route("/contaluz")
    .post(app.api.contaluz.save)
    .get(app.api.contaluz.get);

//   app
//     .route("/contaluz/:id")
//     .put(app.api.contaluz.save)
//     .get(app.api.contaluz.getById)
//     .delete(app.api.contaluz.remove);
};
