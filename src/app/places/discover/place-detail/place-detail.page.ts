import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';
//import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    
    this.route.paramMap.subscribe( paramMap => {
      
      if (!paramMap.has('placeId')){

        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
     
      this.place = this.placesService.getPlace(paramMap.get('placeId'));

    });

  }

  async onBookPlace(){

    //this.router.navigateByUrl('/places/tabs/discover');
    //use navCtrl instead of router to force the BACK animation
    //this.navCtrl.navigateBack('/places/tabs/discover');
    let bookModal = await this.modalCtrl
      .create(
        {
          component: CreateBookingComponent,
          componentProps: { selectedPlace: this.place 
        }
      });

      bookModal.onDidDismiss()
      .then( resultData => {
        console.log(resultData.data, resultData.role);
        if (resultData.role === 'confirm'){
          console.log('BOOKED!');
        }
      })

      bookModal.present();

      /*
      Con este otro codigo el resultdata es undefined
      .then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss();
      })
      .then( (resultData) => {
        //promise from the onDidDismiss
        console.log(resultData['data']);
      })*/

  }
}
