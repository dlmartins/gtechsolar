module.exports = (app) => {
  app.route("/users").post(app.api.user.save).get(app.api.user.get);

  app
    .route("/users/:id")
    .put(app.api.user.save)
    .get(app.api.user.getById)
    .delete(app.api.user.remove);

  app.route("/clients").post(app.api.clients.save).get(app.api.clients.get);

  app
    .route("/clients/:id")
    .put(app.api.clients.save)
    .get(app.api.clients.getById)
    .delete(app.api.clients.remove);

  app.route("/contaluz").post(app.api.contaluz.save).get(app.api.contaluz.get);

  app
    .route("/contaluz/:userId")
    .put(app.api.contaluz.save)
    .get(app.api.contaluz.getByUserId)
    .delete(app.api.contaluz.remove);

  app.route("/proposta").post(app.api.proposta.save).get(app.api.proposta.get);

  app
    .route("/proposta/:userId")
    .put(app.api.proposta.save)
    .get(app.api.proposta.getById)
    .delete(app.api.proposta.remove);

  app.get("/consumption/:userId", async (req, res) => {
    const userId = req.params.userId;
    const totalConsumption =
      await app.api.calcConsumoTotal.calculateTotalConsumption(userId);
    res.json({ totalConsumption });
  });
};
