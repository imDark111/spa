import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  heroes:any[]=[]
  termino: string="";
  
  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService){

  }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params =>{
      this.termino = params['termino']

      this.heroes = this._heroesService.filterHeroes(params['termino']);
      console.log(this.heroes);
    })

  }
}
