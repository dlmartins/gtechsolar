import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import { useRouter } from 'next/router';
import { insertControlNum } from '../utils/controlNum';

const NovoCliente = () => {
  const [controlNum, setControlNum] = useState('');
  const [nome, setNome] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [telefone, setTelefone] = useState('');
  const [vendedor, setVendedor] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchControlNum = async () => {
      try {
        const response = await axios.get('http://localhost:3010/clients/nextControlNum');
        setControlNum(response.data.controlNum);
      } catch (error) {
        console.error('Erro ao buscar número de controle:', error);
      }
    };

    fetchControlNum();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3010/clients', {
        control_num: controlNum,
        name: nome,
        state: estado,
        city: cidade,
        phone: telefone,
        vendedor: vendedor,
      });
      // Redirecionar para a página de clientes após o cadastro
      router.push('/Clients');
    } catch (error) {
      console.error('Erro ao cadastrar cliente:', error);
    }
  };

  return (
    <Layout icon="user-plus" title="Novo Cliente" subtitle="Cadastrar novo cliente">
      <div className="container-fluid">
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="controlNum">Número de Controle</label>
              <input
                type="text"
                className="form-control"
                id="controlNum"
                value={insertControlNum(controlNum)}
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                className="form-control"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="estado">Estado</label>
              <input
                type="text"
                className="form-control"
                id="estado"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cidade">Cidade</label>
              <input
                type="text"
                className="form-control"
                id="cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefone">Telefone</label>
              <input
                type="text"
                className="form-control"
                id="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="vendedor">Vendedor</label>
              <input
                type="text"
                className="form-control"
                id="vendedor"
                value={vendedor}
                onChange={(e) => setVendedor(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Salvar</button>
            <button type="button" className="btn btn-secondary" onClick={() => router.push('/Clients')}>Voltar</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default NovoCliente;
