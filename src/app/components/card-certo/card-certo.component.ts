import { Component, } from '@angular/core';
import { api } from './data';

@Component({
    selector: 'app-card-certo',
    templateUrl: './card-certo.component.html',
    styleUrls: ['./card-certo.component.scss']
})

export class CardCertoComponent {
    public chamada = api.chamas;
    public atualizacao = api.atualizacao;
    public quadrante = api.quadrante;
}
