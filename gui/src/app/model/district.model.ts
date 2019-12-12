import {Control, DomUtil} from 'leaflet';
import {MapService} from '../services/map.service';

export class District extends Control {
    demographics: any;
    geography: string;
    geoId: number;
    districtNumber: number;
    votingSet: any;
    mapService: MapService;

    constructor(opts, district, mapService: MapService) {
        super(opts);
        this.demographics = district.demographics;
        this.geography = district.geography;
        this.geoId = district.geoId;
        this.districtNumber = district.districtNumber;
        this.mapService = mapService;
    }

    onAdd(map) {
        const table = DomUtil.create('table') as HTMLTableElement;
        table.bgColor = '#303030';
        let temp = 0;
        console.log(this.demographics);
        for (const dem of Object.keys(this.demographics)) {
            const row0 = table.insertRow(temp);
            const cell0 = row0.insertCell(0);
            cell0.innerText = dem;
            temp++;
        }
        //
        // element.innerText = 'Total Pop: ' + this.demographics.total + '   White Population: ' + this.demographics.white;
        // element.innerText += '  % White: ' + ((this.demographics.white / this.demographics.total) * 100).toFixed(2);
        // element.style.color = 'black';

        return table;
    }
}