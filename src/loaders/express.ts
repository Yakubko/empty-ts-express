import * as express from 'express';
import * as bodyParser from 'body-parser';

export default ({ app }: { app: express.Application }): void => {
    app.enable('trust proxy');
    app.use(bodyParser.urlencoded({ extended: false }));
};
