import { Component, OnInit } from '@angular/core';
import { Notification, NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selectedOption: string = 'home';
  isNotificationMenuOpen: boolean = false;
  notifications: Notification[] = [];
  hasUnreadNotifications: boolean = false;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.notifications$.subscribe(notifications => {
      this.notifications = notifications;
      this.hasUnreadNotifications = notifications.some(notification => !notification.read);
    });
  }

  toggleNotificationMenu() {
    this.isNotificationMenuOpen = !this.isNotificationMenuOpen;
    if (this.isNotificationMenuOpen) {
      this.notificationService.markAsRead();
    }
  }

  selectOption(option: string) {
    this.selectedOption = option;
  }

  logout() {
    // Implement logout logic here
  }

}
