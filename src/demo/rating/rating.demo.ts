import { Component, OnInit } from '@angular/core';

import { RatingSettings, RatingLangs } from '../../components/rating/rating.model';

@Component({
    moduleId: module.id,
    selector: 'rating-demo',
    templateUrl: 'rating.demo.html'
})
export class RatingDemoComponent implements OnInit {
    public rate: number = 3;
    public settings: RatingSettings = {
        
    };

    public langs: RatingLangs = {
        
    };

    constructor() { }

    ngOnInit() { }
}