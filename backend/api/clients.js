const { response } = require("express")
const { restart } = require("nodemon")

module.exports = (app) => {
    const { existsOrError, notExistsOrError, equalsOrError} = app.api.validation

      const save = async (req, res) => {
        let client = { ...req.body }
        if (req.params.id) client.id = req.params.id
    
        try {
            // Função para converter campos em maiúsculas
            const toUpperCase = (str) => str ? str.toUpperCase() : str;
    
            // Convertendo campos relevantes para maiúsculas
            client.name = toUpperCase(client.name);
            client.city = toUpperCase(client.city);
            client.state = toUpperCase(client.state);
            client.vendedor = toUpperCase(client.vendedor);
    
            existsOrError(client.name, "Nome não informado");
            existsOrError(client.control_num, "Número de controle não informado");
            existsOrError(client.city, "Cidade não informada");
            existsOrError(client.state, "Estado não informado");
            existsOrError(client.phone, "Telefone não informado");
            existsOrError(client.vendedor, "Vendedor não informado");
    
            const clientFromDB = await app
                .db('clients')
                .where({ name: client.name })
                .first();
            if (!client.id) {
                notExistsOrError(clientFromDB, "Nome de usuário já cadastrado");
            }
        } catch (msg) {
            return res.status(400).send(msg);
        }
    
        if (client.id) {
            app
                .db('clients')
                .update(client)
                .where({ id: client.id })
                .then((_) => res.status(204).send())
                .catch((err) => res.status(500).send(err));
        } else {
            app
                .db('clients')
                .insert(client)
                .then((_) => res.status(204).send())
                .catch((err) => res.status(500).send(err));
        }
    }

    const get = (req, res) => {
        app
            .db('clients')
            .select('*')
            .then((client) => res.json(client))
            .catch((err) => res.status(500).send(err))
    }

    const getByName = async (req, res) => {
        try {
            const name = req.query.q.toUpperCase();
    
            const clients = await app
                .db('clients')
                .select('*')
                .whereRaw('UPPER(name) LIKE ?', [`%${name}%`]);
    
            if (clients.length === 0) {
                return res.status(404).json({ message: 'Nenhum cliente encontrado' });
            }
    
            res.json(clients);
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    }    

    const remove = async (req, res) => {
        try {
            let client = await app.db('clients').where({id: req.params.id}).del()
            notExistsOrError(client.controlNum, 'Cliente não cadastrado')

            res.status(204).send('Cliente excluído com sucesso')
        } catch (msg) {
            res.status(400).send(msg)
        }
    }

    const nextControlNum = async (req, res) => {
        try {
            const result = await app.db('clients').max('id as maxId');
            const maxId = result[0].maxId || 0;
            const nextControlNum = maxId + 1;
            res.json({ controlNum: nextControlNum });
          } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar número de controle' });
          }
        }



    const getByControlNum = async (req, res) => {
        const { control_num } = req.params;
        try {
            const client = await app.db('clients').where({ control_num }).first();
            if (client) {
                return res.json(client);
            } else {
                return res.status(404).json({ error: 'Cliente não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar cliente' });
        }
    };

    return { save, get, getByName, remove, nextControlNum, getByControlNum}
}