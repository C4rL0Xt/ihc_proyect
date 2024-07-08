import { Component, OnInit } from '@angular/core';
import { Notification, NotificationService } from '../../services/notification.service';
import { ProfilService } from '../../services/profile-service/profil.service';

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
  isAlumnoRol: boolean = false;
  isProfesorRol: boolean = false;

  nombre: string;

  constructor(private notificationService: NotificationService,
    private profileService: ProfilService
  ) { }

  ngOnInit(): void {
    this.notificationService.notifications$.subscribe(notifications => {
      this.notifications = notifications;
      this.hasUnreadNotifications = notifications.some(notification => !notification.read);
    });

    this.profileService.getNombre().subscribe((nombre: string) => {
      this.nombre = nombre;
    });

    // Verificar el rol almacenado en LocalStorage
    const role = localStorage.getItem('role');
    if (role === 'ALUMNO_ROL') {
      this.isAlumnoRol = true;
    } else if (role === 'PROFESOR_ROL') {
      this.isProfesorRol = true;
    }
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

  salir() {
    localStorage.clear();

  }



}
