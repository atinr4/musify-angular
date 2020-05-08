import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {

  chunkedCatgeory;
  constructor() { }
  @Input('categories') categories; 
  ngOnInit(): void {
    this.chunkedCatgeory = this.chunkArray(this.categories, 3);
    console.log(this.chunkedCatgeory);
  }

  chunkArray(myArray, chunk_size){
    let index = 0;
    let arrayLength = myArray.length;
    let tempArray = [];
    let myChunk;

    for (index = 0; index < arrayLength; index += chunk_size) {
        myChunk = myArray.slice(index, index+chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }

    return tempArray;
}

}
