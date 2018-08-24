import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { UserService } from '../../_services';
import { StagiaireService } from '../../_services/stagiaire.service';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    stagiaires: any[];
    constructor(private stagiaireService: StagiaireService,
        private router: Router) {
        this.stagiaires = this.stagiaireService.getStagiaires();
    }

    ngOnInit() { }

    exportToExcel() {
        // tslint:disable-next-line:no-unused-expression
        let options = {
            fieldSeparator: ';',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            headers: ["First Name", "Last Name", "Date & lieu de naissance", "N°CIN", "Délivrée le", "Adresse", "ville", "Code postal", "Tel mobile", "Fixe", "Email", 'Institut', 'Skype-id', 'Adresse MAC LAN']
        };
        // tslint:disable-next-line:no-unused-expression
        new Angular5Csv(this.stagiaires, 'Listes des stagiaires', options);
    }

    action(cin: string) {
        this.router.navigate(['/forms'], { queryParams: { cin: cin } });
    }
}

