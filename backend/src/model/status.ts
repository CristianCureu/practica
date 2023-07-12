//import * as Koa from "koa";
import  {sql} from "../sql"

export async function getStatus(ctx) {

    ctx.body= await sql("select * from dbo.Status")

}


export async function putStatus(ctx) {

    const {nume, tipStatus, statusDesign}= ctx.request.body;

    if(!nume){
        return ctx.throw(400,"Coloana <nume> este obligatorie pt. <status>");
    }
    
    if(!tipStatus){
        return ctx.throw(400,"Coloana <tipStatus> este obligatorie pt. <status>");
    }
    
    if(!statusDesign){
        return ctx.throw(400,"Coloana <statusDesign> este obligatorie pt. <status>");
    }

    ctx.body= await sql("insert into dbo.Status(Nume, TipStatus, StatusDesign) values (@nume, @tipStatus, @statusDesign)",ctx.request.body);
     // await getStatus(ctx); //check line
}



export async function deleteStatus(ctx) {

    const {id}= ctx.request.query;
    await sql("delete from status where id=@id",{id});
   // await getStatus(ctx); //check line

}

export async function updateStatus(ctx) {

   let columns= Object.keys(ctx.request.body).filter(e=> e!=='id');
   
   //console.log(columns);
   
   columns= columns.map(e=>`${e}=@${e}`)
   
   let sqlUpdate=`update dbo.Status 
                set ${columns.join(',\n')}
                where id=@id;
   `
   await sql(sqlUpdate,ctx.request.body)
   console.log(sqlUpdate);
  //await getStatus(ctx);
}