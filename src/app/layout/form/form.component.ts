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
    dateN: FormControl;
    CIN: FormControl;
    delivre: FormControl;
    adresse: FormControl;
    ville: FormControl;
    codepostal: FormControl;
    Tel: FormControl;
    Fixe: FormControl;
    email: FormControl;
    institut: FormControl;
    skype: FormControl;
    adresseMac: FormControl;
   


    ngOnInit() {
        this.createFormControls();
        this.createForm();
    }

    createFormControls() {
        this.firstName = new FormControl('', Validators.required);
        this.lastName = new FormControl('', Validators.required);
        this.dateN = new FormControl('', Validators.required);
        this.CIN = new FormControl('', [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(8)
        ]);
        this.delivre = new FormControl('', Validators.required);
        this.adresse = new FormControl('', Validators.required);
        this.ville = new FormControl('', Validators.required);
        this.codepostal = new FormControl('', [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(4)
        ]);
        this.Tel = new FormControl('', [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(8)
        ]);
        this.Fixe = new FormControl('', [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(8)
        ]);
        this.email = new FormControl('', [
            Validators.required,
            Validators.pattern("[^ @]*@[^ @]*")
        ]);
        this.institut = new FormControl('', Validators.required);
        this.skype = new FormControl('', Validators.required);
        this.adresseMac = new FormControl('', Validators.required);
      
    }

    // convenience getter for easy access to form fields
    get f() { return this.myform.controls; }

    createForm() {
        this.myform = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName,
            dateN: this.dateN,
            CIN: this.CIN,
            delivre: this.delivre,
            adresse: this.adresse,
            ville: this.ville,
            codepostal: this.codepostal,
            Tel: this.Tel,
            Fixe: this.Fixe,
            email: this.email,
            institut: this.institut,
            skype: this.skype,
            adresseMac: this.adresseMac
           
            
        });

    }
    onSubmit() {
        console.log(this.firstName);
        if (this.myform.valid) {
            console.log("Form Submitted!", this.myform.value);
            this.stagiaireService.addStagiaire(this.myform.value);
        }
    }
}



