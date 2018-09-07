import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';
import { Observable } from 'rxjs';

const URL_API = 'http://localhost:3000/';

@Injectable({
    providedIn: 'root'
})
export class PhotoService {
    public constructor(private httpClient: HttpClient) {
    }

    /**
     * List all photos' user.
     * @param username
     */
    public listFromUser(username: string): Observable<Photo[]> {
        return this.httpClient.get<Photo[]>(URL_API + username + '/photos');
    }

    /**
     * List all photos' user with paginate.
     * @param username
     * @param page
     */
    public listFromUserPaginated(username: string, page: number): Observable<Photo[]> {
        const parameters = new HttpParams().append('page', page.toString());
        return this.httpClient.get<Photo[]>(URL_API + username + '/photos', {params: parameters});
    }
}
