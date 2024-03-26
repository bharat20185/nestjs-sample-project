import { transports, createLogger, format, level } from 'winston';
const { combine, timestamp, printf } = format;

// Define log format
const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});

// Define transports (where logs will be stored)
const transportsList = [
    new transports.File({ filename: './logs/error.log', level: 'error' }),
    new transports.File({ filename: './logs/combined.log' }),
    // Add more transports as needed, e.g., file transport
];

// Create logger instance
export const logger = createLogger({
    level: 'info', // Set default log level
    format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        myFormat
    ),
    transports: transportsList,
});

export const winstonConfig = {
    logger,
};
