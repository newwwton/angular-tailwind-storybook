import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { MainComponent } from '@pages/main/main.component';

// Routes
const routes: Routes = [
    {
        path: '',
        component: MainComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class AppRoutingModule {}
