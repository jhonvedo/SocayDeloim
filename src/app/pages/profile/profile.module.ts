import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatChipsModule, MatIconModule, MatTabsModule, MatCardModule, MatTooltipModule, MatDialogModule, MatSelectModule, MatNativeDateModule, MatDatepickerModule, MatInputModule, MatSliderModule, MatSlideToggleModule, MatRadioModule, MatCheckboxModule } from '@angular/material';
import { ProfileOverviewComponent } from './profile-overview/profile-overview.component';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { PageHeaderModule } from '../../core/page-header/page-header.module';
import { ProfileRoutingModule } from './profile.routing';
import { ProfileRecordComponent } from './profile-record/profile-record.component';
import { RatingModule } from '../../core/rating/rating.module';
import { VerticalTimelineModule } from 'angular-vertical-timeline';
import { TimeLineModule } from '../../core/time-line/time-line.module';
import { ProfileRateComponent, ComponentDescriptionsDialogComponent } from './profile-rate/profile-rate.component';
import { ProfileRateModalComponent } from './profile-rate-modal/profile-rate-modal.component';
import { UICarouselModule } from "ui-carousel";
import { FormsModule } from '@angular/forms';
import { UtilsModule } from '../../core/utils/utils.module';

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
    MatTooltipModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RatingModule,
    VerticalTimelineModule,
    TimeLineModule,
    MatDialogModule,
    UICarouselModule,

    CommonModule,
   
    FormsModule,
    BreadcrumbsModule,
    UtilsModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatTabsModule,
    PageHeaderModule
   
 
  
    
    
  ],
  entryComponents:[ProfileRateModalComponent,ComponentDescriptionsDialogComponent],
  declarations: [ProfileComponent, ProfileOverviewComponent, ProfileRecordComponent, ProfileRateComponent, ProfileRateModalComponent,ComponentDescriptionsDialogComponent],
  exports:[ProfileRateModalComponent]

})
export class ProfileModule { }
