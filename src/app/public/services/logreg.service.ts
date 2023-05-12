import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { PeticioneshttService } from './peticioneshtt.service';


@Injectable({
  providedIn: 'root'
})
export class LogregService {

  correoValido = true;
  clavesValidas = true;
  camposLlenos    = true;
  logeado = false;

  //Datos Logeado
  id = 0;
  nombre = "";
  pais = "";
  ciudad = "";
  celular = "";
  celular2 = "";
  correo = "";
  //

  constructor(private peticiones: PeticioneshttService) { }

  validaCorreo(correo: string){

  
    return this.peticiones.obtenerUsuariosPorCorreo(correo);

  }

  insertaUsuario(usuario:any){

    return this.peticiones.insertarNuevoUsuario(usuario);
  }

  //Valida que las claves sean iguales al momento del registro
  validaClavesRegistro(clave1: string, clave2: string): boolean{

    if(clave1 == clave2){
      return true;
    }

    return false;
  }

  //Valida que todos los campos del formulario esten llenos
  validaCampos(valoresFormRegistro : any):boolean{

    if(valoresFormRegistro.nombre == "" || valoresFormRegistro.correo == "" 
        || valoresFormRegistro.celular == "" || valoresFormRegistro.telefonoAlterno == ""
        || valoresFormRegistro.pais == "" || valoresFormRegistro.ciudad == ""
        || valoresFormRegistro.clave1 == "" || valoresFormRegistro.clave2 == ""){

      return false;
    }
    
    return true;
  }


  setLogeado(valor:boolean){
    this.logeado = valor;
  }

  getLogeado(){
    return this.logeado;
  }

  setDatos(datos: any){
    this.id = datos.id_usuario;
    this.nombre = datos.nombre;
    this.pais = datos.pais;
    this.ciudad = datos.ciudad;
    this.celular = datos.celular;
    this.celular2 = datos.telefono_alterno;
    this.correo = datos.correo;
  }

}
