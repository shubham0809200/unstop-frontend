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
}
