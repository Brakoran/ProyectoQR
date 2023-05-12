import { Component, OnInit } from '@angular/core';
import { LogregService } from '../../public/services/logreg.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  nombre = "";
  constructor(private logreg: LogregService, private route:Router) { }

  ngOnInit(): void {
    this.nombre = this.logreg.nombre;
  }

  iraQr(){
    this.route.navigate(['/miqr']);
  }

}
