import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatChipsModule, MatIconModule, MatTabsModule, MatCardModule, MatTooltipModule } from '@angular/material';
import { ProfileOverviewComponent } from './profile-overview/profile-overview.component';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { PageHeaderModule } from '../../core/page-header/page-header.module';
import { ProfileRoutingModule } from './profile.routing';
import { ProfileRecordComponent } from './profile-record/profile-record.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FlexLayoutModule,
    PageHeaderModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatChipsModule,
    BreadcrumbsModule,
    MatCardModule,
    MatTooltipModule

    // CommonModule,
    // UtilsModule,
    // FlexLayoutModule,
   
    // MatTabsModule,
    // MatChipsModule,
    // MatButtonModule,
    // MatIconModule,
    // MatListModule,   
    // RouterModule,
    // FormsModule,
    // BreadcrumbsModule, 
    // MatSelectModule,
    // MatMenuModule,
    // 
    // MatTableModule,
  ],
  declarations: [ProfileComponent, ProfileOverviewComponent, ProfileRecordComponent]
})
export class ProfileModule { }
