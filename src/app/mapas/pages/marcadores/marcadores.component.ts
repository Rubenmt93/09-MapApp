import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [`
    .mapa-container{
       height: 100%;
      width: 100%;
    }
    .list-group{
      position:fixed;
      top:20px;
      right: 20px;
      z-index:999
    }
    li{
      cursor: pointer;
    }
    `

  ]
})
export class MarcadoresComponent implements AfterViewInit  {

  @ViewChild('mapa') divMapa!: ElementRef
  mapa!: mapboxgl.Map;
  zoomLevel:number =15;
  center: [number, number] =[ -15.559472 , 28.059403];

  constructor() { }

  ngAfterViewInit (): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });
  //     const markerHtml: HTMLElement = document.createElement('div');
  //     markerHtml.innerHTML="Hola mundo"
  //   new mapboxgl.Marker({ element: markerHtml})
  //   .setLngLat( this.center)
  //   .addTo(this.mapa)


  //   new mapboxgl.Marker({ })
  //   .setLngLat( this.center)
  //   .addTo(this.mapa)
  
  }
  irMarcador(){

  }
  agregarMarcador(){
  const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));

    const nuevoMarcador = new mapboxgl.Marker({draggable:true, color: color})
    .setLngLat( this.center)
    .addTo(this.mapa)
  }

}
