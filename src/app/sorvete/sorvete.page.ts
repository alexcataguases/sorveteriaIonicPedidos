import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';//ALEX--------

@Component({
  selector: 'app-sorvete',
  templateUrl: './sorvete.page.html',
  styleUrls: ['./sorvete.page.scss'],
})
export class SorvetePage {

  lista: any = [];
  constructor(public http: HttpClient) { 
    this.escreveDados();
 } 

escreveDados(){
     this.http.get("https://petshopkta.000webhostapp.com/ionic/sorveteria/sorveteriajson.php?tipo=Sorvete").subscribe( data => {
      this.lista = data;
      //console.log(data); 
      } )
}

}
