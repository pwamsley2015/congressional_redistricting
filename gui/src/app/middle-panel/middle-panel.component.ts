import {Component, OnInit} from '@angular/core';
import {MapService} from '../services/map.service';

@Component({
    selector: 'app-middle-panel',
    templateUrl: './middle-panel.component.html',
    styleUrls: ['./middle-panel.component.css']
})
export class MiddlePanelComponent implements OnInit {

    constructor(private mapService: MapService) {
    }

    ngOnInit() {
    }

}
