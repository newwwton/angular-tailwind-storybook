// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

// Import Link
import { LinkComponent } from './link.component';

// Define component
export default {
    title: 'Atoms/Link',
    component: LinkComponent,
    // Position the component to the center as otherwise we have set a global fullscreen layout to avoid default padding provided by SB6
    parameters: {
        layout: 'centered',
    },
    decorators: [
        moduleMetadata({
            imports: [CommonModule],
        }),
    ],
    // Define control types
    // You dont have to define any control types, as they are already handled by SB 6.3
} as Meta;

// Define template
const LinkTemplate: Story<LinkComponent> = (args: LinkComponent) => ({
    props: { ...args },
    template: `
    <div style="">
        <nwn-link>Newwwton</nwn-link>
    </div>
    `,
});

// Create an instances of the component
// Link to newwwton
export const LinkToNewwwton = LinkTemplate.bind({});
LinkToNewwwton.storyName = 'Newwwton Link';
LinkToNewwwton.args = {
    href: 'https://newwwton.com',
};
