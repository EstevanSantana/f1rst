import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

// component
import { CardCertoComponent } from 'src/app/components/card-certo/card-certo.component';
import { CardCertoBodyComponent } from './components/card-certo/card-certo-body/card-certo-body.component';
import { CardGestaoComponent } from './components/card-gestao/card-gestao.component';
import { CardBaseComponent } from './components/card-base/card-base.component';
import { CardBodyAberturaFechamentoComponent } from './components/card-gestao/card-body-abertura-fechamento/card-body-abertura-fechamento.component';
import { CardBodyAtividadeComponent } from './components/card-gestao/card-body-atividades/card-body-atividades.component';

// module
import { SharedModule } from './shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
    declarations: [
        AppComponent,
        CardBaseComponent,
        CardCertoComponent,
        CardCertoBodyComponent,
        CardGestaoComponent,
        CardBodyAberturaFechamentoComponent,
        CardBodyAtividadeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        NgbTooltipModule,
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts'), 
        }),
        
    ],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule { }
