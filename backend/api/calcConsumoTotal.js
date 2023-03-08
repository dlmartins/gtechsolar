module.exports = (app) => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation;
  
    const calculateTotalConsumption = async (userId) => {
      const contaluz = await app.db("contaluz").select("*").where({ userId });
      let totalConsumption = 0;
  
      contaluz.forEach((conta) => {
        monthlyConsumption =
          conta.jan +
          conta.janP * (conta.valorKwhPonta / conta.valorKwh) +
          conta.fev +
          conta.fevP * (conta.valorKwhPonta / conta.valorKwh) +
          conta.mar +
          conta.marP * (conta.valorKwhPonta / conta.valorKwh) +
          conta.abr +
          conta.abrP * (conta.valorKwhPonta / conta.valorKwh) +
          conta.mai +
          conta.maiP * (conta.valorKwhPonta / conta.valorKwh) +
          conta.jun +
          conta.junP * (conta.valorKwhPonta / conta.valorKwh) +
          conta.jul +
          conta.julP * (conta.valorKwhPonta / conta.valorKwh) +
          conta.ago +
          conta.agoP * (conta.valorKwhPonta / conta.valorKwh) +
          conta.set +
          conta.setP * (conta.valorKwhPonta / conta.valorKwh) +
          conta.out +
          conta.outP * (conta.valorKwhPonta / conta.valorKwh) +
          conta.nov +
          conta.novP * (conta.valorKwhPonta / conta.valorKwh) +
          conta.dez +
          conta.dezP * (conta.valorKwhPonta / conta.valorKwh);
        totalConsumption += monthlyConsumption / 12;
      });
  
      return parseFloat(totalConsumption.toFixed(2));
    };
  
    return { calculateTotalConsumption };
  };
  