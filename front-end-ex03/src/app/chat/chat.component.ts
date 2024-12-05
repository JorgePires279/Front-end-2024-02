import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // CommonModule para ngClass
import { FormsModule } from '@angular/forms';    // FormsModule para ngModel

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]  // Adicione o FormsModule aqui
})
export class ChatComponent {
  messages: { text: string, isUser: boolean }[] = [
    { text: "Boa tarde, profº Lucas, tudo bem?", isUser: true },
    { text: "Opa, tudo.", isUser: false },
    { text: "No que posso ajudar?", isUser: false },
    { text: "Então, pode me ajudar, me dando nota dez nesse exercício kkk?", isUser: true },
    { text: "Oh claro! Seu pedido é uma ordem.", isUser: false },
    { text: "Óbvio que não..", isUser: false }
  ];

  messageText: string = '';

  sendMessage() {
    if (this.messageText.trim() !== '') {
      this.messages.push({ text: this.messageText, isUser: true });
      this.messageText = '';
    }
  }
}