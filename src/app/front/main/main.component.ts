import { Component } from '@angular/core';
import { CategoriaComponent } from "../../features/categorias/view/categoria/categoria.component";
import {MatDividerModule} from '@angular/material/divider';
import { TarefaComponent } from "../../features/tarefas/view/tarefa/tarefa.component";


const COMPONENTS = [CategoriaComponent, TarefaComponent];

const MODULES = [MatDividerModule];

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [...COMPONENTS, ...MODULES],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
