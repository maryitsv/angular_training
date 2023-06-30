[![Build Status](https://travis-ci.org/alcfeoh/ng2-training.png)](https://travis-ci.org/alcfeoh/ng2-training)

This project is updated for Angular 16 with Angular CLI 16.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Demos
Run `ng serve demos` to start the demos app. Navigate to `http://localhost:4201/`. The main menu will render and you can access individual examples from there.

## Solutions for all labs

In order to get the solution for the code labs, visit: `https://github.com/alcfeoh/ng2-training-solutions`  

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/guard/module` and more.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Summary

### Recomendations
* Use null safe operator when possible so the app does not break if the item is null example: item?.name
* Use hash #username to get access to dom html component in the template login(#username.value)
* Always use ngIf insted of hidden, other advantaje of ngIf is that we can use else


### Manipulate styles
[class.highlight]="isEven"
[class]="isEven ? 'highlight' : ''"
[style.backgroundColor]="isEven ? '#f5f5f5' : ''"

### Directive
we can configure the directive in the top of the decorator with host or using the decorators
@Directive({
host: {
    '[style.background]':'backgroundColor',
    '(mouseover)':'onMouseOver()',
  }
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor')
  backgroundColor:string = '';
  @HostListener('mouseover')
  onMouseOver(){
    this.backgroundColor = '#F5F5F5';
  }
}

## Web app
in the main.ts we see this and it means this is a web app, there is native script for mobile with angular code
platformBrowserDynamic().bootstrapModule(AppModule);


tsconfig.ts
if we need to app works in all browsers we can target es5, if we know the app does not need to compile in old could be es6. polifills are to fill the gap of old browsers that does not have the support for new functions example ie
"target":"es5"


ng build --configuration=production = obfuscating minified tree-shaked

## Providers in NgModule
about the services there is not need to add the provider in the ngmodule it was for angular 6.
if we want to use mock or service temporarily this is a good option
NgModule({
  declarations:[],
  imports:[],
  providers:[
    {provide:LoginService, useClass:FakeLoginService}
  ]
})

## Rxjs
http://rxmarbles.com

Subject is special type of observable, we can use to subscribe and send data.
Allows values to be sent to many observers.
A subject can emit data, on top of having the capability to be subcribed to
Subject are like event emitters they maintain a registru of many listener(they are multicast).

BehaviourSubject : has a default value to emit so a subscriber always gets data.

ReplaySubject : can replay a given number of emitter items(think in this like a cache)
has a cache amount of data 
ReplaySubject<Post>(3) as soon as someone subcribe get the last 3 items

AsyncSubject wll only emit the last value it gets upon completition of the observable.
