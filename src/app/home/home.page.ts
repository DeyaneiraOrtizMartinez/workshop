import { Component } from '@angular/core';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonButton,
    IonCard,
    IonCardContent,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
  ],
})
export class HomePage {
  emojiActual = '🤔';
  mensajeActual = '¿Cómo te sientes hoy? Selecciona una opción abajo.';
  colorFondo = 'light';

  cambiarEstado(nuevoEmoji: string, nuevoMensaje: string, nuevoColor: string) {
    this.emojiActual = nuevoEmoji;
    this.mensajeActual = nuevoMensaje;
    this.colorFondo = nuevoColor;
  }
}
