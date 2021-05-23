import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
    @Input()
    buttonLabel = 'Default Button Label';

    @Input()
    buttonClass = 'btn';

    @Input()
    buttonType = 'submit';

    @Input()
    buttonDisabled = false;
}
