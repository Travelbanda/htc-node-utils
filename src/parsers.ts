import { Middleware } from 'koa'
import * as Body from 'koa-body'


export const multipartParser: Middleware = Body({
    formidable: {
        maxFieldsSize: 3 * 1024 * 1024,
        maxFields: 1,
        multiples: false,
    },
    json: false,
    multipart: true,
    text: false,
    urlencoded: false,
})

export const jsonParser: Middleware = Body({
    json: true,
    jsonLimit: 8 * 1024, // 8kb
    multipart: false,
    text: false,
    urlencoded: false,
})

export const formDataParser: Middleware = Body({
    json: false,
    multipart: false,
    text: false,
    urlencoded: true,
    formLimit: 10 * 1024,
})
