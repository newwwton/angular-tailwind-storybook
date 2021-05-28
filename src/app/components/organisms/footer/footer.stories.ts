// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

// Import all components used
import { LinkComponent } from '@atoms/link/link.component';

// Import the actual component
import { FooterComponent } from './footer.component';

// Define component
export default {
    title: 'Organisms/Footer',
    component: FooterComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule],
            // Declare all components used here including the actual component
            declarations: [FooterComponent, LinkComponent],
        }),
    ],
    // Define control types
    // There are no arguments for this component
} as Meta;

// Define template
const FooterTemplate: Story<FooterComponent> = (args: FooterComponent) => ({
    props: { ...args },
    template: `<nwn-footer></nwn-footer>`,
});

// Create an instances of the component
export const Footer = FooterTemplate.bind({});
Footer.storyName = 'Dark Footer';
