// import * as Koa from "Koa";

import {sql} from "./../sql";

export async function getStatus(ctx) {
    ctx.body = await sql("select * from dbo.Status");
}

export async function putStatus(ctx) {
    const (nume, TipStatus, StatusDesign) = ctx.request.body;
    if (!nume) {
        return ctx.throw(400, "Coloana <nume> este obligatorie pentru tabela <status>")
    }

    ctx.body = await sql("insert into dbo.Status(nume, TipStatus, StatusDesign) values(@nume, @TipStatus, @StatusDesign)", ctx.request.body);

}