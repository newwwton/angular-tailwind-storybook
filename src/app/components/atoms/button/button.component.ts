import { Component, Input } from '@angular/core';

@Component({
    selector: 'nwn-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
    @Input()
    icon = 'angular';

    @Input()
    size: 'sm' | 'md' | 'lg' | 'xl' = 'xl';

    @Input()
    href = '';
}
