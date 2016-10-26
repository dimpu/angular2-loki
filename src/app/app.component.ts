import { Component } from '@angular/core';
import { LokiService } from './loki/loki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private loki: LokiService) {
    let db = loki.init('mydb.txt');
    let users = db.addCollection('users');
    users.insert({
        name: 'Odin',
        age: 50,
        address: 'Asgard'
    });

    console.log(users.findOne({ name: 'Odin' }));
  }
}
