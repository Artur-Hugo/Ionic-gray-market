import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';


//anotação para que essa pagina seja referenciada em forma de string lá no app.componente.ts
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  //Função para deixar desabilitado e habilitar o menu quando sai da tela de login
  ionViewWillEnter() {
    this.menu.swipeEnable(false);
    }
    ionViewDidLeave() {
    this.menu.swipeEnable(true);
    }

  login(){
    //Navegar para a proxima tela
    this.navCtrl.setRoot('CategoriasPage');
  }

}
