import * as Koa from "koa";
import { sql } from "./../sql";

export async function getColete(ctx: Koa.Context) {
  let query = "select * from dbo.Colete"; // cum o fi in baza de date ca n am acces
  let params: any = { id: undefined };
  if (ctx.request.query.id) {
    query += " where id = @id";
    params.id = ctx.request.query.id;
  }
  let { recordset } = await sql(query, params);
  ctx.body = recordset;
}

export async function putColet(ctx: Koa.Context) {
  const { id, expeditor, destinatar, greutate, dimensiuni, stareLivrare } = ctx.request.body;
  if (!id) {
    return ctx.throw(400, "Coloana <id> este obligatorie pentru tabela <Colete>!");
  }
  if (!expeditor) {
    return ctx.throw(400, "Coloana <expeditor> este obligatorie pentru tabela <Colete>!");
  }
  if (!destinatar) {
    return ctx.throw(400, "Coloana <destinatar> este obligatorie pentru tabela <Colete>!");
  }
  if (!greutate) {
    return ctx.throw(400, "Coloana <greutate> este obligatorie pentru tabela <Colete>!");
  }
  if (!dimensiuni) {
    return ctx.throw(400, "Coloana <dimensiuni> este obligatorie pentru tabela <Colete>!");
  }
  if (!stareLivrare) {
    return ctx.throw(400, "Coloana <stareLivrare> este obligatorie pentru tabela <Colete>!");
  }

  await sql(
    "insert into dbo.Colete (id, expeditor, destinatar, greutate, dimensiuni, stareLivrare) values (@id, @expeditor, @destinatar, @greutate, @dimensiuni, @stareLivrare)",
    ctx.request.body
  );
  await getColete(ctx);
}

export async function deleteColet(ctx: Koa.Context) {
  let id = ctx.request.query.id;
  if (Array.isArray(id)) {
    id = id[0]; // 
  }
  await sql(`delete from dbo.Colete where id = @id`, { id });
  await getColete(ctx);
}

export async function updateColet(ctx: Koa.Context) {
  let { id } = ctx.request.body;
  id = id || ctx.request.query.id;
  if (!id) {
    return ctx.throw(400, "Coloana <id> este obligatorie pentru update!");
  }
  let { recordset: [idExists] } = await sql('select id from dbo.Colete where id = @id', { id });

  if (!idExists) {
    return ctx.throw(400, `Id-ul ${id} nu există în tabela Colete!`);
  }

  let columns = Object.keys(ctx.request.body).filter(e => e !== 'id');

  columns = columns.map(e => `${e} = @${e}`);

  console.log({ columns });

  let query = `update dbo.Colete 
               set ${columns.join(',\n')} 
               where id = @id`;
  await sql(query, { ...ctx.request.body, id });
  await getColete(ctx);
}
