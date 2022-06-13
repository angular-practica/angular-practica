import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario, DataUsuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[] = [];
  form: FormGroup = this.fb.group({
    name: [''],
    lastname: [''],
    year: [''],
    dni: ['']
  });

  constructor(
    private usuarioService: UsuarioService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.usuarioService.getAll().subscribe((usuarios: Usuario[]) => {
      // console.log('usuariooooooooooooooooooo',usuario.data);
      console.log(usuarios);
      this.usuarios = usuarios;
      // const { data } = usuario;
      // this.usuarios = data;
    })
  }

  selectUser(id: string ) {
    this.usuarioService.get(id).subscribe(usuario => {
      console.log('respuestaaa',usuario);
    })
  }

  create() {
    this.usuarioService.create(this.form.value).subscribe(usuario => {
      console.log('respuestaaaaaaaaaaaaaaaaaa',usuario);
      this.getAll();
    })
  }

}
