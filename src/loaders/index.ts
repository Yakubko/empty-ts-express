import * as express from 'express';
import expressLoader from './express';
import routingsLoader from './routings';

export default ({ expressApp }: { expressApp: express.Application }): void => {
    expressLoader({ app: expressApp });
    routingsLoader({ app: expressApp });
};
