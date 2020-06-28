import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../service/autenticacao.service';
import { Router } from '@angular/router';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin;

  constructor(private autenticacaoService: AutenticacaoService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }
  entrar() {
    
      this.autenticacaoService.logar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
      this.usuarioLogin = resp;
      localStorage.setItem('token', this.usuarioLogin.token)
      localStorage.setItem('nomeCliente', this.usuarioLogin.nomeCliente)
      location.assign('/home')
    }, err => {
      alert('Houve um erro ao entrar, verifique o e-mail e senha, por favor!')
    })
  }
}
