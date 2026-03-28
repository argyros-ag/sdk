export declare class ArgyrosError extends Error {
    readonly statusCode: number;
    readonly body?: unknown | undefined;
    constructor(message: string, statusCode: number, body?: unknown | undefined);
}
export declare class RateLimitError extends ArgyrosError {
    constructor(body?: unknown);
}
export declare class NoRouteError extends ArgyrosError {
    constructor(body?: unknown);
}
export declare class BadRequestError extends ArgyrosError {
    constructor(message: string, body?: unknown);
}
export declare class AuthError extends ArgyrosError {
    constructor(body?: unknown);
}
export declare class ServerError extends ArgyrosError {
    constructor(message: string, body?: unknown);
}
