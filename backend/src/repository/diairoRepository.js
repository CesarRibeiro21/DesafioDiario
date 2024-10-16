import con from "./connection.js";


export async function inserirDiario(diaria){
    const comando = `
    insert into tb_diaria(dt_dia,ds_conteudo,id_usuario)
    values
    (?,?,?);
    `;

    let resposta = await con.query(comando [diaria.dia,diaria.conteudo,diaria.usuario_id]);
    let info = resposta[0];
    return info.insertId;

}

export async function alterarDiario(id,diaria){
    const comando = `
    update tb_diario
    set dt_dia = ?,
	ds_conteudo = ?,
	id_usuario = ?
    where id_diario = ?
    `

    let resposta = await con.query(comando[diaria.dia,diaria.conteudo,diaria.usuario_id,id])
    let registros = resposta[0];

    return registros.affectedRows;
}
export async function deletarDiario(){
    const comando = `
    delete from tb_diario
         where id_diario = ?
    `
}

export async function consultarDiario(){
    const comando = `
    select id_diario     id,
    dt_dia            datas,
    ds_conteudo       conteudo,
    id_usuario        usuario
    from tb_diario;
    `
}
