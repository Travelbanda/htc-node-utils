import { Context } from 'koa'
import { ObjectID, UpdateWriteOpResult, FindAndModifyWriteOpResultObject } from 'mongodb'

export const VALIDATION_FAILED = 'Validation failed'
export const CHECKING_FAILED = 'Checking failed'

export const NOT_VALID = 'Not Valid'

export const respond200 = (ctx: Context) => {
    ctx.status = 200
    ctx.body = ''
}

export const respond204 = (ctx: Context, body?: object) => {
    ctx.status = 204
    ctx.body = body || ''
}

export const respond200json = (ctx: Context, body: object) => {
    // koa provide 200 for response with body
    // ctx.status = 200

    ctx.type = 'json'
    ctx.body = body
}

export const respond200plain = (ctx: Context, body: string) => {
    ctx.type = 'text/plain'
    ctx.body = body
}

export const respond403 = (ctx: Context, body?: object | string) => {
    ctx.status = 403
    ctx.body = body || ''
}

export const respond400 = (ctx: Context, body?: object | string) => {
    ctx.status = 400
    ctx.body = body || ''
}

export const respond409 = (ctx: Context, body?: object | string) => {
    ctx.status = 409
    ctx.body = body || ''
}

export const respond401 = (ctx: Context) => {
    ctx.status = 401
    ctx.body = ''
}

export const respond404 = (ctx: Context, body?: string) => {
    ctx.status = 404
    ctx.body = body || ''
}

export const respond500 = (ctx: Context) => {
    ctx.status = 500
    ctx.body = ''
}

export const respondForDelete = (ctx: Context, count: number) => {
    switch (count) {
        case 0:
            return respond204(ctx)
        case 1:
            return respond200(ctx)
    }
    return respond500(ctx)
}

export const respondForDeleteOne = (
    ctx: Context,
    result: UpdateWriteOpResult,
    okBody: object,
    notOkBody: object,
) => {
    if (result.result.ok !== 1) {
        return respond500(ctx)
    }
    if (!result.matchedCount) {
        return respond200json(ctx, notOkBody)
    }
    if (!result.modifiedCount) {
        return respond200json(ctx, notOkBody)
    }
    return respond200json(ctx, okBody)
}

/**
 * @deprecated
 */
export const respondForUpdateOne = (ctx: Context, result: UpdateWriteOpResult) => {
    if (result.result.ok !== 1) {
        return respond500(ctx)
    }
    if (!result.matchedCount) {
        return respond404(ctx)
    }
    if (!result.modifiedCount) {
        return respond204(ctx)
    }
    return respond200(ctx)
}

export const respondForFindOneAndUpdate = (
    ctx: Context,
    result: FindAndModifyWriteOpResultObject,
) => {
    if (result.ok !== 1) {
        respond500(ctx)
        return
    }
    if (result.value === null || result.value === undefined) {
        respond404(ctx)
        return
    }

    respond200(ctx)
}

export const newRespondForUpdateOne = (
    ctx: Context,
    result: UpdateWriteOpResult,
    okBody: object,
    notOkBody: object,
) => {
    if (result.result.ok !== 1) {
        return respond500(ctx)
    }
    if (!result.matchedCount) {
        return respond200json(ctx, notOkBody)
    }
    return respond200json(ctx, okBody)
}

export const respondForUpdateMany = newRespondForUpdateOne

export const statusIs2xx = (s: number) => s >= 200 && s < 300

export const timestampFromDate = (d: Date) => Math.floor(d.getTime() / 1000)
export const timestampFromMs = (d: number) => Math.floor(d / 1000)
export const dateFromTimestamp = (t: number) => new Date(t * 1000)
export const timestampFromObjectID = (id: ObjectID) => id.generationTime
