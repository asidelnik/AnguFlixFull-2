import {Component, EventEmitter,Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() searchChanged: EventEmitter<string> = new EventEmitter();
  @Input() showselect:boolean;
  years:number[]=[1999,2000,2001];
  changedSearch: string;
  constructor() { }

  ngOnInit() {
  }

  searchMovieTitle(){
      this.searchChanged.emit(this.changedSearch);
  }
}
