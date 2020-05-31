import { Request, Response, NextFunction } from 'express';
import createError, { HttpError } from 'http-errors';

export function notFound(req: Request, res: Response, next: NextFunction): void {
    next(createError(404));
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(err: HttpError, req: Request, res: Response, _next: NextFunction): void {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';

    res.status(status).send(message);
}
