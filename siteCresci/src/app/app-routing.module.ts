import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ContatoComponent } from './contato/contato.component';
import { DoeComponent } from './doe/doe.component';
import { SobreComponent } from './sobre/sobre.component';
import { FaqComponent } from './faq/faq.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EntrarComponent } from './entrar/entrar.component';
import { PrivacidadeComponent } from './privacidade/privacidade.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { DeletarUsuarioComponent } from './deletar-usuario/deletar-usuario.component';
import { PaginaProdutoComponent } from './pagina-produto/pagina-produto.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { TermosDeUsoComponent } from './termos-de-uso/termos-de-uso.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'lojinha', component: ProdutosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'doacao', component: DoeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'duvidas', component: FaqComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'cadastrar', component: CadastroComponent },
  { path: 'entrar', component: EntrarComponent },
  { path: 'privacidade', component: PrivacidadeComponent },
  { path: 'editar-usuario/:id', component: EditarUsuarioComponent },
  { path: 'deletar-usuario/:id', component: DeletarUsuarioComponent },
  { path: 'pagina-produto/:id', component: PaginaProdutoComponent},
  { path: 'cadastro-produto', component: CadastroProdutoComponent},
  { path: 'termos-de-uso', component: TermosDeUsoComponent },
  { path: 'notfound', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
