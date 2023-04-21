import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

 hidden:boolean=true;

 toggle(){
  this.hidden=!this.hidden;
 }

 isLoading:boolean=true;
 ngOnInit(): void {
  setTimeout(() => {
    this.isLoading = false;
  }, 3000); // Set the duration to 3 seconds
}
}
