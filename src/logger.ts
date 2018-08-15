import { Context, Middleware } from 'koa'

const logString = (ctx: Context, status: number, startTime: number) =>
    `${ctx.method} ${ctx.path} ${status} ${Date.now() - startTime}ms\n`

export const logger: Middleware = async (ctx, next) => {
    const startTime = Date.now()
    try {
        await next()
        process.stdout.write(logString(ctx, ctx.status, startTime))
    } catch (e) {
        process.stderr.write(logString(ctx, e.status || 500, startTime))
        throw e
    }
}

