// pages/NewInvoice/[controlNum].js
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/Layout";

const ControlNum = () => {
  const router = useRouter();
  const { controlNum } = router.query;
  const [client, setClient] = useState({});
  const [formData, setFormData] = useState({
    control_num: `${controlNum}`,
    uc: "",
    classe: "",
    valorKwh: "",
    valorIp: "",
    consumoMensal: {
      jan: "",
      fev: "",
      mar: "",
      abr: "",
      mai: "",
      jun: "",
      jul: "",
      ago: "",
      set: "",
      out: "",
      nov: "",
      dez: "",
    },
    ponta: false,
    valorKwhPonta: "",
    consumoMensalPonta: {
      janP: "",
      fevP: "",
      marP: "",
      abrP: "",
      maiP: "",
      junP: "",
      julP: "",
      agoP: "",
      setP: "",
      outP: "",
      novP: "",
      dezP: "",
    },
  });
  
  
  useEffect(() => {
    console.log("Entra no Fetch clientData");
    const fetchClientData = async () => {
      console.log("fetchClientData called");
      if (controlNum) {
        console.log("controlNum is defined:", controlNum);
        try {
          const response = await axios.get(
            `http://localhost:3010/clients/${controlNum}`
          );
          console.log("Response data:", response.data);
          setClient(response.data);
        } catch (error) {
          console.error("Erro ao buscar cliente:", error);
        }
      } else {
        console.log("controlNum is undefined");
      }
    };
    
    fetchClientData();
  }, [controlNum]);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleConsumoChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      consumoMensal: {
        ...formData.consumoMensal,
        [name]: value,
      },
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      await axios.post("http://localhost:3010/contaluz", {
        ...formData,
      });
      alert("Fatura criada com sucesso!");
      router.push("/Clients");
    } catch (error) {
      console.error("Erro ao salvar fatura:", error);
      alert("Erro ao salvar fatura.");
    }
  };
  
  const handleRepeatJanValue = (e) => {
    if (e.target.checked) {
      setFormData({
        ...formData,
        consumoMensal: {
          ...formData.consumoMensal,
          fev: formData.consumoMensal.jan,
          mar: formData.consumoMensal.jan,
          abr: formData.consumoMensal.jan,
          mai: formData.consumoMensal.jan,
          jun: formData.consumoMensal.jan,
          jul: formData.consumoMensal.jan,
          ago: formData.consumoMensal.jan,
          set: formData.consumoMensal.jan,
          out: formData.consumoMensal.jan,
          nov: formData.consumoMensal.jan,
          dez: formData.consumoMensal.jan,
        },
      });
    }
  };
  
  
  return (
    <Layout
    icon="user-plus"
    title="Nova Fatura"
    subtitle="Cadastrar nova fatura"
    >
      <div>
        <h2>
          Nova Fatura para o Cliente: {controlNum} | {client?.name}
        </h2>
        <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
            <div className="form-group col-3">
              <label>Número da UC</label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite o nº da UC"
                name="uc"
                value={formData.uc}
                onChange={handleInputChange}
                />
            </div>
                <div className="row mb-10">
            {Object.keys(formData.consumoMensal).map((mes) => (
              <div className="form-group col-3" key={mes}>
                <label>{mes.toUpperCase()}</label>
                <input
                  type="number"
                  className="form-control"
                  name={mes}
                  value={formData.consumoMensal[mes]}
                  onChange={handleConsumoChange}
                />
              </div>
            ))}
          </div>
          <div className="form-group col-9">
            <label>Classe</label>
            <div className="mt-2 d-flex align-items-center">
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="classe"
                  value="Serie B"
                  checked={formData.classe === "Serie B"}
                  onChange={handleInputChange}
                  id="classeSerieB"
                />
                <label className="form-check-label" htmlFor="classeSerieB">
                  Série B
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="classe"
                  value="Horosazonal"
                  checked={formData.classe === "Horosazonal"}
                  onChange={handleInputChange}
                  id="classeHorosazonal"
                />
                <label className="form-check-label" htmlFor="classeHorosazonal">
                  Horosazonal
                </label>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="form-group col-3">
              <label>Valor kWh</label>
              <input
                type="text"
                className="form-control"
                placeholder="R$ 0,82"
                name="valorKwh"
                value={formData.valorKwh}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group col-3">
              <label>Valor Iluminação Pública</label>
              <input
                type="text"
                className="form-control"
                placeholder="R$ 20,12"
                name="valorIp"
                value={formData.valorIp}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <h5>Consumo mensal</h5>
            <div className="form-group col-12">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={handleRepeatJanValue}
                  id="repeatJan"
                />
                <label className="form-check-label" htmlFor="repeatJan">
                  Repetir valor de JAN para todos os meses
                </label>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-12">
                <button type="submit" className="btn btn-primary">
                  Salvar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ControlNum;
