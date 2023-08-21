import { Component, } from '@angular/core';

@Component({
    selector: 'app-card-gestao',
    templateUrl: './card-gestao.component.html',
    styleUrls: ['./card-gestao.component.scss']
})

export class CardGestaoComponent {
    size: string | undefined;

    setSize(selectedSize: string) {
        this.size = selectedSize;
    }

    public options: string[] = [
        "Janeiro 2022",
        "Fevereiro 2022",
        "Março 2022",
        "Abril 2022",
        "Maio 2022",
        "Junho 2022",
        "Julho 2022",
        "Agosto 2022",
        "Setembro 2022",
        "Outubro 2022",
        "Novembro 2022",
        "Dezembro 2022",
        "Janeiro 2023",
        "Fevereiro 2023",
        "Março 2023",
        "Abril 2023",
        "Maio 2023",
        "Junho 2023",
        "Julho 2023",
    ]
}
