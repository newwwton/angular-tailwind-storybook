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
import { ButtonComponent } from '@atoms/button/button.component';

// Import the actual component
import { ButtonGroupComponent } from './button-group.component';

// Define component
export default {
    title: 'Molecules/ButtonGroup',
    component: ButtonGroupComponent,
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
            declarations: [ButtonGroupComponent, ButtonComponent],
        }),
    ],
    // Define control types
    // This component doesnt have any arguments to control
} as Meta;

// Define template
const ButtonGroupTemplate: Story<ButtonGroupComponent> = (args: ButtonGroupComponent) => ({
    props: { ...args },
    template: `<nwn-button-group></nwn-button-group>`,
});

// Create an instances of the component
export const ButtonGroup = ButtonGroupTemplate.bind({});
ButtonGroup.storyName = 'Button Group';
