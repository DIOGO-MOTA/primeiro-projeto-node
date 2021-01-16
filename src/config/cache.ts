import { RedisOptions } from 'ioredis';

interface IChacheConfig {
    drive: 'redis';

    config: {
        redis: RedisOptions;
    };
}

export default {
    drive: 'redis',

    config: {
        redis: {
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
            password: process.env.REDIS_PASS || undefined,
        },
    },
} as IChacheConfig;
