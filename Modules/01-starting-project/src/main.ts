// we here we deal with the module so we make the root is module not component

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

// import { bootstrapApplication } from '@angular/platform-browser';

// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent).catch((err) => console.error(err)); // this line will work only if the root component (app component) is a standalone component
