import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { PeticioneshttService } from '../services/peticioneshtt.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private route: ActivatedRoute, private peticiones: PeticioneshttService) { }

  id = 0;

  nombre = "";
  pais = "";
  ciudad = "";
  celular = "";
  telefono_alterno ="";
  correo = "";


  ngOnInit(): void {

    this.route.params.subscribe(
      ({id}) => {
        
        this.id = id;
        // console.log(id);

      }
    )

    this.ObtenerUsuario();
  }


  ObtenerUsuario(){
    this.peticiones.obtenerUsuariosId(this.id).subscribe(resp => {
      let respuestaString = JSON.stringify(resp);
      let respuestaJSON = JSON.parse(respuestaString);
      
      console.log(respuestaJSON[0]);

      this.nombre = respuestaJSON[0].nombre;
      this.pais = respuestaJSON[0].pais;
      this.ciudad = respuestaJSON[0].ciudad;
      this.celular = respuestaJSON[0].celular;
      this.correo = respuestaJSON[0].correo;
      this.telefono_alterno = respuestaJSON[0].telefono_alterno;

    })
  }


}
