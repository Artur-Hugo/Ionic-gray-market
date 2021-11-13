import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AuthService } from '../../services/AuthService';


//anotação para que essa pagina seja referenciada em forma de string lá no app.componente.ts
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds : CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(public navCtrl: NavController,
               public menu: MenuController,
               public auth: AuthService) {

  }

  //Função para deixar desabilitado e habilitar o menu quando sai da tela de login
  ionViewWillEnter() {
    this.menu.swipeEnable(false);
    }
    ionViewDidLeave() {
    this.menu.swipeEnable(true);
    }

    ionViewDidEnter(){
      this.auth.refreshToken()
        .subscribe(response => {
          this.auth.successfullLogin(response.headers.get('Authorization'));
          this.navCtrl.setRoot('CategoriasPage');
        },
        error => {});
        }

  login(){
    this.auth.authenticate(this.creds)
      .subscribe( response => {
        this.auth.successfullLogin(response.headers.get('Authorization'));
         //Navegar para a proxima tela
        this.navCtrl.setRoot('CategoriasPage');

      },
      error => {});
  }



}
