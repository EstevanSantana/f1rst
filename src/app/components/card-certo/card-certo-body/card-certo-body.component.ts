import { Component, Input } from '@angular/core';

import { api } from '../data';

@Component({
    selector: 'app-card-certo-body',
    templateUrl: './card-certo-body.component.html',
    styleUrls: ['./card-certo-body.component.scss']
})

export class CardCertoBodyComponent { 
    public array = [] = api?.data;
}
