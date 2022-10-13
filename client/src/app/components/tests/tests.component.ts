import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { GraficoModel } from "../model/grafico.model";

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  title = 'Resultados';
  /* variable data for graph bar */
  public dataTests: Array<GraficoModel> = [];


  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
    
  }

  


}
