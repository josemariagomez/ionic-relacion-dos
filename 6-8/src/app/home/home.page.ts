import { Component } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Film } from '../model/film';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  films: Film[];
  clicked: boolean;
  index: number;

  constructor(
    private service: FilmService,
    public alertController: AlertController
    ) {
    this.films = this.service.getFilms();
    this.films.forEach(f => f.cover = "assets/img/" + f.cover);
  }

  show(title: string) {
    this.index = this.films.findIndex(f => f.title == title);
    this.clicked = !this.clicked;
  }

  deleteFilm(title: string) {
    this.films = this.service.deleteFilm(title)
  }

  async showDelete(title: string) {
    const alert = await this.alertController.create({
      header: 'Cuidado',
      message: 'Esta acción no se podrá deshacer',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Eliminar',
          cssClass: 'danger',
          handler: () => {
            this.deleteFilm(title);
          }
        }
      ]
    });

    await alert.present();
  }
}