import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private sidebarStateSubject = new BehaviorSubject<boolean>(true);
  sidebarState$ = this.sidebarStateSubject.asObservable();

  toggleSidebar(isOpen: boolean) {
    this.sidebarStateSubject.next(isOpen);
  }

  //to open
  openSidebar() {
    this.sidebarStateSubject.next(true);
  }

  // toggle between open and close
  toggle() {
    this.sidebarStateSubject.next(!this.sidebarStateSubject.value);
  }

  //to close
  closeSidebar() {
    this.sidebarStateSubject.next(false);
  }

  // if screen is mobil then close the sidebar
  closeSidebarOnMobile() {
    this.sidebarStateSubject.next(false);
  }
}
