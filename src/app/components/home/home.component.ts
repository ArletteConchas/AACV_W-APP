import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private dataservice: DataServiceService) { }

  products = [];
  reviews = [];


  ngOnInit(): void {
    this.dataservice.getData().subscribe(respuesta=>{
      console.log(respuesta);
      this.products=respuesta['products'];
      this.reviews=respuesta['reseñas'];
      console.log(this.getPromedio(234));
    },error=>{
      console.log("error: "+error);
    })
  }

  getPromedio(id){
    let suma=0;
    let filtroreviews=this.reviews.filter(x=>x.id==id); //retorna todos los que coincidan con el id
    if(filtroreviews.length==0){
        return 0;
    }
    filtroreviews.forEach(x=>suma+=x.stars);
    
    return suma/filtroreviews.length;
  }


}
