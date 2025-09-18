import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

import * as dotenv from 'dotenv';

// Load env depending on NODE_ENV or a custom flag
const env = process.env.NODE_ENV || 'development';
switch (env) {
  case 'development':
    dotenv.config({ path: '.env.development' });
    break;
 case 'production':
    dotenv.config({ path: '.env.production' });
    break;
 default:
    throw new Error(`Unknown environment: ${env}`);
}

const config = {
  name: 'iot',
  connector: 'mongodb',
  url: '',
  host: process.env.DB_HOST,
  port: +(process.env.DB_PORT ?? 27017),
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  useNewUrlParser: true
}

console.log(config);

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class IotDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'iot';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.iot', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
