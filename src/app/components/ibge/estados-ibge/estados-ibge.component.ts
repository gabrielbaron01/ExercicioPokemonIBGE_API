import { Component } from '@angular/core';
import { Estados } from '../../../interfaces/Estatos';
import { IbgeService } from '../../../services/ibge.service';

@Component({
  selector: 'app-estados-list',
  standalone: true,
  imports: [],
  templateUrl: './estados-ibge.component.html',
  styleUrl: './estados-ibge.component.css'
})

export class EstadosListComponent {
  estados: Estados[] = [];

  constructor(private ibgeService: IbgeService) {
    this.list();
  }
  list(): void {
     this.ibgeService.list().subscribe((list) => (this.estados = list));
  }
  ngOnInit(): void {
    this.list();
  }
}
