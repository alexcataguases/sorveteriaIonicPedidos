import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';//ALEX--------

@Component({
  selector: 'app-picole',
  templateUrl: './picole.page.html',
  styleUrls: ['./picole.page.scss'],
})
export class PicolePage {

  lista: any = [];
  constructor(public http: HttpClient) { 
    this.escreveDados();
 } 

escreveDados(){
     this.http.get("https://petshopkta.000webhostapp.com/ionic/sorveteria/sorveteriajson.php?tipo=Picolé").subscribe( data => {
      this.lista = data;
      //console.log(data); 
      } )
}

}
