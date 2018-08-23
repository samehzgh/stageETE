import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { UserService } from '../../_services';
import { StagiaireService } from '../../_services/stagiaire.service';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    stagiaires: any[];
    constructor(private stagiaireService: StagiaireService) {
        this.stagiaires = this.stagiaireService.getStagiaires();
     }

    ngOnInit() { }
}

