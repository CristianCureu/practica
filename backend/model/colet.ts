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
  let { idDosar } = ctx.request.query;
  let query = `UPDATE c
  SET ScanatIncarcare = GETDATE()
  FROM dbo.DosarTransport AS d
  JOIN dbo.DosarTransport_Facturi AS f ON d.Id = f.IdDosarTransport AND d.Id = @idDosar
  JOIN dbo.DosarTransport_Colete AS c ON f.IdFactura = c.IdFactura
  WHERE c.IdColet = @idColet;`

  /* let queryFnct= `UPDATE (select c.* from dbo.DosarTransport as d 
    join dbo.DosarTransport_Facturi as f on d.Id = f.IdDosarTransport and d.Id = @idDosar
    join dbo.DosarTransport_Colete as c on f.IdFactura = c.IdFactura)
    SET ScanatIncarcare=GETDATE()
    where IdColet=@idColet ` 
  */
  await sql(query, {idColet,idDosar} as any);
  ctx.body="ok?"
}