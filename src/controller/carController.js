import { Router } from 'express';
import { atualizarImgCarro, consultarCarros, deletarCarro, inserirCarro } from "../repository/carsRepository.js";

import multer from 'multer';

const endpoints = Router();

endpoints.get("/carros", async (req, resp) => {
  try {
    const carros = await consultarCarros();

    return resp.send(carros);
  }
  catch (error) {
    return resp.status(400).send({
      erro: error.message
    })
  }
});

endpoints.post("/carros", async (req, resp) => {
  const carro = req.body;

  try {
    const idCarro = await inserirCarro(carro);

    return resp.status(201).send({
      idInserido: idCarro
    });
  }
  catch (error) {
    return resp.status(400).send({
      erro: error.message
    })
  }
});

endpoints.delete("/carro/:id", async (req, resp) => {
  const { id } = req.params;

  try {
    await deletarCarro(id);

    return resp.status(204).send();
  }
  catch (error) {
    return resp.status(400).send({
      erro: error.message
    })
  }
});

const upload = multer({ dest: "./storage/car" });

endpoints.put("/carro/:id/imagem", upload.single("carro"), async (req, resp) => {
  const { id } = req.params;
  const imagem = req.file.path;

  try {
    await atualizarImgCarro(id, imagem);

    return resp.status(204).send();
  }
  catch (error) {
    return resp.status(400).send({
      erro: error.message
    })
  }
});

export default endpoints;