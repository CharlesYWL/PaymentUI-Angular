import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { DoublePipe } from './double.pipe';
import { ClassDirective } from './class.directive';
import { LoopDirective } from './loop.directive';
import { AppRoutingModule } from './app-routing.module';
import { PipetestComponent } from './pipetest/pipetest.component';
import { DirectiveTestComponent } from './directive-test/directive-test.component';
import { ReversePhraseComponent } from './reverse-phrase/reverse-phrase.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; // Added here
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    DoublePipe,
    ClassDirective,
    LoopDirective,
    PipetestComponent,
    DirectiveTestComponent,
    ReversePhraseComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
