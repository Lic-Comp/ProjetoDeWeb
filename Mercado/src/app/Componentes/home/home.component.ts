import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  produtos = [
    { nome: 'Lava Roupas em pó Omo Proteção Antiodor', imagem: 'https://supermercadosguanabara.com.br/sites/default/files/ofertasdodia/composicoes/lava-roupas-em-po-omo-protecao-antiodor-ou-sanitizante-16kg-exc-lavagem-perfeita-14981691413274.png' },
    { nome: 'Promoção É Bom, É do Bem, é Ypê!', imagem: 'https://abipla.org.br/wp-content/uploads/2020/08/ype-promocao-scaled-770x578.jpg'}
  ]
}
