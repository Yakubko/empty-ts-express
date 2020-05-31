import express from 'express';
import loaders from './loader';

const app = express();
loaders({ expressApp: app });

export default app;
