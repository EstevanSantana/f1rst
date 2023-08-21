import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-heading',
    styleUrls: ['./heading.component.scss'],
    template: `
        <ng-container [ngSwitch]="tag">    
            <h1 *ngSwitchCase="'h1'" [class]="headingCss">{{ text }}</h1>
            <h2 *ngSwitchCase="'h2'" [class]="headingCss">{{ text }}</h2>
            <h3 *ngSwitchCase="'h3'" [class]="headingCss">{{ text }}</h3>
            <h4 *ngSwitchCase="'h4'" [class]="headingCss">{{ text }}</h4>
            <h5 *ngSwitchCase="'h5'" [class]="headingCss">{{ text }}</h5>
            <h6 *ngSwitchCase="'h6'" [class]="headingCss">{{ text }}</h6>
        </ng-container>
    `,
})

export class HeadingComponent {
    @Input() tag: string = 'h1';
    @Input() color: string = 'primary';
    @Input() classes: string = '';
    @Input() text: string = '';

    get headingCss(): string {
        return `${this.color} ${this.classes}`;
    }
}
