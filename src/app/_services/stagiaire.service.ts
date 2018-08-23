import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class StagiaireService {
    constructor(private http: HttpClient,
        private router: Router) { }

    addStagiaire(stagiaire: any) {
        if (localStorage.getItem('stagiaire')) {
            let stagiaires: any[] = JSON.parse(localStorage.getItem('stagiaire'));
            stagiaires.push(stagiaire);
            localStorage.setItem('stagiaire', JSON.stringify(stagiaires));
        } else {
            localStorage.setItem('stagiaire', JSON.stringify([stagiaire]));

        }
    }

    getStagiaires() {
        return JSON.parse(localStorage.getItem('stagiaire'));
    }

}


