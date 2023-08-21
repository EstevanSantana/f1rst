import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
    @Input() options: string[] = [];
    @Input() label: string = 'Periodo';
    @Input() isDropdownOpen = false;
      
    selectedOption: string | undefined;
  
    selectOption(option: string) {
        this.selectedOption = option;
    }

    toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
    }
}
