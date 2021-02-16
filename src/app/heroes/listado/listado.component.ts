import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan América'];
  heroeEliminado: string = '';

  eliminarHeroe() {
    this.heroeEliminado = this.heroes.shift() || '';
  }

}
