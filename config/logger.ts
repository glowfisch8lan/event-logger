import {Application, Request, Response} from 'express';
import {getLogger, Logger} from 'log4js'

/**
 * Логгер по-умолчанию, подчиняется переменной LOG_LEVEL в .env
 */
let logger: Logger
/**
 * Логгер, который может выводить сообщения любого уровня
 */
let loggerInfo: Logger

const config = (app: Application) => {
  try {
    logger = getLogger();
    loggerInfo = getLogger('console');
    loggerInfo.level = 'trace';
    logger.level = process.env.LOG_LEVEL || 'error';
    console.log(`[I] Log level is ${logger.level}`)
  } catch (e: any) {
    console.log('[E] Unable to init logger:');
    console.log(e);
    process.exit(1);
  }

};

export {config, logger, loggerInfo}