import { Component } from '@angular/core';
import { SidebarService } from 'src/app/service/sidebar/sidebar.service';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css'],
})
export class MainScreenComponent {
  isSmallScreen: boolean = false;
  isSidebarOpen = true; // Initialize with desired initial state

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sidebarService: SidebarService
  ) {
    // Subscribe to the service to listen for changes in sidebar state
    this.sidebarService.sidebarState$.subscribe((isOpen) => {
      this.isSidebarOpen = isOpen;
    });
  }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([`(max-width: 768px)`])
      .subscribe((state: any) => {
        // this.isSmallScreen = false;
        console.log(
          'state.matches: MAIN SCREEN =========================== ',
          state.matches
        );
        this.isSmallScreen = state.matches;
      });
  }

  getSidebarMode() {
    if (this.isSmallScreen) {
      return 'over';
    } else {
      // this.isSidebarOpened();
      this.toggleOpenSidebar();
      return 'side';
    }
  }

  isSidebarOpened() {
    this.isSidebarOpen = true;
  }

  toggleOpenSidebar() {
    this.sidebarService.openSidebar();
  }

  // Method to toggle the sidebar state
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.sidebarService.toggle(); // Update the service state
  }
}
