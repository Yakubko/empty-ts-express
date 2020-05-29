import * as express from 'express';
import router from '../api';

export default ({ app }: { app: express.Application }): void => {
    app.use(router);
};
