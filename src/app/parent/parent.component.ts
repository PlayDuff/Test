import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  Personne = {
    nom : "Finot",
    prenom : "Florian",
    img : "",
    genre : false,
    ville : "Bordeaux",
    pays : "France",
    competences : ["css","html", "php"],
    note : 10
  }

  
  numCompteur = 0;
  toogle = true;
  nameButtonApparition = "Faire Disparaitre";
  constructor(private http: HttpClient) { }

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

  getNomPrenom(){
    return this.http.get<any>('https://randomuser.me/api').subscribe(data => {
      
        this.Personne.prenom = data.results[0].name.first;
        this.Personne.nom = data.results[0].name.last;
        this.Personne.genre = true;
        this.Personne.img = data.results[0].picture.large;
        this.Personne.ville = data.results[0].location.city;
        this.Personne.pays = data.results[0].location.country;
        this.Personne.competences = ["css","html", "php", "Angular?"];
      
    });
  }

  

}
@Component({
  selector: 'asyncObservablePipe',
  template: "<div class = 'dateModif'>Dernière modification : {{ time | async }}</div>"
})
export class AsyncObservablePipeComponent {
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
}