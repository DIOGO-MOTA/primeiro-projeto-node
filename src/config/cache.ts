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
            host: 'localhost',
            port: 6379,
            password: undefined,
        },
    },
} as IChacheConfig;
