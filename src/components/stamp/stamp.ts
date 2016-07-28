import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
//noinspection TypeScriptCheckImport
import store from 'store';

@Component({
    selector: 'stamp',
    templateUrl: `components/stamp/stamp.html`,
})

export class StampComponent {
    stamps: any[];

    constructor(private route:ActivatedRoute) {
        this.stamps = store.get('stamps') || [];
    }

    ngOnInit() {
        this.route.params
            .subscribe(params => {
                let id = params['id'];

                let contain = this.stamps.find( e => e.id === id);

                if (id && !contain) {
                    this.stamps.push({id: id, stamp: `Stamp${id}`});
                }

                store.set('stamps', this.stamps);
            });
    }
}
