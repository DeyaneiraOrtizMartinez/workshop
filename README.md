# Mood Tracker Express

Aplicacion movil/web creada con Ionic + Angular Standalone para un taller express. La app permite seleccionar un estado de animo y actualiza en tiempo real el emoji, el mensaje y el color de la tarjeta principal.

## Objetivo del proyecto

Construir una aplicacion funcional en pocos minutos usando componentes nativos de Ionic y conceptos basicos de Angular:

- **Property Binding**: permite enlazar una propiedad visual del HTML con una variable de TypeScript. En este proyecto se usa con `[color]="colorFondo"`.
- **Event Binding**: permite capturar una accion del usuario. En este proyecto se usa con `(click)="cambiarEstado(...)"`.
- **Interpolacion**: permite mostrar valores de TypeScript en el HTML usando `{{ }}`.
- **Componentes Standalone**: cada componente de Ionic usado en el HTML se importa directamente en el archivo `.ts`.

- <img width="959" height="470" alt="image" src="https://github.com/user-attachments/assets/f4fb43e2-7a88-43ae-9227-82bb6472f3de" />


## Tecnologias utilizadas

- Node.js
- npm
- Ionic Framework
- Angular
- TypeScript
- HTML
- SCSS

## Requisitos previos

Antes de crear o ejecutar el proyecto, se recomienda tener instalado:

- Node.js 20 LTS
- npm 9 o 10
- Angular CLI
- Ionic CLI

Verificar versiones:

```powershell
node --version
npm --version
ng version
ionic --version
```

## Pasos para crear el proyecto desde cero

### 1. Desinstalar versiones globales anteriores

```powershell
npm uninstall -g @angular/cli
npm uninstall -g @ionic/cli
```

### 2. Instalar Node.js 20 LTS

1. Ir a `https://nodejs.org`
2. Descargar Node.js 20 LTS
3. Instalarlo en la computadora
4. Reiniciar la terminal

### 3. Instalar Angular CLI

```powershell
npm install -g @angular/cli
```

Si el taller requiere una version especifica, por ejemplo Angular 19:

```powershell
npm install -g @angular/cli@19
```

### 4. Instalar Ionic CLI

```powershell
npm install -g @ionic/cli
```

### 5. Configurar npm

Este comando ayuda a evitar conflictos de dependencias en algunos equipos:

```powershell
npm config set legacy-peer-deps true
```

### 6. Crear el proyecto Ionic

Ubicarse en la carpeta donde se desea crear el proyecto:

```powershell
cd "C:\Users\UNA ESTUDIANTE\Desktop\workshop"
```

Crear el proyecto:

```powershell
ionic start workshop blank --type=angular
```

Durante la configuracion:

- Seleccionar **Standalone** cuando pregunte por Standalone o NgModules.
- Responder `n` si pregunta si desea crear una cuenta.

Entrar a la carpeta del proyecto:

```powershell
cd workshop
```

Ejecutar la aplicacion:

```powershell
ionic serve
```

La app se abrira normalmente en:

```text
http://localhost:8100
```

Tambien se puede ejecutar con Angular:

```powershell
npm start
```

## Ejecutar este repositorio

Si ya se tiene este repositorio descargado, entrar a la carpeta del proyecto:

```powershell
cd "C:\Users\UNA ESTUDIANTE\Desktop\workshop\workshop"
```

Instalar dependencias:

```powershell
npm install
```

Ejecutar en modo desarrollo:

```powershell
npm start
```

Compilar el proyecto:

```powershell
npm run build
```

## Estructura principal del proyecto

```text
src/
  app/
    home/
      home.page.ts
      home.page.html
      home.page.scss
```

Los archivos principales del taller son:

- `home.page.ts`: contiene las variables y la funcion que actualizan el estado de la pantalla.
- `home.page.html`: contiene la interfaz con Ionic y los bindings de Angular.
- `home.page.scss`: contiene los estilos de la pantalla.

## Codigo del proyecto

### `src/app/home/home.page.ts`

```typescript
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
```

### `src/app/home/home.page.html`

```html
<ion-header>
  <ion-toolbar color="primary">
    <ion-title>Mood Tracker Express</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
  <main class="tracker">
    <ion-card [color]="colorFondo" class="mood-card ion-text-center">
      <div class="emoji" aria-live="polite">{{ emojiActual }}</div>

      <ion-card-content>
        <h2>{{ mensajeActual }}</h2>
      </ion-card-content>
    </ion-card>

    <section class="actions" aria-label="Opciones de estado de ánimo">
      <ion-button
        expand="block"
        color="success"
        (click)="cambiarEstado('😎', '¡Excelente! Sigue rompiéndola en clase.', 'success')"
      >
        ¡Feliz / Motivado!
      </ion-button>

      <ion-button
        expand="block"
        color="warning"
        (click)="cambiarEstado('🤯', 'Respira hondo, inhala, exhala. ¡Tú puedes!', 'warning')"
      >
        ¡Estresado!
      </ion-button>

      <ion-button
        expand="block"
        color="danger"
        (click)="cambiarEstado('😴', 'Ya casi termina la jornada, ve por un café.', 'danger')"
      >
        ¡Con Sueño!
      </ion-button>
    </section>
  </main>
</ion-content>
```

## `src/app/home/home.page.scss`

```scss
.tracker {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  max-width: 520px;
  margin: 0 auto;
}

.mood-card {
  padding: 24px 16px;
  border-radius: 8px;
}

.emoji {
  margin: 12px 0;
  font-size: 4rem;
  line-height: 1;
}

.mood-card h2 {
  margin: 0;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.35;
}

.actions {
  display: grid;
  gap: 12px;
  margin-top: 30px;
}

ion-button {
  min-height: 48px;
  font-weight: 600;
}
```

## Problemas comunes

### Error: `is not a known element`

Este error suele aparecer cuando se usa un componente de Ionic en el HTML, pero no se importo en el archivo `.ts`.

Solucion:

1. Revisar el componente usado en el HTML.
2. Importarlo desde `@ionic/angular/standalone`.
3. Agregarlo al arreglo `imports`.

### La app no inicia

Ejecutar nuevamente:

```powershell
npm install
npm start
```

### Conflictos de dependencias

Ejecutar:

```powershell
npm config set legacy-peer-deps true
npm install
```

## Comandos resumen

```powershell
# Instalar herramientas globales
npm install -g @angular/cli
npm install -g @ionic/cli

# Crear proyecto
cd "C:\Users\UNA ESTUDIANTE\Desktop\workshop"
ionic start workshop blank --type=angular

# Entrar al proyecto
cd workshop

# Instalar dependencias, si es necesario
npm install

# Ejecutar
ionic serve

# Compilar
npm run build
```

## Resultado final

La aplicacion final muestra una tarjeta central con un emoji y un mensaje. Al presionar cualquiera de los tres botones, la tarjeta cambia de color y actualiza su contenido inmediatamente.

Estados disponibles:

- Feliz / Motivado
- Estresado
- Con Sueño

