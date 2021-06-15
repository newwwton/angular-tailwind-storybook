// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

// Import dependedncies
import { SvgIconsModule } from '@ngneat/svg-icon';
import { newwwtonIcon } from '@svg/newwwton';
import { angularIcon } from '@svg/angular';
import { tailwindIcon } from '@svg/tailwind';
import { storybookIcon } from '@svg/storybook';

// Import Button
import { ButtonComponent } from './button.component';

// Define component
export default {
    title: 'Atoms/Button',
    component: ButtonComponent,
    // Position the component to the center as otherwise we have set a global fullscreen layout to avoid default padding provided by SB6
    parameters: {
        layout: 'centered',
    },
    decorators: [
        moduleMetadata({
            imports: [
                CommonModule,
                // Import dependedncies
                SvgIconsModule.forRoot({
                    sizes: {
                        sm: '12px',
                        md: '20px',
                        lg: '24px',
                        xl: '48px',
                    },
                    defaultSize: 'xl',
                    icons: [angularIcon, newwwtonIcon, storybookIcon, tailwindIcon],
                }),
            ],
            // Declare all components used here including the actual component
            declarations: [ButtonComponent],
        }),
    ],
    // Define control types
    // You dont have to define any control types, as they are already handled by SB 6.3
} as Meta;

// Define template
// Tailwind button template
const TailwindButtonTemplate: Story<ButtonComponent> = (args: ButtonComponent) => ({
    props: { ...args },
    template: `<nwn-button [icon]="icon" [size]="size" [href]="href">Tailwind</nwn-button>`,
});
// Angular button template
const AngularButtonTemplate: Story<ButtonComponent> = (args: ButtonComponent) => ({
    props: { ...args },
    template: `<nwn-button [icon]="icon" [size]="size" [href]="href">Angular</nwn-button>`,
});
// Storybook button template
const StorybookButtonTemplate: Story<ButtonComponent> = (args: ButtonComponent) => ({
    props: { ...args },
    template: `<nwn-button [icon]="icon" [size]="size" [href]="href">Storybook</nwn-button>`,
});
// Newwwton button template
const NewwwtonButtonTemplate: Story<ButtonComponent> = (args: ButtonComponent) => ({
    props: { ...args },
    template: `<nwn-button [icon]="icon" [size]="size" [href]="href">Newwwton</nwn-button>`,
});

// Create an instances of the component
// Tailwind button
export const TailwindButton = TailwindButtonTemplate.bind({});
TailwindButton.storyName = 'Tailwind Button';
TailwindButton.args = {
    icon: 'tailwind',
    size: 'lg',
    href: 'https://tailwindcss.com',
};
// Tailwind button
export const AngularButton = AngularButtonTemplate.bind({});
AngularButton.storyName = 'Angular Button';
AngularButton.args = {
    icon: 'angular',
    size: 'lg',
    href: 'https://angular.io/tutorial',
};
// Storybook button
export const StorybookButton = StorybookButtonTemplate.bind({});
StorybookButton.storyName = 'Storybook Button';
StorybookButton.args = {
    icon: 'storybook',
    size: 'lg',
    href: 'https://storybook.js.org/docs/angular/',
};
// Newwwton button
export const NewwwtonButton = NewwwtonButtonTemplate.bind({});
NewwwtonButton.storyName = 'Newwwton Button';
NewwwtonButton.args = {
    icon: 'newwwton',
    size: 'lg',
    href: 'https://newwwton.com',
};
