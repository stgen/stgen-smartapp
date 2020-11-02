import { STGenSmartApp } from '@stgen/stgen';
import { IRouter } from 'express';

export interface STGenSmartAppModule {
  configure(app: STGenSmartApp): IRouter | null;
}
