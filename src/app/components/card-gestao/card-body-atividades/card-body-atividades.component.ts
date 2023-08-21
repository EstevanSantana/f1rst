
import { Component, OnInit, } from '@angular/core';

import { createCharts } from 'src/app/utils/eChartsUtil';
import { formatNumber } from 'src/app/utils/numberUtil';

import { api } from './data';

@Component({
    selector: 'app-card-body-atividades',
    templateUrl: './card-body-atividades.component.html',
    styleUrls: ['./card-body-atividades.component.scss']

})
export class CardBodyAtividadeComponent implements OnInit {
    public data = api;

    public values = 0;
    public percentages = 0;
    public concluidas = 0;
    public totalAtividades = 0;
    public chartOptionAtividade: any;

    constructor() { }   

    ngOnInit() {
        this.data.map(item => {
            this.initAtividades(item.concluidas, item.atividades);
        });
        this.percentagesCal(this.concluidas, this.totalAtividades);

        this.chartOptionAtividade = createCharts(this.values, this.percentages, this.concluidas, this.totalAtividades);
    }

    initAtividades(concluidas: number, parciais: number): void {
        this.concluidas += concluidas;
        this.totalAtividades += (parciais + concluidas)
    }

    percentagesCal(concluidas: number, totais: number): void {
        this.values = (concluidas / totais) * 100;
        this.percentages = (this.values - 100) * -1;
    }

    convertNumber(values: any): number {
        return formatNumber(values);
    }
}