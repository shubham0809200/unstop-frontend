import { NgModule } from '@angular/core';

// Angular Material Components
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

const MaterialComponents = [
  MatCardModule,
  MatSidenavModule,
  MatExpansionModule,
  MatTabsModule,
  MatBottomSheetModule,
];

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class AngularMaterialModule {}
