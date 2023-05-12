import { Component, OnInit } from '@angular/core';
import { LogregService } from '../services/logreg.service';
import { PeticioneshttService } from '../services/peticioneshtt.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id = null;

  constructor(private peticiones: PeticioneshttService, private logReg: LogregService, private route: Router) { }

  ngOnInit(): void {
  }


  validarLogin(valores:any){
    this.peticiones.obtenerUsuariosPorCorreo(valores.value.correo).subscribe(resp =>{
      let respuestaString = JSON.stringify(resp);
      let respuestaJson = JSON.parse(respuestaString);

      if(respuestaJson[0].correo == valores.value.correo && respuestaJson[0].clave == valores.value.clave){

        
        this.logReg.setDatos(respuestaJson[0]);
        this.logReg.setLogeado(true);
        this.route.navigate(['/panel']);

      }

      

    })
  }

}
