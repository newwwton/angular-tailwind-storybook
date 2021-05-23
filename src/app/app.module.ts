import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Component
import { ComponentModule } from '@components/components.module';

// Pages
import { PagesModule } from '@pages/pages.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, ComponentModule, PagesModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
