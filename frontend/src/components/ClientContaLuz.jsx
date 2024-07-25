import React, { useEffect, useState } from "react";
import axios from "axios";

const ClientContaLuz = ({ controlNum }) => {
  const [faturas, setFaturas] = useState([]);
  const [medias, setMedias] = useState({});
  const [soma, setSoma] = useState(0);

  useEffect(() => {
    const fetchFaturas = async () => {
      try {
        const response = await axios.get(`http://localhost:3010/contaluz/${controlNum}`);
        console.log("Faturas response:", response.data); // Log da resposta das faturas
        const faturasData = response.data || [];
        setFaturas(faturasData);
      } catch (error) {
        console.error("Erro ao buscar faturas:", error);
        setFaturas([]); // Garantir que faturas seja um array em caso de erro
      }
    };

    if (controlNum) {
      console.log("Fetching faturas for controlNum:", controlNum); // Log para verificar o controlNum
      fetchFaturas();
    }
  }, [controlNum]);

  useEffect(() => {
    if (faturas.length > 0) {
      faturas.forEach((fatura) => {
        console.log("Fetching média para UC:", fatura.uc); // Log para verificar cada UC
        fetchMediaPorUc(fatura.uc);
      });
    } else {
      // Quando não há faturas, resetar a soma para 0
      setSoma(0);
    }
  }, [faturas]);

  const fetchMediaPorUc = async (uc) => {
    try {
      console.log(`Requesting média for UC ${uc} and controlNum ${controlNum}`); // Log para verificar os parâmetros enviados
      const response = await axios.get(`http://localhost:3010/contaluz/calculate/${controlNum}/${uc}`);
      console.log(`Média response for UC ${uc}:`, response.data); // Log da resposta da média
      setMedias((prevMedias) => ({
        ...prevMedias,
        [uc]: Number(response.data.mediaUc),
      }));
    } catch (error) {
      console.error(`Erro ao buscar média para UC ${uc}:`, error);
    }
  };

  useEffect(() => {
    // Calcular a soma das médias quando `medias` for atualizado
    const total = Object.values(medias).reduce((acc, media) => acc + media, 0);
    setSoma(total);
  }, [medias]);

  return (
    <div>
      <h2>Faturas do Cliente</h2>
      <ul>
        {faturas.map((fatura) => (
          <li key={fatura.id}>
            UC: {fatura.uc} - Média 12 meses: {medias[fatura.uc]?.toFixed(2) || 'N/A'}
          </li>
        ))}
      </ul>
      <div>
        <h3>Soma total: {soma.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default ClientContaLuz;
