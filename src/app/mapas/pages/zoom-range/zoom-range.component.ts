import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl  from 'mapbox-gl'
@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [`
  .mapa-container{
    height: 100%;
    width: 100%;       
  }
  .row {
    background-color: white;
    border-radius:5px;
    bottom:50px;
    left:50px;
    padding:10px;
    position: fixed;
    z-index: 999;
  }
  `]  
})
export class ZoomRangeComponent implements AfterViewInit {
  @ViewChild('mapa') divMapa!: ElementRef
  mapa!: mapboxgl.Map;
  zoomLevel:number =17
  constructor() { }

  ngAfterViewInit (): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -15.559472 , 28.059403],
      zoom: this.zoomLevel
   });
  }

  zoomIn(){
    this.mapa.zoomIn();
    this.zoomLevel=this.mapa.getZoom()

  }
  zoomOut(){
    this.mapa.zoomOut();
    this.zoomLevel=this.mapa.getZoom()
  }
}
