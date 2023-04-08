import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { AdminComponent } from './pages/admin/admin.component';
import { StoreComponent } from './pages/store/store.component';
import { HeaderComponent } from './components/header/header.component';
import { TypingAnimatorModule } from 'angular-typing-animator';
// import { FontAwrsomeModule } from '@fortawesome/angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BlogsComponent,
    AdminComponent,
    StoreComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, TypingAnimatorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
