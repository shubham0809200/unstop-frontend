import { Component, ViewChild } from '@angular/core';
import { Menu } from 'src/app/model/menu.model';
import { SidebarService } from 'src/app/service/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private sidebarService: SidebarService) {}

  // Method to toggle the sidebar from a different component
  toggleSidebar() {
    console.log('toggleSidebar()');
    this.sidebarService.toggle();
  }

  menuItems: Menu[] = [
    {
      icon: 'assets/images/dashboard.svg',
      name: 'Dashboard',
      route: 'dashboard',
    },
    {
      icon: 'assets/images/assessment.svg',
      name: 'Assessment',
      route: 'assessment',
    },
    {
      icon: 'assets/images/my-library.svg',
      name: 'My Library',
      route: 'my-library',
    },
    {
      icon: 'assets/images/round-status.svg',
      name: 'Round Status',
      route: 'round-status',
      tag: 'Admin',
    },
  ];
}
