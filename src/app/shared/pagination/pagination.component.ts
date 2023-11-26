import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() totalRecords = 0;  
  @Input() recordsPerPage = 13;  

  @Output() onPageChange: EventEmitter<number> = new EventEmitter();  

  public pages: number [] = [];  
  @Input() activePage: number=0;  

  ngOnChanges(): any {  
    const pageCount = this.getPageCount();  
    this.pages = this.getArrayOfPage(pageCount);  
    this.activePage = 1;  
  }  

  private  getPageCount(): number {  
    let totalPage = 0;  
    if (this.totalRecords > 0 && this.recordsPerPage > 0) {  
      const pageCount = this.totalRecords / this.recordsPerPage;  
      const roundedPageCount = Math.floor(pageCount);  

      totalPage = roundedPageCount < pageCount ? roundedPageCount + 1 : roundedPageCount;  
    }  

    return totalPage;  
  }  
  trackByFn(index: number, item: any): any {
    return index;
}
  private getArrayOfPage(pageCount: number): number [] {  
    const pageArray = [];  

    if (pageCount > 0) {  
        for(let i = 1 ; i <= pageCount ; i++) {  
          pageArray.push(i);  
        }  
    }  

    return pageArray;  
  }  

  onClickPage(pageNumber: number): void {
      if (pageNumber >= 1 && pageNumber <= this.pages.length) {  
          this.activePage = pageNumber;  
          this.onPageChange.emit(this.activePage);  
      }  
  } 
}
