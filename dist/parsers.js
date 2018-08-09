import * as Body from 'koa-body';
export var multipartParser = Body({
    formidable: {
        maxFieldsSize: 3 * 1024 * 1024,
        maxFields: 1,
        multiples: false,
    },
    json: false,
    multipart: true,
    text: false,
    urlencoded: false,
});
export var jsonParser = Body({
    json: true,
    jsonLimit: 8 * 1024,
    multipart: false,
    text: false,
    urlencoded: false,
});
export var formDataParser = Body({
    json: false,
    multipart: false,
    text: false,
    urlencoded: true,
    formLimit: 10 * 1024,
});
//# sourceMappingURL=parsers.js.map