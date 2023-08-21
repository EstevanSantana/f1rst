import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-text-body',
    styleUrls: ['./text-body.component.scss'],
    template: `
        <ng-container [ngSwitch]="tag">
            <small *ngSwitchCase="'small'" [class]="textBodyCss">{{ text }}</small>
            <p *ngSwitchCase="'p'" [class]="textBodyCss">{{ text }}</p>
            <span *ngSwitchCase="'span'" [class]="textBodyCss">{{ text }}</span>
        </ng-container>
    `
})

export class TextBodyComponent {
    @Input() tag: string = 'p';
    @Input() size: string = '1';
    @Input() color: string = 'primary';
    @Input() classes: string = '';
    @Input() fontWeight: string = '400';
    @Input() text: string = '';

    get textBodyCss(): string {
        let variable = [
            this.color,
            this.classes,
            `${this.tag}_${this.size}`,
            `font-weight-${this.fontWeight}`
        ];
        
        return [...variable].join(' ');
    }
    
}
