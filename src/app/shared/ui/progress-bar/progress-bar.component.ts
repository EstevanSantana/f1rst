
import { Input, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-progress-bar',
    styleUrls: ['./progress-bar.component.scss'],
    template: `
        <div class="container">
            <div class='filler' 
                [style.width.%]="completed"
                [style]='this.createBorderRadius'
                >
            </div>
            <div class='filler_partial' [style.width.%]="partial"></div>
        </div>
    `,
})
export class ProgressBarComponent {
    @Input() completed: number = 0;   
    @Input() partial: number = 0;
    
    get createBorderRadius(): {} {
        if(this.completed !== 100) return {};

        return {borderRadius: "inherit"};
    }
}