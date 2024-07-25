import React, { useState, useEffect } from "react";
import axios from "axios";

const ClienteList = ({ searchTerm }) => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      // Realizar a requisição para buscar clientes baseado no searchTerm
      axios
        .get(`/api/clientes?search=${searchTerm}`) // Substitua pela sua rota e método de busca
        .then((response) => {
          setClientes(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar clientes:", error);
        });
    } else {
      setClientes([]);
    }
  }, [searchTerm]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nome do Cliente</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((cliente, index) => (
          <tr key={cliente.id} className={index % 2 === 0 ? "table-light" : "table-dark"}>
            <td>{cliente.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClienteList;
