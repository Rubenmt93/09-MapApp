import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  

  @ViewChild('mapa') divMapa!: ElementRef
  mapa!: mapboxgl.Map;
  zoomLevel:number =17;
  center: [number, number] =[ -15.559472 , 28.059403];
  constructor() { }
 

  ngAfterViewInit (): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });

    this.mapa.on('zoom',(ev) => {
      const zoomActual = this.mapa.getZoom()
      this.zoomLevel=zoomActual
      
      
    })
    this.mapa.on('zoomend',(ev) => {
      if(this.mapa.getZoom() > 18 ){
        this.mapa.zoomTo(18)
      }      
    })
    this.mapa.on('move',(event) => {
      const target= event.target;
      const {lng, lat}= target.getCenter();
      this.center=[lng,lat]         
    })
  }

  zoomIn(){
    this.mapa.zoomIn();
    

  }
  zoomOut(){
    this.mapa.zoomOut();
   
  }
  zoomCambio(valor:string){
    this.mapa.zoomTo(Number(valor))
  }
  ngOnDestroy(): void {
    this.mapa.off('zoom', () => {})
    this.mapa.off('zoomend', () => {})
    this.mapa.off('move', () => {})
  }
  
}
