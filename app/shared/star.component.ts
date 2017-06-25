import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'comp-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls:['app/shared/star.component.css']

})
export class StarComponent implements OnChanges{
    
   @Input() rating:number;
    starWidth:number;
    @Output() notifyContainer: EventEmitter <number> =  new EventEmitter <number>();

    ngOnChanges():void{
        this.starWidth = this.rating * 86/5;
    }
    onClick():void{
        this.notifyContainer.emit(this.rating)
    }
}
