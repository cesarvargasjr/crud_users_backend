import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM alunos ORDER BY id desc";

  db.query(q, (err, data) => {
    if (err) return res.status(404).json(err);

    return res.status(200).json(data);
  });
};

export const getUser = (req, res) => {
  const q = "SELECT * FROM alunos WHERE `id` = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(404).json(err);

    if (data.length === 0) {
      return res.status(404).json("Usuário não encontrado.");
    }

    return res.status(200).json(data[0]);
  });
};

export const addUser = (req, res) => {
  const q =
    "INSERT INTO alunos(`name`, `phone`, `address`, `neighborhood`, `city`, `number`, `cep`, `complement`, `state`) VALUES(?)";

  const values = [
    req.body.name,
    req.body.phone,
    req.body.address,
    req.body.neighborhood,
    req.body.city,
    req.body.number,
    req.body.cep,
    req.body.complement,
    req.body.state,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.status(400).json(err);

    return res.status(200).json("Usuário criado com sucesso.");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE alunos SET `name` = ?, `phone` = ?, `address` = ?, `neighborhood` = ?, `city` = ?, `number` = ?, `cep` = ?, `complement` = ?, `state` = ? WHERE `id` = ?";

  const values = [
    req.body.name,
    req.body.phone,
    req.body.address,
    req.body.neighborhood,
    req.body.city,
    req.body.number,
    req.body.cep,
    req.body.complement,
    req.body.state,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.status(400).json(err);

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM alunos WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.status(400).json(err);

    return res.status(200).json("Usuário exluído com sucesso.");
  });
};