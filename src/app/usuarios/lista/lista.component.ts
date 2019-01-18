import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(public _usuarioService: UsuarioService) { }

  ngOnInit() {
    this._usuarioService.getUsuarios()
        .subscribe( (resp: any) => { 
          console.log(resp);
          this.usuarios = resp;          
        })
  }

}
