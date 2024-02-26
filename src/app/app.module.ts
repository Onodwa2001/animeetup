import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsfeedComponent } from './components/pages/newsfeed/newsfeed.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ButtonComponent } from './components/elements/button/button.component';
import { InputBoxComponent } from './components/elements/input-box/input-box.component';
import { NavComponent } from './components/content/nav/nav.component';
import { PostComponent } from './components/content/post/post.component';
import { CommentComponent } from './components/content/comment/comment.component';
import { LoginFormComponent } from './components/content/login-form/login-form.component';
import { SignupFormComponent } from './components/content/signup-form/signup-form.component';
import { SearchComponent } from './components/pages/search/search.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommentPageComponent } from './components/pages/comment-page/comment-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TokenInterceptorService } from './services/interceptor/token/token-interceptor.service';
import { CommentModalComponent } from './components/content/modals/comment-modal/comment-modal.component';
import { EditProfileModalComponent } from './components/content/modals/edit-profile-modal/edit-profile-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsfeedComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    ButtonComponent,
    InputBoxComponent,
    NavComponent,
    PostComponent,
    CommentComponent,
    LoginFormComponent,
    SignupFormComponent,
    SearchComponent,
    CommentPageComponent,
    CommentModalComponent,
    EditProfileModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:TokenInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
