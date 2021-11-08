import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit {

  numCompteur = 0;
  toogle = true;
  nameButtonApparition = "Faire Disparaitre";
  competences = ["CSS","HTML", "PHP", "JS","Angular?"];

  constructor() { }

  ngOnInit(): void {
  }

  onClickBtn(){
    this.numCompteur ++;
  }

  onClickBtnApparition(){
    if (this.toogle == true){
      this.nameButtonApparition = "Faire Apparaitre";
    }else if(this.toogle == false){
      this.nameButtonApparition = "Faire Disparaitre";
    }
    this.toogle = !this.toogle;
  }

}
