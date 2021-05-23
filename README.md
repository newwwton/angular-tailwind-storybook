# Angular + Tailwind + Storybook

1. Create the minimal angular project using CLI `ng new <project-name> --minimal` and `cd <project-name>`
2. Initialize Tailwind using ngneat `npx ng add @ngneat/tailwind` and enable JIT.
3. Now initialize storybook using `npx sb@next init`

## To add SVG to DOM

1. Put your svg icons in `src/assets/svg` and then `npm run generate-icons`.
2. This will generate an `svg` folder in `app` and give you its bindings in typescript.
3. Read [@ngneat/svg-icon](https://github.com/ngneat/svg-icon) for more details.

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
