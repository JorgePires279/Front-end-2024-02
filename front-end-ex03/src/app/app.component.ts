import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ChatComponent } from './chat/chat.component';

@Component({
  selector: 'app-root',
  template: '<app-chat></app-chat>',
  standalone: true,
  imports: [ChatComponent]
})
export class AppComponent {}

bootstrapApplication(AppComponent);