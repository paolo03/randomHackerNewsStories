import { Component, OnInit } from '@angular/core';
import { SharedService } from '@app/shared/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchInput: string
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  dataChanged(event){
   this.sharedService.searchFilter(event)
  }
}
