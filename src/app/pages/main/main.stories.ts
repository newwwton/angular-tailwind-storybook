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
// Atoms
import { ButtonComponent } from '@atoms/button/button.component';
import { LinkComponent } from '@atoms/link/link.component';
// Molecules
import { ButtonGroupComponent } from '@molecules/button-group/button-group.component';
// Organisms
import { HeroComponent } from '@organisms/hero/hero.component';
import { ButtonSectionComponent } from '@organisms/button-section/button-section.component';
import { FooterComponent } from '@organisms/footer/footer.component';

// Import the actual component
import { MainComponent } from './main.component';

// Define component
export default {
    title: 'Pages/Main',
    component: MainComponent,
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
            declarations: [
                // Atoms
                ButtonComponent,
                LinkComponent,
                // Molecules
                ButtonGroupComponent,
                // Organisms
                HeroComponent,
                ButtonSectionComponent,
                FooterComponent,
                // Page
                MainComponent,
            ],
        }),
    ],
    // Define control types
    // No arguments for this component
} as Meta;

// Define template
const MainTemplate: Story<MainComponent> = (args: MainComponent) => ({
    props: { ...args },
    template: `<nwn-main></nwn-main>`,
});

// Create an instances of the component
export const Hero = MainTemplate.bind({});
Hero.storyName = 'Main page';
