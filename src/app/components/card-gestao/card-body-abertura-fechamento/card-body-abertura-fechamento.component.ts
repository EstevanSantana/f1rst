
import { Component, OnInit, } from '@angular/core';

import { api } from './data';
import { createCharts } from 'src/app/utils/eChartsUtil';
import { formatNumber } from 'src/app/utils/numberUtil';

@Component({
    selector: 'app-card-body-abertura-fechamento',
    templateUrl: './card-body-abertura-fechamento.component.html',
    styleUrls: ['./card-body-abertura-fechamento.component.scss']

})
export class CardBodyAberturaFechamentoComponent implements OnInit {
    public data = api;

    public values = 0;
    public percentages = 0;
    public concluidas = 0;
    public totalMarcacoes = 0;
    public chartOption: any;

    constructor() { }

    ngOnInit() {
        this.data.map(item => {
            this.initMarcacoes(item.concluidas, item.parciais);
        })
        this.percentagesCal(this.concluidas, this.totalMarcacoes);

        this.chartOption = createCharts(this.values, this.percentages, this.concluidas, this.totalMarcacoes);
    }

    initMarcacoes(concluidas: number, parciais: number): void {
        this.concluidas += concluidas;
        this.totalMarcacoes += (parciais + concluidas)
    }

    percentagesCal(concluidas: number, totais: number): void {
        this.values = (concluidas / totais) * 100;
        this.percentages = (this.values - 100) * -1;
    }

    convertNumber(values: any): number {
        return formatNumber(values);
    }
}