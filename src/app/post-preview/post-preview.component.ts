import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Post } from './../post';
import { User } from './../user';

@Component({
  selector: 'post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent {

  @Input() post: Post;
  @Input() user: User;
  @Output() alSeleccionarPost: EventEmitter<Post>;
  @Output() alSeleccionarAutor: EventEmitter<User>;
  
  
  constructor() {
     this.alSeleccionarPost = new EventEmitter<Post>();
     this.alSeleccionarAutor = new EventEmitter<User>();
  }

  /*------------------------------------------------------------------------------------------------------------------|
   | ~~~ Red Path ~~~                                                                                                 |
   |------------------------------------------------------------------------------------------------------------------|
   | Expón un atributo de salida con el decorador correspondiente. El tipo de dicho atributo debe permitir la emisión |
   | de eventos; la idea es enviar al componente padre el usuario sobre el cuál se ha hecho clic. Y puesto que dicho  |
   | clic se realiza en el template de este componente, necesitas, además, un manejador para el mismo.                |
   |------------------------------------------------------------------------------------------------------------------*/

  // Notificamos la pulsación sobre el botón de 'Post Preview'
  notificarAutoresPost(user: User): void {
    this.alSeleccionarAutor.emit(user);
  }

  /*------------------------------------------------------------------------------------------------------------------|
   | ~~~ Green Path ~~~                                                                                               |
   |------------------------------------------------------------------------------------------------------------------|
   | Expón un atributo de salida con el decorador correspondiente. El tipo de dicho atributo debe permitir la emisión |
   | de eventos; la idea es enviar al componente padre el post sobre el cuál se ha hecho clic. Y puesto que dicho     |
   | clic se realiza en el template de este componente, necesitas, además, un manejador para el mismo.                |
   |------------------------------------------------------------------------------------------------------------------*/

  // Notificamos la pulsación sobre el botón de 'Post Preview'
  notificarPostPreview(post: Post): void {
    this.alSeleccionarPost.emit(post);
  }

  plainTextToHtml(text: string): string {
    return text ? `<p>${text.replace(/\n/gi, "</p><p>")}</p>` : '';
  }

}
