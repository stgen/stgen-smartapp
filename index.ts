import { BearerTokenAuthenticator, SmartThingsClient } from '@smartthings/core-sdk';
import { setDefaultClient, STGenSmartApp } from '@stgen/stgen';
import express from 'express';
import fs from 'fs';
import { virtualDimmer } from 'stgen/devices';

const PORT = process.env.PORT || 8080;

const token = fs.readFileSync('accessToken', 'utf-8');
const client = new SmartThingsClient(new BearerTokenAuthenticator(token));
setDefaultClient(client);

const smartapp = new STGenSmartApp().subscribe(
  virtualDimmer().main.switchlevel,
  (context, event) => {
    console.log('Dimmer changed: ', event);
  }
);

const server = express();

server
  .use(express.json())
  .post('/stgen-smartapp', (req, res, _next) => smartapp.handleHttpCallback(req, res))
  .listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
