import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Todo-App';
  name = '';
  currentVal=[""]
  addButton = "Add"
  editableIndex ='';
  editable = false;
  
  getVal(data:any)   
  {
    if(this.editable === true){
      console.warn(data.value)
    this.currentVal.push(data.value)
    
    }
    else{
      console.warn(data.value)
    this.currentVal.push(data.value)
    }
    
    
  }
  Delete(index:any) {
    this.currentVal.splice(index,1);

  }
  Edit(item:any, index:any) {
    this.addButton = "UPDATE";
    this.name = item;
    this.editableIndex =index;
    this.editable = true;

  }
  
}
