import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CaptchaComponent } from './components/captcha/captcha.component';
import { QrComponent } from './components/qr/qr.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [AppComponent, CaptchaComponent, QrComponent],
  imports: [BrowserModule, FormsModule, RecaptchaModule, NgxQRCodeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
