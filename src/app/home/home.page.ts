import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ArLauncherPage } from '../ar-launcher/ar-launcher.page'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController: ModalController) {}

  async openARModal() {
    const modal = await this.modalController.create({
      component: ArLauncherPage, // La página modal de AR
    });
    return await modal.present();
  }
  

}
