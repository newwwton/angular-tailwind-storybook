// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

// Import dependedncies
import { SvgIconsModule } from '@ngneat/svg-icon';
import { newwwtonIcon } from '@svg/newwwton';
import { angularIcon } from '@svg/angular';
import { tailwindIcon } from '@svg/tailwind';
import { storybookIcon } from '@svg/storybook';

// Import all components used
import { LinkComponent } from '@atoms/link/link.component';

// Import the actual component
import { HeroComponent } from './hero.component';

// Define component
export default {
    title: 'Organisms/Hero',
    component: HeroComponent,
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
            declarations: [HeroComponent, LinkComponent],
        }),
    ],
    // Define control types
    // You dont have to define any control types, as they are already handled by SB 6.3
} as Meta;

// Define template
const HeroTemplate: Story<HeroComponent> = (args: HeroComponent) => ({
    props: { ...args },
    template: `<nwn-hero [title]="title"></nwn-hero>`,
});

// Create an instances of the component
export const Hero = HeroTemplate.bind({});
Hero.storyName = 'Main Hero';
Hero.args = {
    title: 'Angular + Tailwind + Storybook',
};
