"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveEntity = exports.deleteEntity = exports.query = exports.sql = exports.__ctx = void 0;
const mssql = require("mssql");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone"); // dependent on utc plugin
const config_1 = require("./config");
const queries = require("./query");
const __ctx = (ctx) => `DECLARE @__ctx varchar(128) = '${typeof ctx == 'string' ? ctx : ctx.cookies?.get("email")}'; DECLARE @ctx varbinary(128) = CAST(@__ctx+';' AS varbinary(128)); SET CONTEXT_INFO @ctx;\n`;
exports.__ctx = __ctx;
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale("ro");
const pool = new mssql.ConnectionPool(config_1.default.sql);
pool.connect().catch(console.error);
const sqlUpdatePrep = (table, params) => {
    let sqlcmd = `UPDATE ${table} SET `;
    for (let p in params) {
        if (~['Id', 'id', 'code', 'Code'].indexOf(p))
            continue;
        sqlcmd += `\n\t"${p}"=@${p},`;
    }
    return sqlcmd.substr(0, sqlcmd.length - 1) + `\n WHERE Id=@Id; select * from ${table} WHERE Id=@Id`;
};
const sqlInsertPrep = (table, params) => {
    let sqlcmd = '';
    for (let p in params) {
        if (~['Id', 'id', 'code', 'Code'].indexOf(p))
            continue;
        sqlcmd += `, ${p}`;
    }
    return `
    INSERT INTO ${table}(${sqlcmd.split(', ').filter(c => c).map(c => `"${c}"`)}) 
    VALUES (${sqlcmd.replace(/, /g, ', @').substr(2)})
    select * from ${table} where id = scope_identity()
    `;
};
// function sqlFormat(name) { return "[" + name.replace('.', '].[') + "]"; }
// function sqlValue(val) {
//     if (val && val.match && val.match(/\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ/)) {
//         //return "'" + moment(moment(val).toDate()).format('YYYY-MM-DDTHH:mm:ss') + "'";
//         return `'${dayjs(val).tz('Europe/Bucharest').format('YYYY-MM-DDTHH:mm:ss')}'`;
//     }
//     return "N'" + val + "'";
// }
/**
 * Ruleaza comanda sqlcmd și întorce rezultatul
 * @param sqlcmd comanda sql poate contine parametrii in formatul `@numeParam`
 * @param params valoarea parametrilor object key/value pair ( ex: {id: 1, nume: 'test'} )
 * @param levelPool nivelul de acces la baza de date 'read' | 'write' | 'backup'
 */
async function sql(sqlcmd, params) {
    try {
        const request = await (await pool.connect()).request();
        for (const param in params) {
            let val = params[param];
            // all data will be in UTC
            // if (typeof val === 'string' && val.length <= 25 && val.match(/\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ/)) {
            //     val = dayjs(val).tz('Europe/Bucharest').format('YYYY-MM-DDTHH:mm:ss');
            // }
            request.input(param, val);
        }
        sqlcmd = (~sqlcmd.indexOf('DECLARE @__ctx')) ? sqlcmd : `${(0, exports.__ctx)("CyberTM@sevice.online")}\n ${sqlcmd}`;
        return await request.query(sqlcmd);
    }
    catch (e) {
        console.error({ sqlError: e.message || e, sqlcmd, params });
        throw e;
    }
}
exports.sql = sql;
async function query(ctx) {
    let { query, params } = ctx.request.body;
    query = `${(0, exports.__ctx)(ctx)} ${queries[query]}`;
    try {
        let { recordset } = await sql(query, params);
        ctx.body = recordset;
        ctx.type = 'application/json;charset=UTF-8';
    }
    catch (e) {
        console.error({ query, body: ctx.request.body }, e);
        ctx.throw(400, e);
    }
}
exports.query = query;
/**
 * Delete row from table: {table: string, params: KeyPair<colName, sqlValue>}
 * @param ctx
 */
async function deleteEntity(ctx) {
    console.log({ delete: ctx.request.query });
    let { table, id } = ctx.request.query;
    let sqlcmd = `delete from ${table} where id = @id`;
    // if (typeof data === 'string') data = JSON.parse(data);
    // if (typeof data.params === 'string') data.params = JSON.parse(data.params);
    if (!table)
        return ctx.throw(400, 'param <table> is missing!');
    if (!id)
        return ctx.throw(400, 'param <id> is missing!');
    ctx.body = await sql(`${(0, exports.__ctx)(ctx)} ${sqlcmd}`, { id: id.toString() });
}
exports.deleteEntity = deleteEntity;
/**
 * Salvare JSON bundle, format body: {table: string, params: KeyPair<colName, sqlValue>}
 * @param ctx
 */
async function saveEntity(ctx) {
    let { table, params } = ctx.request.body;
    let sqlcmd = '';
    // if (typeof data === 'string') data = JSON.parse(data);
    // if (typeof data.params === 'string') data.params = JSON.parse(data.params);
    if (params.sessionsUnused)
        delete params.sessionsUnused;
    if (!table)
        return ctx.throw(400, 'param <table> is missing!');
    if (params.id || params.Id) {
        sqlcmd = sqlUpdatePrep(table, params);
    }
    else {
        sqlcmd = sqlInsertPrep(table, params);
    }
    const { recordset } = (await sql(`${(0, exports.__ctx)(ctx)} ${sqlcmd}`, params));
    ctx.body = recordset;
    ctx.type = 'application/json;charset=UTF-8';
}
exports.saveEntity = saveEntity;
