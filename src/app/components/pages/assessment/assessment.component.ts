import { Component, ViewEncapsulation } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SidebarService } from 'src/app/service/sidebar/sidebar.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { FormAssesmentComponent } from '../../widgets/form-assesment/form-assesment.component';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css'],
})
export class AssessmentComponent {
  number: number = 0;
  randomDecimal: number = 0;
  isPanelOpen = false;
  activeTab: string = 'tab1';

  selectedIcon: string = '';
  isMobileView = false;

  scoreCard: any = [
    {
      name: 'Total Assessment',
      image: 'assets/images/dash-dash.svg',
      score: 34,
    },
    {
      name: 'Candidates',
      image: 'assets/images/person.svg',
      score: -1,
      scoreArray: [
        {
          score: 11145,
          add: 89,
          title: 'Total Candidate',
        },
        {
          score: 114,
          add: 89,
          title: 'Who Attamped',
        },
      ],
    },
    {
      name: 'Candidates Source',
      image: 'assets/images/web.svg',
      score: -1,
      scoreArray: [
        {
          score: 11000,
          add: 89,
          title: 'E-mail',
        },
        {
          score: 114,
          add: 89,
          title: 'Social Share',
        },
        {
          score: 114,
          add: 89,
          title: 'Unique Link',
        },
      ],
    },
    {
      name: 'Total Purpose',
      image: 'assets/images/link.svg',
      score: 11,
    },
  ];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sidebarService: SidebarService,
    private _bottomSheet: MatBottomSheet
  ) {}

  ngOnInit() {
    // assign a random number between 1 and 10000
    this.number = Math.floor(Math.random() * 1000) + 1;

    // get a random decimal number between 0 and 1 to 1 decimal place
    this.randomDecimal = Math.floor(Math.random() * 10) / 10;

    this.breakpointObserver
      .observe([`(max-width: 768px)`])
      .subscribe((state: any) => {
        // this.isSmallScreen = false;
        console.log(
          'state.matches: ASSESSMENT PAGE =========================== ',
          state.matches
        );
        this.isPanelOpen = !state.matches;
        this.isMobileView = state.matches;
        // if mobile view then close the sidebar
        if (this.isMobileView) {
          this.sidebarService.closeSidebar();
        }
      });
  }

  mobileViewScoreCard: any[] = [
    this.scoreCard[0],
    this.scoreCard[3],
    this.scoreCard[1],
    this.scoreCard[2],
  ];
  webViewScoreCard: any[] = [
    this.scoreCard[0],
    this.scoreCard[1],
    this.scoreCard[2],
    this.scoreCard[3],
  ];

  toggleExpansionPanel() {
    this.isPanelOpen = !this.isPanelOpen;
  }

  selectIcon(icon: string) {
    this.selectedIcon = icon;
  }

  toggleSidebar() {
    console.log('toggleSidebar()');
    this.sidebarService.toggle();
  }

  openFormPopup(): void {
    this._bottomSheet.open(FormAssesmentComponent);

    // bottomSheetRef.afterDismissed().subscribe((result) => {
    //   // Handle the result after the bottom sheet is closed
    // });
    // }
  }
}
