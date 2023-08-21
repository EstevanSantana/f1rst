import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//component
import { HeadingComponent } from './ui/heading/heading.component';
import { TextBodyComponent } from './ui/text-body/text-body.component';
import { DropdownComponent } from './ui/dropdown/dropdown.component';
import { ProgressBarComponent } from './ui/progress-bar/progress-bar.component';

//icons 
import { IconInformationComponent } from 'src/app/shared/icons/icon-information/icon-information.component';
import { IconTogglerComponent } from './icons/icon-toggler/icon-toggler.component';
import { IconSandanderComponent } from './icons/icon-santander/icon-santander.componet';
import { IconSandanderGrayComponent } from './icons/icon-santander-gray/icon-santander-gray.componet';
import { IconCalendarComponent } from './icons/icon-calendar/icon-calendar.component';

@NgModule({
    declarations: [
        IconInformationComponent,
        IconTogglerComponent,
        HeadingComponent,
        TextBodyComponent,
        IconSandanderComponent,
        IconSandanderGrayComponent,      
        DropdownComponent,
        ProgressBarComponent,
        IconCalendarComponent
    ],
    imports: [BrowserModule],
    exports: [
        IconInformationComponent,
        IconTogglerComponent,
        HeadingComponent,
        TextBodyComponent,
        IconSandanderComponent,
        IconSandanderGrayComponent,   
        DropdownComponent,
        ProgressBarComponent,
        IconCalendarComponent
    ],
    providers: [],
})
export class SharedModule { }
