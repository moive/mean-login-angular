import bunyan from 'bunyan';
import BunyanFormat from 'bunyan-format';

const logger = bunyan.createLogger({
  name: 'jwt-api',
  streams: [{ stream: BunyanFormat({ outputMode: 'long' }) }]
});

export { logger };
