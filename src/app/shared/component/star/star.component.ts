import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
    selector:'app-star',
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})
export class StarComponent implements OnChanges{
    @Input()
    rating: number = 0;
    startWidth: number = 0;

    ngOnChanges(): void{
        this.startWidth = this.rating * 74 / 5;
    }
}