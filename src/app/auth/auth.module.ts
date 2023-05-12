import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { MiqrComponent } from './miqr/miqr.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';




@NgModule({
  declarations: [
    PanelComponent,
    MiqrComponent
  ],
  imports: [
    CommonModule,
    NgxQRCodeModule,
    
    
  ],
  exports:[
    PanelComponent,
    MiqrComponent
  ]
})
export class AuthModule { }
