import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { LogregService } from '../../public/services/logreg.service';

@Component({
  selector: 'app-miqr',
  templateUrl: './miqr.component.html',
  styleUrls: ['./miqr.component.css']
})
export class MiqrComponent implements OnInit {



  constructor(private logregs: LogregService) {

    
  }

  ngOnInit(): void {
    
    
  }
  
  
  title = 'QRPeludo'
  elementType = NgxQrcodeElementTypes.IMG
  value = `https://proyectohuellas.000webhostapp.com/usuario/${this.logregs.id}`
  errorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH

}
