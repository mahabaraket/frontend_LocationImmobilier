import { Component, OnInit } from '@angular/core';
import { BiensService } from '../services/biens.service';

@Component({
  selector: 'app-biens',
  templateUrl: './biens.component.html',
  styleUrls: ['./biens.component.css']
})
export class BiensComponent implements OnInit {
  list = [] as any ;
  constructor(private bienService:BiensService,) { }

  ngOnInit(): void {
    this.bienService.getBiens().subscribe((res) => {
      this.list = res;});
  }

}
