import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  searchQuery: string = '';
  sortOption: string = 'name';

  @Output() searchQueryEmit = new EventEmitter<string>();
  @Output() sortQueryEmit = new EventEmitter<string>();

  onSearch(): void {
    this.searchQueryEmit.emit(this.searchQuery);
  }

  onSortChange(): void {
    this.sortQueryEmit.emit(this.sortOption);
  }

}
