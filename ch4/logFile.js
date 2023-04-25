const winston = require('winston');
const winstonDaily = require('winston-daily-rotate-file');
const moment = require('moment')
const { combine, timestamp, printf, colorize  } = winston.format;

const timeStampFormat = () =>  moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ');

const logDir = 'logs';

const logger = winston.createLogger({
    format: combine(
        timestamp({format: 'YYYY-MM-DD HH:mm:ss'}), // 로그 파일에 시간이 이런 형태로 기록됨
        printf(info => { // 데이터를 어떤 형태로 받을지 직접 커스텀 할 수 있음
            return `${info.timestamp} ${info.level}: ${info.message}`
        }),
    ),

    transports: [
        // 로그 파일에 찍힐 내용을 콘솔에도 찍어줌
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.splat(),
                winston.format.colorize(),
                // winston.format.simple() // `${info.level}: ${info.message} JSON.stringify({ ...rest })` 포맷
            )
        }),

        new winstonDaily({
            level: 'info', // info 레벨 로그를 저장할 파일 설정
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            filename: `%DATE%.log`, // %DATE% = 위에서 설정한 datePattern 이 들어감
            dirname: logDir,
            maxFiles: 30,  // 30일치 로그 파일 저장
        }),

        new winstonDaily({
            level: 'error', // error 레벨 로그를 저장할 파일 설정
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            filename: `%DATE%.error.log`,
            dirname: logDir + '/error',  // error.log 파일은 /logs/error 하위에 저장
            maxFiles: 30,
        }),
    ],
});

logger.info(
    '테스트'
)
logger.error(
    '테스트 에러'
)