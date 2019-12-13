import { Component, OnInit } from '@angular/core';

import { Component, OnInit } from '@angular/core';



export interface DemoData {
  demoGroup: string;
  pName: string;
  position: number;
  percChosen: number;
  party: string;
  county; string;
  totalPop: number;
}

const DEMO_DATA: DemoData[] = [
  {position: 1, demoGroup: 'African American', county: 'Boward County' ,pName: 'Beaver Creek', percChosen: '42%', party: 'Republican', county: 'Brower', totalPop: 3456},
  {position: 1, demoGroup: 'African American', county: 'Boward County' ,pName: 'Beaver Creek', percChosen: '42%', party: 'Republican', county: 'Brower', totalPop: 3456},
  {position: 1, demoGroup: 'African American', county: 'Boward County' ,pName: 'Beaver Creek', percChosen: '42%', party: 'Republican', county: 'Brower', totalPop: 3456},
  {position: 1, demoGroup: 'African American', county: 'Boward County' ,pName: 'Beaver Creek', percChosen: '42%', party: 'Republican', county: 'Brower', totalPop: 3456},
  {position: 1, demoGroup: 'African American', county: 'Boward County' ,pName: 'Beaver Creek', percChosen: '42%', party: 'Republican', county: 'Brower', totalPop: 3456},
  {position: 1, demoGroup: 'African American', county: 'Boward County' ,pName: 'Beaver Creek', percChosen: '42%', party: 'Republican', county: 'Brower', totalPop: 3456},
  {position: 1, demoGroup: 'African American', county: 'Boward County' ,pName: 'Beaver Creek', percChosen: '42%', party: 'Republican', county: 'Brower', totalPop: 3456},
  {position: 1, demoGroup: 'African American', county: 'Boward County' ,pName: 'Beaver Creek', percChosen: '42%', party: 'Republican', county: 'Brower', totalPop: 3456},
  {position: 1, demoGroup: 'African American', county: 'Boward County' ,pName: 'Beaver Creek', percChosen: '42%', party: 'Republican', county: 'Brower', totalPop: 3456},
  {position: 1, demoGroup: 'African American', county: 'Boward County' ,pName: 'Beaver Creek', percChosen: '42%', party: 'Republican', county: 'Brower', totalPop: 3456},
];



export interface VotingData {
  demoGroup: string;
  pName: string;
  position: number;
  percChosen: number;
  party: string;
  county; string;
  totalPop: number;
}

const VOTING_DATA: VotingData[] = [
  {position: 1, demoGroup: 'African American', county: 'Boward County' ,pName: 'Beaver Creek', percChosen: '42%', party: 'Republican', county: 'Brower', totalPop: 3456567},
  {position: 1, demoGroup: 'African American', county: 'Boward County' ,pName: 'Beaver Creek', percChosen: '42%', party: 'Republican', county: 'Brower', totalPop: 3456567},
  {position: 1, demoGroup: 'African American', county: 'Boward County' ,pName: 'Beaver Creek', percChosen: '42%', party: 'Republican', county: 'Brower', totalPop: 3456567},
  {position: 1, demoGroup: 'African American', county: 'Boward County' ,pName: 'Beaver Creek', percChosen: '42%', party: 'Republican', county: 'Brower', totalPop: 3456567},
  {position: 1, demoGroup: 'African American', county: 'Boward County' ,pName: 'Beaver Creek', percChosen: '42%', party: 'Republican', county: 'Brower', totalPop: 3456567},
  {position: 1, demoGroup: 'African American', county: 'Boward County' ,pName: 'Beaver Creek', percChosen: '42%', party: 'Republican', county: 'Brower', totalPop: 3456567},
  {position: 1, demoGroup: 'African American', county: 'Boward County' ,pName: 'Beaver Creek', percChosen: '42%', party: 'Republican', county: 'Brower', totalPop: 3456567},
  {position: 1, demoGroup: 'African American', county: 'Boward County' ,pName: 'Beaver Creek', percChosen: '42%', party: 'Republican', county: 'Brower', totalPop: 3456567},
];


@Component({
  selector: 'app-phase0-table',
  templateUrl: './phase0-table.component.html',
  styleUrls: ['./phase0-table.component.css']
})
export class Phase0TableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'demoGroup', 'county', 'pName', 'party', 'percChosen', 'totalPop' ];

  demoDataSource = DEMO_DATA;
  votingDataSource = VOTING_DATA;
  

  constructor() { }

  ngOnInit() { }

}