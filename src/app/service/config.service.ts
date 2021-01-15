import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {environment} from 'src/environments/environment';

@Injectable()
export class ConfigService {
    constructor(private http: HttpClient) {
    }

    getGreeting(): Observable<IOwner[]> {
        const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
        return this.http.get<IOwner[]>(`${environment.basePath}owners`, {headers});
    }
}

export interface IOwner {
    address: string;
    city: string;
    firstName: string;
    id: number;
    lastName: string;
    new: boolean;
    telephone: string;
}
