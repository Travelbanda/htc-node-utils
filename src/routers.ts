import * as Router from 'koa-router'

export type TRouterMethod = 'post' | 'get'
export const ROUTER_METHODS = {
    POST: 'post' as TRouterMethod,
    GET: 'get' as TRouterMethod,
}

export interface IRouteParams {
    method: TRouterMethod
    url: string
    handler(ctx: Router.IRouterContext): void
}

export const addRoutes = (router: Router, routes: IRouteParams[]) =>
    routes.forEach((route) => {
        router[route.method](route.url, route.handler)
    })
