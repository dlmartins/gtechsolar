import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { insertControlNum } from "../utils/controlNum";

const ClienteSearch = ({ setSelectedControlNum }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedControlNum, setSelectedControlNumLocal] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3010/clients/search?q=${searchTerm}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRadioChange = (controlNum) => {
    setSelectedControlNumLocal(controlNum);
    setSelectedControlNum(controlNum); // Passa o controlNum para o componente pai
  };

  return (
    <div className="container-fluid">
      <div className="row mb-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar cliente..."
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary w-100" onClick={handleSearch}>
            Buscar
          </button>
        </div>
        <div className="col-md-3">
          <Link href="/NewClient">
            <a className="btn btn-primary w-100">Novo Cliente</a>
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th></th>
              <th className="col-1">ID</th>
              <th className="col-4">Nome do Cliente</th>
              <th className="col-2">Cidade</th>
              <th className="col-2">Telefone</th>
              <th className="col-2">Vendedor</th>
              <th className="col-1">Ações</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((cliente, index) => (
              <tr
                key={cliente.id}
                className={index % 2 === 0 ? "table-light" : "table-dark"}
              >
                <td>
                  <input
                    type="radio"
                    name="selectedClient"
                    checked={selectedControlNum === cliente.control_num}
                    onChange={() => handleRadioChange(cliente.control_num)}
                  />
                </td>
                <td>{insertControlNum(cliente.control_num)}</td>
                <td>{cliente.name}</td>
                <td>{cliente.city}</td>
                <td>{cliente.phone}</td>
                <td>{cliente.vendedor}</td>
                <td>
                  {selectedControlNum === cliente.control_num && (
                    <Link href={`/NewInvoice/${cliente.control_num}`}>
                      <a className="btn btn-success btn-sm">
                        <FontAwesomeIcon icon={faFileAlt} size="lg" color="white" /> {/* Ícone para criar nova fatura */}
                      </a>
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClienteSearch;
