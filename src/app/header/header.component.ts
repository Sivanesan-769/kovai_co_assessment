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
    setTimeout(() => {
      this.searchQueryEmit.emit(this.searchQuery);
    }, 1000)
  }

  onSortChange(): void {
    setTimeout(() => {
      this.sortQueryEmit.emit(this.sortOption);
    }, 1000)
  }

}
