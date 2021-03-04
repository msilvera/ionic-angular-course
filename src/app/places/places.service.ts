import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places2: Place[] =[
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of NYC',
      'https://tse3.mm.bing.net/th?id=OIP.gOwnzIYPvwAbbI5YCGWkQwHaE8&pid=Api',
      149.99
      ),
      new Place(
        'p2',
        'L\'Amour Toujours',
        'Romantic place in Paris',
        'https://tse3.mm.bing.net/th?id=OIP.ylRZaLm4hCdQhvhVuOIbEgHaE8&pid=Api',
        189.99
        ),
      new Place(
          'p3',
          'The Foggy Palace',
          'Not your average city trip!',
          'https://tse2.mm.bing.net/th?id=OIP.onGNWE5i_28MXjiqFg3t9wHaFD&pid=Api',
          99.99
          )
  ];

  private _places: Place[] =[
    new Place(
      'p1',
      'El Tigre y el Dragón',
      'Una milonga con estilo, en un lugar con encanto',
      'https://i.ytimg.com/vi/9oyqpHOshEU/maxresdefault.jpg',
      100
      ),
      new Place(
        'p2',
        'Ensueños',
        'La mejor pista de Montevideo',
        'https://i.ytimg.com/vi/u5fYo5pI1eU/maxresdefault.jpg',
        189.99
        ),
      new Place(
          'p3',
          'La Callejera',
          'Milonga al aire libre',
          'https://www.lr21.com.uy/wp-content/uploads/2015/03/milonga-callejera-logo.jpg',
          99.99
          )
  ];


  get places(){
    return [...this._places]; //return copy of _places
  }
  constructor() { }

  getPlace(id:string){
    
    //console.log('getplace with id: ' + id);
    return {...this._places.find(p => p.id === id)};

  }
}
