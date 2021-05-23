import { NgModule } from '@angular/core';

// Components
import { ComponentModule } from '@components/components.module';

// Pages
import { MainComponent } from '@pages/main/main.component';

@NgModule({
    imports: [ComponentModule],
    declarations: [MainComponent],
    exports: [MainComponent],
})
export class PagesModule {}
