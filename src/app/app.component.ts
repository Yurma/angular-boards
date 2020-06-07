import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  currentItemIndex: number;
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

  getConnectedList(): any[] {
    console.log(this.lists.map((x, id) => id))
    return this.lists.map((x, id) => id);
  }
  

  ngOnInit() {
    
  }

  overItem(id) {
    this.currentItemIndex = id;
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if(event.previousContainer === event.container){
      moveItemInArray(this.lists[event.container.id].items[this.currentItemIndex], event.previousIndex, event.currentIndex)
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    }
  }

  onDrag(event: CdkDragDrop<string[]>) {
    console.log(event)
  }
}
