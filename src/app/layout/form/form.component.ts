import { Component, OnInit, NgModule, Pipe } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';
import { StagiaireService } from '../../_services/stagiaire.service';

import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@Component({
    moduleId: module.id.toString(),
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {

    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private stagiaireService: StagiaireService) { }

    langs: string[] = [
        'English',
        'French',
        'German',
    ];
    myform: FormGroup;
    firstName: FormControl;
    lastName: FormControl;
    email: FormControl;
    codepostal: FormControl;
    Tel: FormControl;
    Fixe: FormControl;
    CIN: FormControl;


    ngOnInit() {
        this.createFormControls();
        this.createForm();
    }

    createFormControls() {
        this.firstName = new FormControl('', Validators.required);
        this.lastName = new FormControl('', Validators.required);
        this.email = new FormControl('', [
            Validators.required,
            Validators.pattern("[^ @]*@[^ @]*")
        ]);
        this.codepostal = new FormControl('', [
            Validators.required,
            Validators.minLength(4)
        ]);
        this.CIN = new FormControl('', [
            Validators.required,
            Validators.minLength(8)
        ]);
        this.Tel = new FormControl('', [
            Validators.required,
            Validators.minLength(8)
        ]);
        this.Fixe = new FormControl('', [
            Validators.required,
            Validators.minLength(8)
        ]);

    }

    createForm() {
        this.myform = new FormGroup({
            name: new FormGroup({
                firstName: this.firstName,
                lastName: this.lastName,
            }),
            email: this.email,
            codepostal: this.codepostal,
            Tel: this.Tel,
            Fixe: this.Fixe,
            CIN: this.CIN
        });

    }
    onSubmit() {
        if (this.myform.valid){
            console.log("Form Submitted!", this.myform.value);
            this.stagiaireService.addStagiaire(this.myform.value);
        }
    }
}



