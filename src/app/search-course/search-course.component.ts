import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  searchcourse: string = '';
  @Output()
  searchEventChange: EventEmitter<string> = new EventEmitter<string>();

  OnSearchEvent() {
    this.searchEventChange.emit(this.searchcourse);
    console.log(this.searchcourse);
  }

}
