import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { HeaderComponent } from './components/header/header.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessageItemComponent } from './components/message-item/message-item.component';
import { InputAreaComponent } from './components/input-area/input-area.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChatPageComponent,
    HeaderComponent,
    MessageListComponent,
    MessageItemComponent,
    InputAreaComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule
  ]
})
export class ChatModule { }
