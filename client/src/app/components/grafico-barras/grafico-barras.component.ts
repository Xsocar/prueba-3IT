import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { GraficoModel } from '../model/grafico.model';

@Component({
  selector: 'app-grafico-barras',
  templateUrl: './grafico-barras.component.html',
  styleUrls: ['./grafico-barras.component.css']
})
export class GraficoBarrasComponent implements OnInit {

  @Input() List: Array<GraficoModel>;

  public Total = 0;
  public MaxHeight = 160;

  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
    /* get and filter de tests info */
    this.api.getStyles().subscribe(styles => {
      this.api.getTests().subscribe(tests => {
        styles.forEach(style => {
          let size = tests.filter(test => test.style == style.name).length;
          this.List.push({ Value: size, Color: this.ramdomColor(), Size: '', Legend: style.name })
        });

        this.MontarGrafico();

      });
    });
  }

  /* drawing each bar */
  MontarGrafico() {
    this.List.forEach(element => {
      this.Total += element.Value;
    });

    this.List.forEach(element => {
      element.Size = Math.round((element.Value * this.MaxHeight) / this.Total) + '%';
    });
  }

  /* generate radom color */
  ramdomColor() {
    const arrayOfColorFunctions = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

    let randomColorString = '#';

    for (let x = 0; x < 6; x++) {

      let index = Math.floor(Math.random() * 16)
      let value = arrayOfColorFunctions[index]

      randomColorString += value
    }

    return randomColorString;
  }

}
