import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

// here we convert all componetns to non standalone components to put them into the declerations
// usihg this way (module) we make the components to take to each other without importing any component inside another comp
@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, SharedModule, TasksModule],
})
export class AppModule {}

// @NgModule({
//   declarations: [AppComponent], // we need here to register all components that we need to make them deal with each other, we dont register components only
//   bootstrap: [AppComponent], // the root component in this module is this AppComponent
//   imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent], // for  standalone components and modules
// })
// export class AppModule {}

// note =>
//  declerations => for non standalone components, and we must not register any components inside this component
// imports => we can register standalone components inside this module like here the header component and user component and tasks component

// we must import the BrowserModule
// Understanding BrowserModule in Angular
// In Angular, BrowserModule is a core module that is crucial for applications running in a web browser. Here's an in-depth explanation:

// What is BrowserModule?
// BrowserModule is a module from the @angular/platform-browser package.
// It provides essential services and directives required for running an Angular application in a browser.
// Key Features of BrowserModule
// Directives for Basic Functionality

// It includes common directives such as:
// NgIf
// NgFor
// NgClass
// NgStyle
// These are foundational directives that enable conditional rendering, loops, and dynamic styling.
// Enables Template Rendering

// The module sets up the application to render Angular templates in the browser using the DOM.
// Bootstrapping the Root Module

// BrowserModule is typically imported in the root module (AppModule) of the Angular application.
// It provides the bootstrap functionality, which starts the application by rendering the root component (AppComponent).
// Critical Angular Services

// Includes providers for services like change detection, event binding, and sanitization.
// Dependency Injection (DI) Setup

// Supplies core Angular services needed for the app's dependency injection system to function.
// Important Notes
// Use Only Once

// BrowserModule should only be imported in the root module (AppModule).
// For feature modules, use CommonModule instead to access Angular directives like NgIf and NgFor.
