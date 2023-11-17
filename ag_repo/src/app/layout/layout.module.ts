import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { TopnavComponent } from '../components/topnav/topnav.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { ScreenComponent } from '../components/screen/screen.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { JobdescriptionComponent } from './jobdescription/jobdescription.component';
import { AddjobComponent } from './addjob/addjob.component';
import { ProfileadminComponent } from './profileadmin/profileadmin.component';
import { ProfileuserComponent } from './profileuser/profileuser.component';
import { ProfileemployerComponent } from './profileemployer/profileemployer.component';



@NgModule({
  declarations: [
    LayoutComponent,
    TopnavComponent,
    SidenavComponent,
    ScreenComponent,
    AdminComponent,
    AdminloginComponent,
    JobdescriptionComponent,
    AddjobComponent,
    ProfileadminComponent,
    ProfileuserComponent,
    ProfileemployerComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    RouterModule
  ]
})
export class LayoutModule { }
