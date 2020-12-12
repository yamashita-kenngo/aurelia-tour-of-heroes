import Aurelia, { RouterConfiguration } from 'aurelia';
import { MyApp } from './my-app';
import * as globalComponents from './registry';
Aurelia
.register(RouterConfiguration, globalComponents)
  .app(MyApp)
  .start();
