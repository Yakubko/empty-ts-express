import winston from 'winston';
import appRoot from 'app-root-path';
import { Options } from 'morgan';

const accessLogger = winston.createLogger({
    exitOnError: false,
    transports: [
        new winston.transports.File({
            level: 'http',
            filename: `${appRoot}/logs/access.log`,
            maxsize: 5242880, // 5MB
            maxFiles: 5,
            handleExceptions: true,
        }),
    ],
});

if (process.env.NODE_ENV !== 'production') {
    accessLogger.add(
        new winston.transports.Console({
            // level: 'http',
            format: winston.format.combine(winston.format.colorize({ all: true }), winston.format.simple()),
        }),
    );
}

export const morganOption: Options = {
    stream: {
        write: (message: string): void => {
            accessLogger.http(message.trim());
        },
    },
};
