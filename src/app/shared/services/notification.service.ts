import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Notification {
  message: string;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notificationsSubject = new BehaviorSubject<Notification[]>([
    { message: 'Tienes un nuevo mensaje', read: false },
    { message: 'Exposición de IHC a las 6:00 pm', read: false },
  ]);

  notifications$ = this.notificationsSubject.asObservable();

  getNotifications() {
    return this.notificationsSubject.value;
  }

  markAsRead() {
    const updatedNotifications = this.notificationsSubject.value.map((notification) => ({
      ...notification,
      read: true,
    }));
    this.notificationsSubject.next(updatedNotifications);
  }
}
