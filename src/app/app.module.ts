import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SidebarComponent } from './components/organisms/sidebar/sidebar.component';
import { MainComponent } from './components/organisms/main/main.component';
import { ImageProfileComponent } from './components/atoms/image-profile/image-profile.component';
import { AddExpenditureButtonComponent } from './components/atoms/add-expenditure-button/add-expenditure-button.component';
import { ExpenditureTableComponent } from './components/molecules/expenditure-table/expenditure-table.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    MainComponent,
    ImageProfileComponent,
    AddExpenditureButtonComponent,
    ExpenditureTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
