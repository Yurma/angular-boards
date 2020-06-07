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
      isEditing: false,
      itemEdit: null,
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
      isEditing: false,
      itemEdit: null,
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
      isEditing: false,
      itemEdit: null,
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

  setItemEdit(listId, itemId) {
    this.lists[listId].itemEdit = itemId
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if(event.previousContainer === event.container){
      moveItemInArray(this.lists[event.container.id].items[this.currentItemIndex], event.previousIndex, event.currentIndex)
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    }
  }

  stringToList(labels: string){
    let list = labels.split(/(?:,| )+/);
    return list
  }

  editItem(listId: number, itemId: number, labels: any, content: string) {
    console.log(listId, itemId, labels, content)
    let item = this.lists[listId].items[itemId];
    item.labels = this.stringToList(labels);
    item.content = content;
    this.lists[listId].items[itemId] = item;
    this.lists[listId].itemEdit = null;
  }
}
