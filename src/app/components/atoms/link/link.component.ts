import { Component, Input } from '@angular/core';

@Component({
    selector: 'nwn-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.css'],
})
export class LinkComponent {
    @Input()
    href = 'https://newwwton.com';
}
