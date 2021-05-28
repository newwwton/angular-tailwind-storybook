import { NgModule } from '@angular/core';

// Icons
import { SvgIconsModule } from '@ngneat/svg-icon';
import { newwwtonIcon } from '@svg/newwwton';
import { angularIcon } from '@svg/angular';
import { tailwindIcon } from '@svg/tailwind';
import { storybookIcon } from '@svg/storybook';

// Atoms
import { ButtonComponent } from '@atoms/button/button.component';
import { LinkComponent } from '@atoms/link/link.component';

// Molecules
import { ButtonGroupComponent } from '@molecules/button-group/button-group.component';

// Organisms
import { ButtonSectionComponent } from '@organisms/button-section/button-section.component';
import { FooterComponent } from '@organisms/footer/footer.component';
import { HeroComponent } from '@organisms/hero/hero.component';

@NgModule({
    imports: [
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
    declarations: [
        ButtonComponent,
        ButtonGroupComponent,
        ButtonSectionComponent,
        FooterComponent,
        LinkComponent,
        HeroComponent,
    ],
    exports: [ButtonComponent, ButtonGroupComponent, ButtonSectionComponent, FooterComponent, HeroComponent],
})
export class ComponentModule {}
