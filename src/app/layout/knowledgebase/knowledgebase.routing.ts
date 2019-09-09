import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KnowledgebaseComponent } from './knowledgebase.component';
import { AddarticleComponent } from './addarticle/addarticle.component';
import { EditarticleComponent } from './editarticle/editarticle.component';
import { ReadmorearticleComponent } from './readmorearticle/readmorearticle.component';
import { MyarticleComponent } from './myarticle/myarticle.component';


const routes: Routes = [
    {
        path: '',
        component: KnowledgebaseComponent
    },
    {
        path: 'add',
        component: AddarticleComponent
    },
    {
        path: 'edit/:id',
        component: EditarticleComponent
    },
    {

        path: 'readmore/:id',
        component: ReadmorearticleComponent

    },
    {
        path:'myarticle',
        component:MyarticleComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KnowledgebaseRoutingModule {}
