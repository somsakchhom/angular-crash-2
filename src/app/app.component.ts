import { Component } from '@angular/core';

@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// methods or properties added below, custom, lifecycle
export class AppComponent {
  // suggested adding types to your properties, functions, 'title' is now'title: string'
  title: string = 'Task Tracker';
}
