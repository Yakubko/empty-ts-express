import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import compression from 'compression';
import morgan from 'morgan';
import { morganOption } from '../config/winston';
import router from '../api';
import { errorHandler, notFound } from '../middleware/error-handlers';

export default ({ app }: { app: express.Application }): void => {
    app.enable('trust proxy');
    app.use(helmet());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(compression());
    app.use(express.json());
    app.use(morgan('combined', morganOption(process.env.NODE_ENV)));

    app.use(router);

    app.use(notFound);
    app.use(errorHandler);
};
