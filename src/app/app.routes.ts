import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JournalsPageComponent } from './journals/journals.component';
import { BooksPageComponent } from './books/books.component';
import { ServicesPageComponent } from './services/services.component';
import { ContactPageComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'journals', component: JournalsPageComponent },
  { path: 'books', component: BooksPageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**', redirectTo: '' },
];
