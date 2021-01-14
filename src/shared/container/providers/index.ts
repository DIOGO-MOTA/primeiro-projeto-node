import { container } from 'tsyringe';

import IStorageProvider from './StorageProvider/models/IStorageProvider';
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';

import IMailProvider from './MailProvider/models/IMailProvider';
import EtherealMailProvider from './MailProvider/implementations/EtherealMailProvider';

import IMaiTemplateProvider from './MailTemplateProvider/models/IMailTemplateProvider';
import HandlebarsMailTempleteProvider from './MailTemplateProvider/implementations/HandlebarsMailTemplateProvider';

import ICacheProvider from './CacheProvider/models/ICacheProvider';
import RedisCacheProvider from './CacheProvider/implementations/RedisCacheProvider';

container.registerSingleton<IStorageProvider>(
    'StorageProvider',
    DiskStorageProvider,
);

container.registerSingleton<ICacheProvider>(
    'CacheProvider',
    RedisCacheProvider,
);

container.registerSingleton<IMaiTemplateProvider>(
    'MailTemplateProvider',
    HandlebarsMailTempleteProvider,
);

container.registerInstance<IMailProvider>(
    'MailProvider',
    container.resolve(EtherealMailProvider),
);
