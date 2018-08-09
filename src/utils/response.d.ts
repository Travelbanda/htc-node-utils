import { Context } from 'koa';
import { ObjectID, UpdateWriteOpResult, FindAndModifyWriteOpResultObject } from 'mongodb';
export declare const VALIDATION_FAILED = "Validation failed";
export declare const CHECKING_FAILED = "Checking failed";
export declare const NOT_VALID = "Not Valid";
export declare const respond200: (ctx: Context) => void;
export declare const respond204: (ctx: Context, body?: object | undefined) => void;
export declare const respond200json: (ctx: Context, body: object) => void;
export declare const respond200plain: (ctx: Context, body: string) => void;
export declare const respond403: (ctx: Context, body?: string | object | undefined) => void;
export declare const respond400: (ctx: Context, body?: string | object | undefined) => void;
export declare const respond409: (ctx: Context, body?: string | object | undefined) => void;
export declare const respond401: (ctx: Context) => void;
export declare const respond404: (ctx: Context, body?: string | undefined) => void;
export declare const respond500: (ctx: Context) => void;
export declare const respondForDelete: (ctx: Context, count: number) => void;
export declare const respondForDeleteOne: (ctx: Context, result: UpdateWriteOpResult, okBody: object, notOkBody: object) => void;
/**
 * @deprecated
 */
export declare const respondForUpdateOne: (ctx: Context, result: UpdateWriteOpResult) => void;
export declare const respondForFindOneAndUpdate: (ctx: Context, result: FindAndModifyWriteOpResultObject<any>) => void;
export declare const newRespondForUpdateOne: (ctx: Context, result: UpdateWriteOpResult, okBody: object, notOkBody: object) => void;
export declare const respondForUpdateMany: (ctx: Context, result: UpdateWriteOpResult, okBody: object, notOkBody: object) => void;
export declare const statusIs2xx: (s: number) => boolean;
export declare const timestampFromDate: (d: Date) => number;
export declare const timestampFromMs: (d: number) => number;
export declare const dateFromTimestamp: (t: number) => Date;
export declare const timestampFromObjectID: (id: ObjectID) => number;
