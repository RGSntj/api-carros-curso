import carController from './controller/carController.js';

import express from 'express';

export function adicionarRotas(servidor) {
  servidor.use(carController);

  servidor.use("/storage/car", express.static("./storage/car"));
}