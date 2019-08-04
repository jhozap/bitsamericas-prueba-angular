import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ToastrModule } from 'ngx-toastr';
import { MemoryDataAlbumService } from './services/memory-db/memory-data.service';
import { MainComponent } from './pages/main/main.component';
import { AlbumComponent } from './pages/album/album.component';
import { DetailComponent } from './pages/detail/detail.component';
import { LoginComponent } from './pages/login/login.component';
import { MemoryDataMusicService } from './services/memory-db/memory-data-music.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AlbumComponent,
    DetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientInMemoryWebApiModule.forRoot(
      MemoryDataAlbumService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
