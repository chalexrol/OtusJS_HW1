import { startOnPort, app } from './core/express';
import { initForApp } from './core/routes';

const port = 3000;
startOnPort(port);

initForApp(app);