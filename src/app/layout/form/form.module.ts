import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from '../../shared';
import { StagiaireService } from '../../_services/stagiaire.service';
import { ReactiveFormsModule, FormsModule } from '../../../../node_modules/@angular/forms';
import { BrowserModule } from '../../../../node_modules/@angular/platform-browser';

@NgModule({
    imports: [CommonModule,
        FormRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [StagiaireService],
    declarations: [FormComponent]
})
export class FormModule { }
