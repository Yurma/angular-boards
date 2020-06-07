import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-boards';
  lists = [
    {
      title: "To-Do",
      items: [
        {
          content: "One",
          labels: [
            "Frontend"
          ]
        },
        {
          content: "Two",
          labels: [
            "Backend"
          ]
        }
      ]
    },
    {
      title: "In progress",
      items: [
        {
          content: "Three",
          labels: [
            "Frontend",
            "Javascript"
          ]
        }
      ]
    },
    {
      title: "Complete",
      items: [
        {
          content: "Four",
          labels: [
            "Backend",
            "ExpressJs"
          ]
        },
        {
          content: "Five",
          labels: [
            "Frontend",
            "Javascript"
          ]
        }
      ]
    }
  ];

  

  ngOnInit() {
    
  }

  onDrop(event: CdkDragDrop<string[]>) {
    console.log(event)
  }
}
