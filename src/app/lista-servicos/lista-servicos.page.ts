import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { exit } from 'process';

@Component({
  selector: 'app-lista-servicos',
  templateUrl: './lista-servicos.page.html',
  styleUrls: ['./lista-servicos.page.scss'],
})
export class ListaServicosPage implements OnInit {
  servicos: ApiService;
  listaServicos: Array<Object> = [];
  constructor(private ApiService: ApiService) {
    this.readData();
  }

  ngOnInit() {
  }


  readData(){
    this.ApiService.readData().subscribe(data => {
      this.listaServicos.push(data);
      console.log(this.listaServicos);
    })
  
  }

  logScrollStart() {
    console.log('aaa');
  }

  logScrolling($event){

  }

  logScrollEnd(){

  }

  done(servico){
    if(servico.StatusServ == 'Concluido'){
      servico.StatusServ = 'Em andamento';
      this.ApiService.done(servico);
    }else{
      servico.StatusServ = 'Concluido';
      this.ApiService.done(servico);
    }
  }
}
