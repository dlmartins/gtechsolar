const { response } = require("express")
const { restart } = require("nodemon")

module.exports = (app) => {
    const { existsOrError, notExistsOrError, equalsOrError} = app.api.validation

    const save = async (req, res) => {
        let client = { ...req.body}
        if (req.params.id) client.id = req.params.id

        try {
            existsOrError(client.name, "Nome não informado")
            existsOrError(client.controlNum, "Número de controle não informado")
            existsOrError(client.city, "Cidade não informada")
            existsOrError(client.state, "Estado não informado")
            existsOrError(client.phone, "Telefone não informado")
            existsOrError(client.vendedor, "Vendedor não informado")
            
            const clientFromDB = await app
            .db("clients")
            .where({name: client.name})
            .first()
            if (client.id) {
                notExistsOrError(clientFromDB, "Nome de usuário já cadastrado")
            }
        } catch(msg) {
            return res.status(400).send(msg)
        }

        if (client.id) {
            app
                .db("clients")
                .update(client)
                .where ({ id: client.id })
                .then ((_) => res.status(204).send())
                .catch ((err) => res.status(500))
        } else {
            app
                .db("clients")
                .insert(client)
                .then ((_) => res.status(204).send())
                .catch ((err) => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app
            .db("clients")
            .select("id", "controlNum", "name", "city", "state", "phone")
            .then((client) => res.json(client))
            .catch((err) => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app 
            .db('clients')
            .select("id", "controlNum", "name", "city", "state", "phone")
            .where({ id: req.params.id})
            .first()
            .then((client) => res.json(client))
            .catch((err) => res.status(500).send(err))
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

    return { save, get, getById, remove }
}