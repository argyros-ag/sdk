export class ArgyrosError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number,
    public readonly body?: unknown
  ) {
    super(message);
    this.name = "ArgyrosError";
  }
}

export class RateLimitError extends ArgyrosError {
  constructor(body?: unknown) {
    super("Rate limit exceeded", 429, body);
    this.name = "RateLimitError";
  }
}

export class NoRouteError extends ArgyrosError {
  constructor(body?: unknown) {
    super("No route found", 404, body);
    this.name = "NoRouteError";
  }
}

export class BadRequestError extends ArgyrosError {
  constructor(message: string, body?: unknown) {
    super(message, 400, body);
    this.name = "BadRequestError";
  }
}

export class AuthError extends ArgyrosError {
  constructor(body?: unknown) {
    super("Invalid or missing API key", 401, body);
    this.name = "AuthError";
  }
}

export class ServerError extends ArgyrosError {
  constructor(message: string, body?: unknown) {
    super(message, 500, body);
    this.name = "ServerError";
  }
}
