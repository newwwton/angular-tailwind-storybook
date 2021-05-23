import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { logomarkColorIcon } from '@svg/logomark-color';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        SvgIconsModule.forRoot({
            sizes: {
                xs: '10px',
                sm: '12px',
                md: '16px',
                lg: '20px',
                xl: '25px',
                xxl: '30px',
            },
            defaultSize: 'md',
            icons: [logomarkColorIcon],
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
