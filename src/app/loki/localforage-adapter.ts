import * as localforage from 'localforage';

export class LocalforageAdapter {
    constructor(appname?: string) {
        if (typeof (appname) !== 'undefined') {
            appname = 'loki';
        }

        if (typeof localforage === 'undefined') {
            throw new Error('localforage does not seem to be supported for your environment');
        }
        localforage.config({
            name: appname,
            storeName: appname,
            description: appname
        });
    }


    checkAvailability(): boolean {
        if (typeof localforage !== 'undefined') {
            return true;
          } else {
            return false;
          }
    }


    loadDatabase(dbname, callback): void {
        localforage.getItem(dbname).then(function(value) {
        if (typeof callback === 'function') {
            callback(value);
        } else {
            console.error('in LocalForageAdapter.loadDatabase, callback was not a function so not executed');
        }
    });


    }

    loadKey(dbname, callback): void {
        this.loadDatabase(dbname, callback);
    }

    saveDatabase(dbname, dbstring, callback): void {
    localforage.setItem(dbname, dbstring, function(err, value) {
        if (typeof callback === 'function') {
            console.log('error when saving localforage in saveDatabase: ', err);
            callback(err); // pass through any error
        }
    });
    }

    saveKey(dbname, dbstring, callback): void {
        this.saveDatabase(dbname, dbstring, callback);
    }

    deleteKey(dbname): void {
        localforage.removeItem(dbname, function(err) {
        console.log(dbname + ' has been removed from loki localforage');
    });
}

    deleteDatabase(): void {
        localforage.clear(function(err) {
            console.log('error clearing loki localforage:', err);
        });
    }

}
