import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapasRoutingModule } from './mapas-routing.module';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { MinimapaComponent } from './components/minimapa/minimapa.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';




@NgModule({
  declarations: [
    
  
    FullScreenComponent,
            MinimapaComponent,
            MarcadoresComponent,
            ZoomRangeComponent,
            PropiedadesComponent,
           
  ],
  imports: [
    CommonModule,
    MapasRoutingModule
  ]
})
export class MapasModule { }
