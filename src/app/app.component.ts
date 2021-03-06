import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicial', url: 'inicial', icon: 'home' },
    { title: 'Açai', url: 'acai', icon: 'beer' },
    { title: 'Sorvetes', url: 'sorvete', icon: 'ice-cream' },
    { title: 'Picolés', url: 'picole', icon: 'bonfire' },
    { title: 'Encomendas', url: 'encomendas', icon: 'cart' },
    { title: 'Contatos', url: 'contatos', icon: 'call' },
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
