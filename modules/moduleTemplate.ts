// File created by running 'npm run create-module --name=stgenSmartAppModuleTemplate'

import { STGenSmartApp } from '@stgen/stgen';
import express from 'express';
import { STGenSmartAppModule } from '../lib/module';
import * as capabilities from '../stgen/capabilities';
import * as devices from '../stgen/devices';
import * as scenes from '../stgen/scenes';
import * as locations from '../stgen/locations';

// A GUID generated with the module to use as a token for other services
const moduleToken = '<GUID>';

export const stgenSmartAppModuleTemplate: STGenSmartAppModule = {
  configure(app: STGenSmartApp): express.IRouter | null {
    // Subscribe to device events
    /*
    app.subscribe(devices.virtualSwitch().main.switch, (c, e) => {
      console.log(`Switch value: ${e.value}`);
    });
    */

    // Handle other kinds of requests
    const router = express.Router();

    /*
    router.use(express.json()).post('/faspdoifa1234701748asdlfkj/turnOff', (req, res) => {
      console.log('Got data from POST:', req.body);
      res.json({ result: 'ok' });
    });
    */

    return router;
  },
};
