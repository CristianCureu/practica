import * as Koa from "koa";
import { sql } from "../src/sql";

export async function getColet(ctx: Koa.Context) {
  let { idDosar } = ctx.request.query;
  let query = `select c.* from dbo.DosarTransport as d 
  join dbo.DosarTransport_Facturi as f on d.Id = f.IdDosarTransport and d.Id = @idDosar
  join dbo.DosarTransport_Colete as c on f.IdFactura = c.IdFactura`;
  let { recordset } = await sql(query, { idDosar } as any);
  ctx.body = recordset;
}

export async function putColet(ctx: Koa.Context) {
  let { idColet } = ctx.request.query;
  let query = `UPDATE DosarTransport_Colete 
   SET ScanatIncarcare=GETDATE()
   where IdColet=@idColet`
  await sql(query, { idColet} as any);
  ctx.body = "ok";
 
}