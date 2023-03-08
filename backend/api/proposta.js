module.exports = (app) => {
  const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation;

  const save = async (req, res) => {
    const proposta = { ...req.body };
    if (req.params.id) proposta.id = req.params.id;

    try {
      existsOrError(proposta.userId, "Usuário não informado");
      existsOrError(proposta.rev, "Revisão não informada");
      existsOrError(proposta.Uc, "UC não informada");
      existsOrError(proposta.potSistema, "Potência do sistema não informada");
      existsOrError(proposta.qtModulos, "Quantidade de módulos não informada");
      existsOrError(proposta.inversor, "Inversor não informado");
      existsOrError(proposta.areaEstimada, "Área estimada não informada");
      existsOrError(proposta.gerAntes, "Geração antes não informada");
      existsOrError(proposta.gerDepois, "Geração depois não informada");
      existsOrError(
        proposta.valMensalAntes,
        "Valor mensal antes não informado"
      );
      existsOrError(
        proposta.valMensalDepois,
        "Valor mensal depois não informado"
      );
      existsOrError(proposta.valAnualAntes, "Valor anual antes não informado");
      existsOrError(
        proposta.valAnualDepois,
        "Valor anual depois não informado"
      );
      existsOrError(proposta.valorTotal, "Valor total não informado");
    } catch (msg) {
      return res.status(400).send(msg);
    }

    if (proposta.id) {
        app
          .db("proposta")
          .update(proposta)
          .where({ id: proposta.id })
          .then((_) => res.status(204).json({ message: "Proposta atualizada com sucesso" }))
          .catch((err) => res.status(500).send(err));
      } else {
        app
          .db("proposta")
          .insert(proposta)
          .then((_) => res.status(201).json({ message: "Proposta criada com sucesso" }))
          .catch((err) => res.status(500).send(err));
      }
  };

  const get = async (req, res) => {
    try {
      const propostas = await app
        .db("proposta")
        .select("*")
        .where({ userId: req.query.userId }); // filter by userId
      res.json(propostas);
    } catch (msg) {
      res.status(500).send(msg);
    }
  };

  const getById = async (req, res) => {
    try {
      const proposal = await app
        .db("proposta")
        .select("*")
        .where({ userId: req.query.userId, id: req.params.id })
        .first();
  
      if (!proposal) {
        throw "Proposta não encontrada";
      }
  
      res.json(proposal);
    } catch (msg) {
      res.status(500).send(msg);
    }
  };

  const remove = async (req, res) => {
    try {
      let proposta = await app
        .db("proposta")
        .where({ userId: req.query.userId }) // filter by userId and id
        .del();
      notExistsOrError(proposta.userId, "Proposta não cadastrada");

      res.status(204).send("Proposta excluída com sucesso");
    } catch (msg) {
      res.status(400).send(msg);
    }
  };

  return { save, get, getById, remove };
};
