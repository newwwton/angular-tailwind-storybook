import { Component, Input } from '@angular/core';

@Component({
    selector: 'nwn-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
    @Input()
    title = '';
}
