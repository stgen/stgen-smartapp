/* This file exports all modules created with 'npm run create-module --name=<name>' */
import { STGenSmartApp } from '@stgen/stgen';
import { STGenSmartAppModule } from 'lib/module';

// Export a default no-op module so that there is always >=1 module.
export const NopModule: STGenSmartAppModule = {
  configure(app: STGenSmartApp): null {
    return null;
  },
};
