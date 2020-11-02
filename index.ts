import { BearerTokenAuthenticator, SmartThingsClient } from '@smartthings/core-sdk';
import { setDefaultClient, STGenSmartApp } from '@stgen/stgen';
import express from 'express';
import fs from 'fs';
import { STGenSmartAppModule } from 'lib/module';
import { virtualDimmer } from 'stgen/devices';
import * as modules from './modules';

const PORT = process.env.PORT || 8080;

const token = fs.readFileSync('accessToken', 'utf-8');
const client = new SmartThingsClient(new BearerTokenAuthenticator(token));
setDefaultClient(client);

const smartApp = new STGenSmartApp();

const smartAppRoute = express
  .Router()
  .use(express.json())
  .post('/', (req, res, _next) => smartApp.handleHttpCallback(req, res));

const server = express();

Object.keys(modules).forEach(moduleName => {
  const module = (modules as any)[moduleName] as STGenSmartAppModule;
  const route = module.configure(smartApp);
  if (route) {
    server.use(`/${moduleName}`, route);
  }
});

server
  .use('/stgen-smartapp', smartAppRoute)
  .listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
