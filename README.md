# angular2-loki

Lokijs for angular2, Ionic 2, NativeScript with Angualr.


How to use
```shell
npm i angualr2-loki --save

```


```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LokiModule } from './loki/loki.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LokiModule,
    .....
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```


```ts 
import { Component } from '@angular/core';
import { LokiService } from 'angular2-loki';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private loki: LokiService) {
    let db = loki.init('mydb.txt');
    // db will export lokijs object
    // full docs at https://rawgit.com/techfort/LokiJS/master/jsdoc/Loki.html
    let users = db.addCollection('users');
    users.insert({
        name: 'Odin',
        age: 50,
        address: 'Asgard'
    });

    console.log(users.findOne({ name: 'Odin' }));
  }
}

```

