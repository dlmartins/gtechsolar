import React, { useState } from "react";
import Main from "../components/template/Main";
import Layout from "../components/Layout";
import ClienteSearch from "../components/ClientSearch";
import ClientContaLuz from "../components/ClientContaLuz";

const ClientesPage = () => {
  const [selectedControlNum, setSelectedControlNum] = useState(null);

  return (
    <Layout
      icon="user-plus"
      title="Cadastro Cliente"
      subtitle="Cadastro inicial de clientes"
    >
      {/* Conteúdo da Página */}
      <div className="container">
        <div className="content">
          <ClienteSearch setSelectedControlNum={setSelectedControlNum} />
          {selectedControlNum && (
            <ClientContaLuz controlNum={selectedControlNum} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ClientesPage;
