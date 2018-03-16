import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../services/category.service';
import { AppSettings } from './../../appSettings';
import { CategoryPipe } from './../category.pipe';
// ES6 Modules or TypeScript
import swal from 'sweetalert2'

@Component({
  selector: 'app-category',
  providers: [ CategoryService ],
  templateUrl: './../views/category.component.html',
  styleUrls: ['./../styles/category.component.css'],
  pipes: [CategoryPipe]
})
export class CategoryComponent implements OnInit {

	  constructor(private categoryService: CategoryService) {

     }
		CategoryData :any = [];
	  ngOnInit() {
	  	this.list();
	  }
  
    list()
    {
       this.categoryService.getCategorys().subscribe(data => {
          // Read the result field from the JSON response.
          this.CategoryData = data["data"];
          console.log("data:",this.CategoryData);
        });
       
    }

}
