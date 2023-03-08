module.exports = (app) => {
  const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation;

  const save = async (req, res) => {
    let contaLuz = { ...req.body };
    if (req.params.id) contaLuz.id = req.params.id;
    if (!req.body.classe) {
      contaLuz.classe = "Serie B";
    } else {
      contaLuz.classe = req.body.classe;
    }
    if (!req.body.valorKwh) {
      contaLuz.valorKwh = 0.84;
    } else {
      contaLuz.valorKwh = req.body.valorKwh;
    }
    if (!req.body.valorIp) {
      contaLuz.valorIp = 44.57;
    } else {
      contaLuz.valorIp = req.body.valorIp;
    }

    try {
      existsOrError(contaLuz.userId, "Usuário não informado");
      existsOrError(contaLuz.jan, "Consumo Janeiro não informado");
      existsOrError(contaLuz.fev, "Consumo Fevereiro não informado");
      existsOrError(contaLuz.mar, "Consumo Março não informado");
      existsOrError(contaLuz.abr, "Consumo Abril não informado");
      existsOrError(contaLuz.mai, "Consumo Maio não informado");
      existsOrError(contaLuz.jun, "Consumo Junho não informado");
      existsOrError(contaLuz.jul, "Consumo Julho não informado");
      existsOrError(contaLuz.ago, "Consumo Agosto não informado");
      existsOrError(contaLuz.set, "Consumo Setembro não informado");
      existsOrError(contaLuz.out, "Consumo Outubro não informado");
      existsOrError(contaLuz.nov, "Consumo Novembro não informado");
      existsOrError(contaLuz.dez, "Consumo Dezembro não informado");

      const clientFromDB = await app
        .db("contaluz")
        .where({ uc: contaLuz.uc })
        .first();

      if (contaLuz.id) {
        notExistsOrError(
          clientFromDB,
          "Unidade consumidora já cadastrada, favor verificar"
        );
      }
    } catch (msg) {
      return res.status(400).send(msg);
    }

    if (contaLuz.id) {
      app
        .db("contaluz")
        .update(contaLuz)
        .where({ id: contaLuz.id })
        .then((_) => res.status(204).send())
        .catch((err) => res.status(500));
    } else {
      app
        .db("contaluz")
        .insert(contaLuz)
        .then((_) => res.status(204).send())
        .catch((err) => res.status(500).send(err));
    }
  };

  const get = async (req, res) => {
    
      app
      .db("contaluz")
      .select("*")
      .then((contaluz) => res.json(contaluz))
      .catch((err) => res.status(500).send(err))
  };

  const getByUserId = (req, res) => {
  
    app
      .db("contaluz")
      .select(
        "id",
        "userId",
        "uc",
        "classe",
        "valorKwh",
        "valorIp",
        "jan",
        "fev",
        "mar",
        "abr",
        "mai",
        "jun",
        "jul",
        "ago",
        "set",
        "out",
        "nov",
        "dez",
        "ponta",
        "valorKwhPonta",
        "janP",
        "fevP",
        "marP",
        "abrP",
        "maiP",
        "junP",
        "julP",
        "agoP",
        "setP",
        "outP",
        "novP",
        "dezP"
      )
      .where({ userId: req.params.userId})
      .first()
      .then((contaLuz) => res.json(contaLuz))
      .catch((err) => res.status(500).send(err));
  };
  
  

  const remove = async (req, res) => {
    try {
      let contaLuz = await app
        .db("contaluz")
        .where({ userId: req.params.userId })
        .del();
      notExistsOrError(contaLuz.userId, "Cliente não cadastrado");

      res.status(204).send("Cliente excluído com sucesso");
    } catch (msg) {
      res.status(400).send(msg);
    }
  };

  return { save, get, getByUserId, remove };
};
