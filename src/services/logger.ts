import pino from 'pino';

import { nodeEnv } from '@configs/varEnvs';

const levels = {
  production: 'warn', // warn, error and fatal
  development: 'trace', // trace, debug, info, warn, error and fatal
};

export default pino({
  level: levels[nodeEnv],
});
