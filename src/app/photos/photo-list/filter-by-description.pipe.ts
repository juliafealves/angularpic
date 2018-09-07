import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({
    name: 'filterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform {

    public transform(photos: Photo[], query: string): Photo[] {
        const filter = query.trim().toLowerCase();
        let photosFilted: Photo[] = photos;

        if (filter) {
            photosFilted = photos.filter(photo => photo.description.toLowerCase().includes(filter));
        }

        return photosFilted;
    }

}
