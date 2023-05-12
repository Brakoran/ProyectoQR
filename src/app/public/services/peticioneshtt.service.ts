import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeticioneshttService {

  constructor(private http: HttpClient) { }

  obtenerUsuariosPorCorreo(correo:any){

    let datos = {
      "correo" : correo
    }

    return  this.http.post(`https://proyectohuellas.000webhostapp.com/back/obtenerUsuarioCorreo.php`, JSON.stringify(datos));  
  }


  insertarNuevoUsuario(usuario:any){

    return  this.http.post(`https://proyectohuellas.000webhostapp.com/back/postUsuario.php`, JSON.stringify(usuario));  
  }


  obtenerUsuariosId(id:any){

    let datos = {
      "id" : id
    }

    return  this.http.post(`https://proyectohuellas.000webhostapp.com/back/obtenerDatoPorId.php`, JSON.stringify(datos));  
  }

  

}
