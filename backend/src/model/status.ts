import * as Koa from "koa";
import { sql } from "./../sql";

export async function getStatus(ctx: Koa.Context) {

    ctx.body = await sql("select * from dbo.Status");

}

export async function putStatus(ctx: Koa.Context) {
    const {nume, TipStatus, StatusDesign} = ctx.request.body
    if(!nume){
return ctx.throw(400, "Coloana <nume> este obligatorie pentru tabela <status>")
    }    
    if(!TipStatus){
        return ctx.throw(400, "Coloana <tipStatus> este obligatorie pentru tabela <status>")
            }  
    if(!StatusDesign){
        return ctx.throw(400, "Coloana <statusDesign> este obligatorie pentru tabela <status>")
            }          
    ctx.body = await sql("insert into dbo.Status(nume, TipStatus, StatusDesign) values(@nume, @tipStatus, @statusDesign)", ctx.request.body);

}
