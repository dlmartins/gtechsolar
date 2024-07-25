const jwt = require("jwt-simple");
const bcrypt = require("bcrypt-nodejs");
const { secret } = require("../config/authSecret");

module.exports = (app) => {
  const signin = async (req, res) => {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send("Usuário ou senha não informados");
    }

    const user = await app.db("users").where({ email: req.body.email }).first();

    if (!user) return res.status(400).send("Usuário não encontrado");
    const isMatch = bcrypt.compareSync(req.body.password, user.password);
    if (!isMatch) return res.status(401).send("Senha inválida");

    const now = Math.floor(Date.now() / 1000);

    try {
      const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        iat: now,
        exp: now + 60 * 60 * 24 * 3, // 3 dias
      };

      const token = jwt.encode(payload, secret);
      res.json({
        ...payload,
        token: token,
      });
    } catch (error) {
      console.error("Erro ao gerar token:", error);
      return res.status(500).send("Erro ao gerar token");
    }
  };

  return { signin };
};
