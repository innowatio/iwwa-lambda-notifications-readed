import bunyan from "bunyan";

import {LOG_LEVEL} from "../config";

const logger = bunyan.createLogger({name: "notifications-readed"});

logger.level(process.env.NODE_ENV === "test" ? "fatal" : LOG_LEVEL);

export default logger;
