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
import { ButtonGroupComponent } from '@molecules/button-group/button-group.component';
import { ButtonComponent } from '@atoms/button/button.component';

// Import the actual component
import { ButtonSectionComponent } from './button-section.component';

// Define component
export default {
    title: 'Organisms/ButtonSection',
    component: ButtonSectionComponent,
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
            declarations: [ButtonGroupComponent, ButtonSectionComponent, ButtonComponent],
        }),
    ],
    // Define control types
    // This component doesnt have any arguments to control
} as Meta;

// Define template
const ButtonSectionTemplate: Story<ButtonSectionComponent> = (args: ButtonSectionComponent) => ({
    props: { ...args },
    template: `<nwn-button-section></nwn-button-section>`,
});

// Create an instances of the component
export const ButtonSection = ButtonSectionTemplate.bind({});
ButtonSection.storyName = 'Button Section';
