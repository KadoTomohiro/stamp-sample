import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

declare var store:any;

@Component({
    selector: 'stamp',
    templateUrl: `components/stamp/stamp.html`,
})

export class StampComponent {
    stamps: any[];
    store: any;
    constructor(private route:ActivatedRoute) {
        this.store = store;
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
