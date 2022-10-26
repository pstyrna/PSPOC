import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreYouSureComponent } from './components/are-you-sure/are-you-sure.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { WhoYouAreComponent } from './components/who-you-are/who-you-are.component';
import { MaterialModule } from './shared/material.module';

@NgModule({
    declarations: [AppComponent, TopBarComponent, WhoYouAreComponent, AreYouSureComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ServiceWorkerModule.register('my-service-worker.js', { enabled: environment.production }),
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent, TopBarComponent],
})
export class AppModule {}
