import { Pipe, PipeTransform } from '@angular/core';
import { Rating } from './rating';

@Pipe({ name: 'calculateAvg' })
export class RatingPipe implements PipeTransform {

    transform(rating: Rating) {
        return ((
            rating.service.valueOf()) / 6).toPrecision(2);
    }
}
