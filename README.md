[![Netlify Status](https://api.netlify.com/api/v1/badges/2964dd0a-3a3b-41c4-8860-2bec3e7ce7e5/deploy-status)](https://app.netlify.com/sites/angular-tailwind-storybook/deploys)

# A starter template for Angular, Tailwind, and Storybook

![Angular + Tailwind + Storybook starter template](./src/assets/newwwton/Template.jpg)

Visit the components in live storybook [here](https://angular-tailwind-storybook.netlify.app/).

Follow the steps to create components and pages

### Create new Component

1. Use this command to generate new component `ng g c components/<component-name>`

### Create new Page

1. Use this command to generate new page `ng g c pages/<page-name>`

### To add SVG to DOM

1. Put your svg icons in `src/assets/svg` and then `npm run generate-icons`.
2. This will generate an `svg` folder in `app` and give you its bindings in typescript.
3. Read [@ngneat/svg-icon](https://github.com/ngneat/svg-icon) for more details.

---

## How this template was created

1. Create the minimal angular project using CLI `ng new <project-name> --minimal`, agree to add `@angular/router` and `cd <project-name>`
2. Initialize Tailwind using ngneat `npx ng add @ngneat/tailwind` and enable JIT.
3. Now initialize storybook using `npx sb@next init`

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
