import { container } from 'tsyringe';

import IHashProvider from './HanhProvider/models/IHashProvider';
import BCryptHashProvider from './HanhProvider/implementations/BCryptHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
