import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';//ALEX--------

@Component({
  selector: 'app-acai',
  templateUrl: './acai.page.html',
  styleUrls: ['./acai.page.scss'],
})
export class AcaiPage{

  lista: any = [];
  constructor(public http: HttpClient) { 
    this.escreveDados();
 } 

escreveDados(){
     this.http.get("https://petshopkta.000webhostapp.com/ionic/sorveteria/sorveteriajson.php?tipo=Açai").subscribe( data => {
      this.lista = data;
      //console.log(data); 
      } )
}

}
