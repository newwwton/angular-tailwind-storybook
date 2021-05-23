import { NgModule } from '@angular/core';

// Icons
import { SvgIconsModule } from '@ngneat/svg-icon';
import { newwwtonIcon } from '@svg/newwwton';
import { angularIcon } from '@svg/angular';
import { tailwindIcon } from '@svg/tailwind';
import { storybookIcon } from '@svg/storybook';

// Components
import { ComponentModule } from '@components/components.module';

// Pages
import { MainComponent } from '@pages/main/main.component';

@NgModule({
    imports: [
        ComponentModule,
        SvgIconsModule.forRoot({
            sizes: {
                sm: '12px',
                md: '20px',
                lg: '24px',
                xl: '48px',
            },
            defaultSize: 'md',
            icons: [angularIcon, newwwtonIcon, storybookIcon, tailwindIcon],
        }),
    ],
    declarations: [MainComponent],
    exports: [MainComponent],
})
export class PagesModule {}
