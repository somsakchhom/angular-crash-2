import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

// in the video 20:38: 
//  export class HeaderComponent implements OnInit {
//  constructor() {}
//  ngOnInit(): void {}
// }

////////// how it was originally:  //////////////
// export class HeaderComponent {

// }
// ///////////////////////////////////////////

export class HeaderComponent implements OnInit {
   title: string = 'Task Tracker';
   constructor() {}

   ngOnInit(): void {}

   toggleAddTask() {
    console.log('toggle');
   }
  }
