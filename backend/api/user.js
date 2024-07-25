const bcrypt = require("bcrypt-nodejs");
const { response } = require("express");

module.exports = (app) => {
  const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation;

  const save = async (req, res) => {
    let user = { ...req.body };
    if (req.params.id) user.id = req.params.id;
    try {
      existsOrError(user.name, "Nome não informado");
      existsOrError(user.email, "E-mail não informado");
      existsOrError(user.password, "Senha não informada");
      existsOrError(user.confirmPassword, "Confirmação de senha inválida");
      equalsOrError(user.password, user.confirmPassword, "Senhas não conferem");

      const userFromDB = await app
        .db('users')
        .where({ email: user.email })
        .first();
  
      if (!user.id) {
        notExistsOrError(userFromDB, "Usuário já cadastrado");
      }
    } catch (msg) {
      console.log(msg);
      return res.status(400).send(msg);
    }
  
    // Hashing the password
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, salt);
  
    // Removing confirmPassword from user object
    delete user.confirmPassword;
    if (user.ID) {
      app
        .db('users')
        .update(user)
        .where({ id: user.id })
        .then((_) => res.status(204).send("Usuário atualizado com sucesso"))
        .catch((err) => res.status(500).send(err));
    } else {
      app
        .db('users')
        .insert(user)
        .then((_) => res.status(204).send("Usuário cadastrado com sucesso"))
        .catch((err) => res.status(500).send(err));
    }
  };

  const get = (req, res) => {
    app
      .db('users')
      .select('*')
      .then((users) => res.json(users))
      .catch((err) => res.status(500).send(err));
  };

  const getById = (req, res) => {
    app
      .db('users')
      .select('*')
      .where({ id: req.params.id })
      .first()
      .then((user) => res.json(user))
      .catch((err) => res.status(500).send(err));
  };

  const remove = async (req, res) => {
    try {
      let user = await app.db('users').where({ ID: req.params.id }).del();
      notExistsOrError(user.email, "Usuário não cadastrado.");

      res.status(204).send();
    } catch (msg) {
      res.status(400).send(msg);
    }
  };

  return { save, get, getById, remove };
};
