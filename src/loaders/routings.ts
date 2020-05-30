import { Application, Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import router from '../api';

export default ({ app }: { app: Application }): void => {
    app.use(router);

    app.use((req: Request, res: Response, next: NextFunction) => {
        next(createError(404));
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    app.use((err: createError.HttpError, req: Request, res: Response, _next: NextFunction) => {
        const status = err.status || 500;
        const message = err.message || 'Something went wrong';

        res.status(status).send({ status, message });
    });
};
