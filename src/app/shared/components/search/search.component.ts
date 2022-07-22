import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { QuotesService } from 'src/app/services/quotes.service';
import { Quote, SearchResult } from '../../objects/Quote';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<Quote[]>();

  isSearching: boolean = false;

  searchForm = this.formBuilder.group({
    searchString: new FormControl('content', Validators.required)
  });

  constructor(
    private formBuilder: FormBuilder,
    private quotesService: QuotesService
  ) { }

  ngOnInit(): void {
  }

  search(): void {
    this.isSearching = true;
    const value = this.searchForm.get('searchString')?.value;
    this.quotesService.getQuotesByQuery(value).subscribe((searchResult: SearchResult) => {
      this.searchEvent.emit(searchResult.results);
      this.isSearching = false;
    }, error => {
      this.isSearching = false;
      alert('Something went wrong! Please try again later.')
    });
  }

}
