import { Routes } from '@angular/router';
import { Principal } from './principal/principal';
import { Experiencia } from './experiencia/experiencia';
import { Portafolio } from './portafolio/portafolio';
import { Blog } from './blog/blog';
import { Contacto } from './contacto/contacto';
import { Carga } from './carga/carga';

export const routes: Routes = [
    {path:'',component:Carga},
    {path:'Principal',component:Principal},
    {path:'Experiencia',component:Experiencia},
    {path:'Portafolio',component:Portafolio},
    {path:'Blog',component:Blog},
    {path:'Contacto',component:Contacto}
];