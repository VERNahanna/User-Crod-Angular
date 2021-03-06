import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './helpers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './components';
import { LayoutComponent } from './users/layout.component';
import { ListComponent } from './users/list.component';
import { AddEditComponent } from './users/add-edit.component';
import { CommonModule } from '@angular/common';;


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
         CommonModule,

    ],
    declarations: [
        AppComponent,
        AlertComponent,
        LayoutComponent,
        ListComponent,
        AddEditComponent


    ],
    providers: [
        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };
