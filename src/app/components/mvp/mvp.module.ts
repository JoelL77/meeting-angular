import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { MvpRoutingModule } from './mvp-routing.module';
import { FormMvpComponent } from './components/form-mvp/form-mvp.component';
import { CreateMvpComponent } from './pages/create-mvp/create-mvp.component';
import { UpdateMvpComponent } from './pages/update-mvp/update-mvp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailMvpComponent } from './pages/detail-mvp/detail-mvp.component';
import {ButtonModule} from "primeng/button";
import {ProjectModule} from "../project/project.module";
import {TabViewModule} from "primeng/tabview";
import {TableModule} from "primeng/table";
import {AvatarModule} from "primeng/avatar";
import {BadgeModule} from "primeng/badge";
import {AccordionModule} from "primeng/accordion";
import { UserModule } from '../user/user.module';
import { StartModule } from 'src/app/public/start.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    FormMvpComponent,
    CreateMvpComponent,
    UpdateMvpComponent,
    DetailMvpComponent,
  ],
  imports: [
    CommonModule,
    MvpRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    ProjectModule,
    StartModule,
    TabViewModule,
    TableModule,
    AvatarModule,
    BadgeModule,
    AccordionModule,
    PrimengModule,
    UserModule,
    SharedModule
  ]
})
export class MvpModule { }
