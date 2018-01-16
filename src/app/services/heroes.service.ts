import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface HeroResponse {
    id: number,
    name: string
}

@Injectable()
export class HeroesService {

    constructor( private http: HttpClient ) { }

    getHeroes() {
        //let token: string = this.config.isRememberMe() ? localStorage.getItem('token') : sessionStorage.getItem('token');
        let env = this.currentEnv();

        let baseUrl = env + '/api/heroes';

        let url = baseUrl;
        let headers = new HttpHeaders().set( 'Content-Type', 'application/json' );
        //headers.append('token', token);

        return this.http.get<HeroResponse[]>( url, { headers: headers })
            .subscribe(( res: any ) => console.log( 'heroes received' ),
            ( err: HttpErrorResponse ) => {
                this.errorHandler( err );
            }
            );
    }

    currentEnv() {
        console.log( 'main page config ' );
        //return this.config.getConfig('host');
        return 'http://45.55.200.56';
    }

    private errorHandler( error: any ) {
        console.log( 'raw error' );
        console.log( error );
        let errMsgs = error.json();
        console.log( errMsgs );
        return Observable.throw( errMsgs );
    }
}
