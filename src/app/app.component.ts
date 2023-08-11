import { Component } from '@angular/core';
import { SidebarService } from './service/sidebar/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'unstop-frontend';

  constructor(private sidebarService: SidebarService) {}

  // Method to toggle the sidebar from a different component
  toggleSidebar() {
    this.sidebarService.toggleSidebar(!this.sidebarService.sidebarState$);
  }
}
