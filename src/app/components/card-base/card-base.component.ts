import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card-base',
    templateUrl: './card-base.component.html',
    styleUrls: ['./card-base.component.scss']
})
export class CardBaseComponent {
    @Input() title: string = '';
    @Input() size: 'small' | 'medium' | 'large' = 'medium';
  
    get cardSize(): string {
        return `card-${this.size}`;
    }
}
