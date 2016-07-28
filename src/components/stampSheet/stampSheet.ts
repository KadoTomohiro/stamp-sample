import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
//noinspection TypeScriptCheckImport
import store from 'store';

@Component({
    selector: 'stamp-sheet',
    templateUrl: `components/stampSheet/stampSheet.html`,
})

export class StampSheetComponent {
    stamps: string[];
    constructor(private route:ActivatedRoute) {
        this.stamps = store.get('stamps') || [];
    }

    ngOnInit() {
        this.route.params
            .subscribe(params => {
                let id = params['id'];
                console.log(id);
                if(id) {
                    this.stamps[id] = `Stamp${id}`;
                }

                store.set('stamps', this.stamps);
            });
    }
}
