import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TypingAnimatorModule } from 'angular-typing-animator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProjectComponent } from './pages/project/project.component';
import { StoreComponent } from './pages/store/store.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
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
    AboutComponent,
    ProjectComponent,
    ContactComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, TypingAnimatorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
