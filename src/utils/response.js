export var VALIDATION_FAILED = 'Validation failed';
export var CHECKING_FAILED = 'Checking failed';
export var NOT_VALID = 'Not Valid';
export var respond200 = function (ctx) {
    ctx.status = 200;
    ctx.body = '';
};
export var respond204 = function (ctx, body) {
    ctx.status = 204;
    ctx.body = body || '';
};
export var respond200json = function (ctx, body) {
    // koa provide 200 for response with body
    // ctx.status = 200
    ctx.type = 'json';
    ctx.body = body;
};
export var respond200plain = function (ctx, body) {
    ctx.type = 'text/plain';
    ctx.body = body;
};
export var respond403 = function (ctx, body) {
    ctx.status = 403;
    ctx.body = body || '';
};
export var respond400 = function (ctx, body) {
    ctx.status = 400;
    ctx.body = body || '';
};
export var respond409 = function (ctx, body) {
    ctx.status = 409;
    ctx.body = body || '';
};
export var respond401 = function (ctx) {
    ctx.status = 401;
    ctx.body = '';
};
export var respond404 = function (ctx, body) {
    ctx.status = 404;
    ctx.body = body || '';
};
export var respond500 = function (ctx) {
    ctx.status = 500;
    ctx.body = '';
};
export var respondForDelete = function (ctx, count) {
    switch (count) {
        case 0:
            return respond204(ctx);
        case 1:
            return respond200(ctx);
    }
    return respond500(ctx);
};
export var respondForDeleteOne = function (ctx, result, okBody, notOkBody) {
    if (result.result.ok !== 1) {
        return respond500(ctx);
    }
    if (!result.matchedCount) {
        return respond200json(ctx, notOkBody);
    }
    if (!result.modifiedCount) {
        return respond200json(ctx, notOkBody);
    }
    return respond200json(ctx, okBody);
};
/**
 * @deprecated
 */
export var respondForUpdateOne = function (ctx, result) {
    if (result.result.ok !== 1) {
        return respond500(ctx);
    }
    if (!result.matchedCount) {
        return respond404(ctx);
    }
    if (!result.modifiedCount) {
        return respond204(ctx);
    }
    return respond200(ctx);
};
export var respondForFindOneAndUpdate = function (ctx, result) {
    if (result.ok !== 1) {
        respond500(ctx);
        return;
    }
    if (result.value === null) {
        respond404(ctx);
        return;
    }
    respond200(ctx);
};
export var newRespondForUpdateOne = function (ctx, result, okBody, notOkBody) {
    if (result.result.ok !== 1) {
        return respond500(ctx);
    }
    if (!result.matchedCount) {
        return respond200json(ctx, notOkBody);
    }
    return respond200json(ctx, okBody);
};
export var respondForUpdateMany = newRespondForUpdateOne;
export var statusIs2xx = function (s) { return s >= 200 && s < 300; };
export var timestampFromDate = function (d) { return Math.floor(d.getTime() / 1000); };
export var timestampFromMs = function (d) { return Math.floor(d / 1000); };
export var dateFromTimestamp = function (t) { return new Date(t * 1000); };
export var timestampFromObjectID = function (id) { return id.generationTime; };
//# sourceMappingURL=response.js.map