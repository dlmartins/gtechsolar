module.exports = (app) => {
  const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation;

  const calculateMediaEValores = async (req, res) => {
    const { clientId } = req.params;
    try {
      let query = app.db("contaluz").select("*").where({ client_id: clientId });

      if (uc) {
        query = query.andWhere({ uc });
      }

      const faturas = await query;

      let totalConsumption = 0;
      let totalFaturas = faturas.length;

      faturas.forEach((conta) => {
        // let monthlyConsumption = 0;

        if (conta.ponta === false) {
          console.log("caiu no if");
          // valor_kwh_ponta = valor_kwh;
          monthlyConsumption =
            conta.jan +
            conta.fev +
            conta.mar +
            conta.abr +
            conta.mai +
            conta.jun +
            conta.jul +
            conta.ago +
            conta.set +
            conta.out +
            conta.nov +
            conta.dez;
        } else {
          console.log("caiu no else");
          monthlyConsumption =
            conta.jan +
            conta.jan_p * (conta.valor_kwh_ponta / conta.valor_kwh) +
            (conta.fev +
              conta.fev_p * (conta.valor_kwh_ponta / conta.valor_kwh)) +
            (conta.mar +
              conta.mar_p * (conta.valor_kwh_ponta / conta.valor_kwh)) +
            (conta.abr +
              conta.abr_p * (conta.valor_kwh_ponta / conta.valor_kwh)) +
            (conta.mai +
              conta.mai_p * (conta.valor_kwh_ponta / conta.valor_kwh)) +
            (conta.jun +
              conta.jun_p * (conta.valor_kwh_ponta / conta.valor_kwh)) +
            (conta.jul +
              conta.jul_p * (conta.valor_kwh_ponta / conta.valor_kwh)) +
            (conta.ago +
              conta.ago_p * (conta.valor_kwh_ponta / conta.valor_kwh)) +
            (conta.set +
              conta.set_p * (conta.valor_kwh_ponta / conta.valor_kwh)) +
            (conta.out +
              conta.out_p * (conta.valor_kwh_ponta / conta.valor_kwh)) +
            (conta.nov +
              conta.nov_p * (conta.valor_kwh_ponta / conta.valor_kwh)) +
            (conta.dez +
              conta.dez_p * (conta.valor_kwh_ponta / conta.valor_kwh));
        }
        console.log("conta.jan: ", conta.jan);
        console.log("Monthly Consumption:", monthlyConsumption); // Adicionar log

        totalConsumption += monthlyConsumption / 12;
      });

      console.log("Total Consumption:", totalConsumption); // Adicionar log

      const media = totalConsumption;
      const soma = totalConsumption;

      res.json({
        faturas,
        media: parseFloat(media.toFixed(2)),
        soma: parseFloat(soma.toFixed(2)),
      });
    } catch (error) {
      console.error("Erro ao calcular média e valores:", error);
      res.status(500).send(error);
    }
  };

  const calculateMediaUc = async (req, res) => {
    const { clientId, uc } = req.params;
    console.log(clientId, uc);
    try {
      const conta = await app
        .db("contaluz")
        .select("*")
        .where({ client_id: clientId, uc: uc })
        .first();

      if (!conta) {
        return res
          .status(404)
          .json({ error: "Nenhuma conta encontrada para esta UC." });
      }

      let monthlyConsumption;

      if (conta.ponta === false) {
        monthlyConsumption =
          conta.jan +
          conta.fev +
          conta.mar +
          conta.abr +
          conta.mai +
          conta.jun +
          conta.jul +
          conta.ago +
          conta.set +
          conta.out +
          conta.nov +
          conta.dez;
      } else {
        monthlyConsumption =
          conta.jan +
          conta.jan_p * (conta.valor_kwh_ponta / conta.valor_kwh) +
          conta.fev +
          conta.fev_p * (conta.valor_kwh_ponta / conta.valor_kwh) +
          conta.mar +
          conta.mar_p * (conta.valor_kwh_ponta / conta.valor_kwh) +
          conta.abr +
          conta.abr_p * (conta.valor_kwh_ponta / conta.valor_kwh) +
          conta.mai +
          conta.mai_p * (conta.valor_kwh_ponta / conta.valor_kwh) +
          conta.jun +
          conta.jun_p * (conta.valor_kwh_ponta / conta.valor_kwh) +
          conta.jul +
          conta.jul_p * (conta.valor_kwh_ponta / conta.valor_kwh) +
          conta.ago +
          conta.ago_p * (conta.valor_kwh_ponta / conta.valor_kwh) +
          conta.set +
          conta.set_p * (conta.valor_kwh_ponta / conta.valor_kwh) +
          conta.out +
          conta.out_p * (conta.valor_kwh_ponta / conta.valor_kwh) +
          conta.nov +
          conta.nov_p * (conta.valor_kwh_ponta / conta.valor_kwh) +
          conta.dez +
          conta.dez_p * (conta.valor_kwh_ponta / conta.valor_kwh);
      }

      const mediaUc = monthlyConsumption / 12;

      res.json({
        mediaUc: parseFloat(mediaUc.toFixed(2)),
      });
    } catch (error) {
      console.error("Erro ao calcular média e valores:", error);
      res.status(500).send(error);
    }
  };

  return { calculateMediaEValores, calculateMediaUc };
};
