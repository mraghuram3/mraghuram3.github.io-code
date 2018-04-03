import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    title = 'app';

    skillset = [
      {'skill': 'angular', 'priority': 'high'},
      {'skill': 'javascript', 'priority': 'high'},
      {'skill': 'Ionic', 'priority': 'high'},
      {'skill': 'HTML', 'priority': 'high'},
      {'skill': 'CSS', 'priority': 'high'},
      {'skill': 'Java', 'priority': 'medium'},
      {'skill': 'Node.Js', 'priority': 'medium'},
      {'skill': 'Typescript', 'priority': 'medium'},
      {'skill': 'Python', 'priority': 'low'},
      {'skill': 'React', 'priority': 'low'},
      {'skill': 'React-Native', 'priority': 'low'},
      {'skill': 'Adobe Illustrator', 'priority': 'low'},
      {'skill': 'Adobe After Effects', 'priority': 'low'},
      {'skill': 'Adobe PhotoShop', 'priority': 'low'}
    ];

  constructor() {
 
   }


  ngOnInit() {
    this.randomizeSkill();
    // setInterval(() => {
    //   this.randomizeSkill();
    // }, 2000);
  }

  randomizeSkill(){
    for (let i = this.skillset.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.skillset[i];
      this.skillset[i] = this.skillset[j];
      this.skillset[j] = temp;
  }
  }
}
