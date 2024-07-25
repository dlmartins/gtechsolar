module.exports = (app) => {
  const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation;

  const save = async (req, res) => {
    let contaLuz = {
        client_id: req.body.control_num,
        uc: Number(req.body.uc),
        classe: req.body.classe,
        valor_kwh: parseFloat(req.body.valorKwh),
        valor_ip: parseFloat(req.body.valorIp),
        jan: parseInt(req.body.consumoMensal.jan, 10),
        fev: parseInt(req.body.consumoMensal.fev, 10),
        mar: parseInt(req.body.consumoMensal.mar, 10),
        abr: parseInt(req.body.consumoMensal.abr, 10),
        mai: parseInt(req.body.consumoMensal.mai, 10),
        jun: parseInt(req.body.consumoMensal.jun, 10),
        jul: parseInt(req.body.consumoMensal.jul, 10),
        ago: parseInt(req.body.consumoMensal.ago, 10),
        set: parseInt(req.body.consumoMensal.set, 10),
        out: parseInt(req.body.consumoMensal.out, 10),
        nov: parseInt(req.body.consumoMensal.nov, 10),
        dez: parseInt(req.body.consumoMensal.dez, 10),
        ponta: req.body.ponta,
        valor_kwh_ponta: (parseFloat(req.body.valorKwhPonta) || 0),
        jan_p: parseInt((req.body.consumoMensalPonta.jan || 0), 10),
        fev_p: parseInt((req.body.consumoMensalPonta.fev || 0), 10),
        mar_p: parseInt((req.body.consumoMensalPonta.mar || 0), 10),
        abr_p: parseInt((req.body.consumoMensalPonta.abr || 0), 10),
        mai_p: parseInt((req.body.consumoMensalPonta.mai || 0), 10),
        jun_p: parseInt((req.body.consumoMensalPonta.jun || 0), 10),
        jul_p: parseInt((req.body.consumoMensalPonta.jul || 0), 10),
        ago_p: parseInt((req.body.consumoMensalPonta.ago || 0), 10),
        set_p: parseInt((req.body.consumoMensalPonta.set || 0), 10),
        out_p: parseInt((req.body.consumoMensalPonta.out || 0), 10),
        nov_p: parseInt((req.body.consumoMensalPonta.nov || 0), 10),
        dez_p: parseInt((req.body.consumoMensalPonta.dez || 0), 10)
    };

    if (req.params.id) contaLuz.id = req.params.id;
    if (!req.body.classe) {
        contaLuz.classe = "Serie B";
    } else {
        contaLuz.classe = req.body.classe;
    }
    if (!req.body.valorKwh) {
        contaLuz.valor_kwh = 0.84;
    } else {
        contaLuz.valor_kwh = parseFloat(req.body.valorKwh);
    }
    if (!req.body.valorIp) {
        contaLuz.valor_ip = 44.57;
    } else {
        contaLuz.valor_ip = parseFloat(req.body.valorIp);
    }

    try {
        existsOrError(contaLuz.client_id, "Número de controle não informado");
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
            .db('contaluz')
            .where({ client_id: contaLuz.client_id })
            .first();

        if (contaLuz.id) {
            notExistsOrError(
                clientFromDB,
                "Unidade consumidora já cadastrada, favor verificar"
            );
        }
    } catch (msg) {
        console.log(msg);
        return res.status(400).send(msg);
    }

    if (contaLuz.id) {
        app
            .db('contaluz')
            .update(contaLuz)
            .where({ id: contaLuz.id })
            .then((_) => res.status(204).send())
            .catch((err) => res.status(500).send(err));
    } else {
        app
            .db('contaluz')
            .insert(contaLuz)
            .then((_) => res.status(204).send())
            .catch((err) => res.status(500).send(err));
    }
};


  

  const get = async (req, res) => {
    
      app
      .db('contaluz')
      .select("*")
      .then((contaluz) => res.json(contaluz))
      .catch((err) => res.status(500).send(err))
  };

  const getByClientId = (req, res) => {
    let { clientId } = req.params;
    app
      .db('contaluz')
      .select("*")
      .where({ client_id: clientId})
      .then((contaLuz) => res.json(contaLuz))
      .catch((err) => res.status(500).send(err));
  };
  
  

  // const remove = async (req, res) => {
  //   try {
  //     let contaLuz = await app
  //       .db('contaluz')
  //       .where({ clientId: req.params.clientId })
  //       .del();
  //     notExistsOrError(contaLuz.clientId, "Cliente não cadastrado");

  //     res.status(204).send("Cliente excluído com sucesso");
  //   } catch (msg) {
  //     res.status(400).send(msg);
  //   }
  // };

  return { save, get, getByClientId };
};
