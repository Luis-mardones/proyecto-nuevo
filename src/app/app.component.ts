import { Component } from '@angular/core';
import { Http, Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'al club de la pelea';
  dateInspect = '';
    valueUf = '';

    constructor(private http: Http) {}

     searchIndicator() {
       this.http.get('https://mindicador.cl/api/uf/' + this.dateInspect)
       .subscribe(
           (res: Response) => {
             const valueIndicator = res.json();
             console.log(valueIndicator);
             //this.valueUf =  valueIndicator.serie.valor; // res['serie'][0]['valor'];
             this.valueUf = valueIndicator['serie'][0]['valor'];
             //for(let miS of valueIndicator['serie']) {
             //  console.log(miS);
              // console.log(miS['valor']);
            // }
           }, err => {
             console.log('UPS!');
             console.log(err);
           }, () => {
             console.log('¡Servicio Finalizado!');
             // https://angular.io/guide/quickstart
             // https://materializecss.com/
           }
       );
     }


}
