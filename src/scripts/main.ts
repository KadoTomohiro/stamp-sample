import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from '../components'
import {provideRouter, RouterConfig} from '@angular/router';
import {StampComponent} from '../components/stamp/stamp'

const routes:RouterConfig = [
    {path: 'stamp/', component: StampComponent},
    {path: 'stamp/:id', component: StampComponent},
    {path: '**', redirectTo: 'stamp/'},
];

const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS
]).catch(err => console.error(err));
