import { Routes, RouterModule } from '@angular/router';

import { BasicComponent } from './basic';
import { EnhancedComponent } from './enhanced';

const routes: Routes = [
    { path: 'basic', component: BasicComponent },
    { path: 'enhanced', component: EnhancedComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'basic' }
];

export const appRoutingModule = RouterModule.forRoot(routes);