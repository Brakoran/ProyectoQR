import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogregService } from '../services/logreg.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  correoValido  = true;
  clavesValidas = true;
  camposLlenos  = true;

  constructor(private logreg: LogregService, private route: Router) { }

  ngOnInit(): void {

   
  }

  //Llamamos a nuestros servicio "LogReg" que se encarga de validar los campos del formulario registro
  //Esta es la funcion que llamamos cuando damos en registrar
  validarRegistro(valoresForm:any){
    
    // console.log(valoresForm.value);
    //valida si todos los campos estan llenos
    if(this.camposLlenos = this.logreg.validaCampos(valoresForm.value)){

      //Ahora validamos si las claves son Iguales.
      if(this.logreg.validaClavesRegistro(valoresForm.value.clave1, valoresForm.value.clave2)){

        //Ahora debemos validar que el correo no exista en la base de datos.
        this.logreg.validaCorreo(valoresForm.value.correo).subscribe(respo =>{
          let respuestaString = JSON.stringify(respo);
          let respuestaJson = JSON.parse(respuestaString);
          if(respuestaJson[0] == undefined){
            this.correoValido = true;
            
            //Aca debo insertar los valores a la BD
            this.logreg.insertaUsuario(valoresForm.value).subscribe(r =>{
              valoresForm.resetForm();
              this.route.navigate(['/login']);
            });

          }else{

            this.correoValido = false;

          }
        })
          
        

        
        

      }

    }
    

  }

}
