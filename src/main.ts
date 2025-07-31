import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeroComponent } from './app/components/hero.component';
import { ServicesComponent } from './app/components/services.component';
import { ContactComponent } from './app/components/contact.component';
import { FooterComponent } from './app/components/footer.component';
import { StickyCTAComponent } from './app/components/sticky-cta.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    StickyCTAComponent
  ],
  template: `
    <div class="app">
      <app-hero></app-hero>
      <app-services></app-services>
      <app-contact></app-contact>
      <app-footer></app-footer>
      <app-sticky-cta></app-sticky-cta>
    </div>
  `,
  styles: [`
    .app {
      min-height: 100vh;
      overflow-x: hidden;
    }
  `]
})
export class App {}

bootstrapApplication(App);