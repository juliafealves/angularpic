import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Photo} from './photo';
import {Observable} from 'rxjs';

const URL_API = 'http://localhost:3000/';

@Injectable({
    providedIn: 'root'
})
export class PhotoService {
    public constructor(private httpClient: HttpClient) {}

    /**
     * List all photos' user.
     * @param username
     */
    public listFromUser(username: string): Observable<Photo[]> {
        return this.httpClient.get<Photo[]>(URL_API + username + '/photos');
    }
}
