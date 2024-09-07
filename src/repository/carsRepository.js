import { db } from '../database/connection.js'

export async function inserirCarro(carro) {
  const comando = `INSERT INTO tb_carro (ds_marca, ds_modelo, nr_ano, vl_preco, dt_inclusao)
                      VALUES (?, ?, ?, ?, ?)`;

  const resposta = await db.query(comando, [carro.marca, carro.modelo, carro.ano, carro.preco, carro.inclusao])
  return resposta[0].insertId;
}

export async function consultarCarros() {
  const comando = `SELECT * 
                      FROM tb_carro`

  const resposta = await db.query(comando);
  const registros = resposta[0]

  return registros;
}

export async function atualizarCarro(id, carro) {
  const comando = `UPDATE tb_carro
                      SET ds_marca = ?,
                          ds_modelo = ?,
                          nr_ano = ?,
                          vl_preco = ?,
                          dt_inclusao = ?
                      WHERE id_carro = ?`;

  const resposta = await db.query(comando, [carro.marca, carro.modelo, carro.ano, carro.preco, carro.inclusao, id])
  return resposta[0].affectedRows;
}

export async function atualizarImgCarro(id, caminho) {
  const comando = `UPDATE tb_carro
                      SET img_carro = ?
                        WHERE id_carro = ?`

  const resposta = await db.query(comando, [caminho, id])
  return resposta[0].affectedRows;
}

export async function deletarCarro(id) {
  const comando = `DELETE FROM tb_carro
                        WHERE id_carro = ?`

  const resposta = await db.query(comando, [id]);
  return resposta[0].affectedRows;
}