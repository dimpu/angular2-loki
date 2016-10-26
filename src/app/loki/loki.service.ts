import { Injectable } from '@angular/core';
import * as Loki from 'lokijs';
import { LocalforageAdapter } from './localforage-adapter';

@Injectable()
export class LokiService {
  public db: any;

  init(filename: string, opt?: any) {
    opt = opt || {};
    opt.adapter = new LocalforageAdapter(filename);
    this.db = new Loki(filename, opt);
    if (opt) {
      this.db = new Loki(filename, opt);
    }
    return this.db;
  }


}
