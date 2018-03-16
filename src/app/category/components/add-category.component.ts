import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../services/category.service';
import { Angular2Txt } from 'angular2-txt/Angular2-txt';
import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { AppSettings } from './../../appSettings';


@Component({
  selector: 'app-addCategory',
  providers: [ CategoryService ],
  templateUrl: './../views/add-category.component.html',
  styleUrls: ['./../styles/category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

 	CategoryData :any = {};
  CategoryDataList :any = {};
 	
  	errors :any='';
  	success :any='';
  	category: FormGroup;
  	name: FormControl;
    quantity: FormControl;
  	
  	ngOnInit() {
    	this.createFormControls();
    	this.createForm();
    	this.CategoryData.status = "1"; 
      this.list();
  	}

  	createFormControls(){
    this.name = new FormControl('', [
      Validators.required,
      // Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.quantity = new FormControl('', [ 
      Validators.required,
      Validators.pattern("^(0|[1-9][0-9]*)$") 
      // this validate only number
    ]);

   
  }

  createForm() {
    // reactive form module
    this.category = new FormGroup({
      name: this.name,
      quantity: this.quantity
    });
  }
	saveCategory()
	{
		var formdata = new FormData();
      if(this.CategoryData.id == null || this.CategoryData.id == undefined || this.CategoryData.id == '' )
          {
            this.CategoryData.id = '';
          }
         
        formdata.append( 'id',this.CategoryData.id);
        formdata.append( 'name',this.CategoryData.name);
        formdata.append( 'quantity',this.CategoryData.quantity);
        console.log(this.CategoryDataList);
        console.log("id",this.CategoryDataList.length);
        console.log("name",this.CategoryData.name);
        console.log("quantity",this.CategoryData.quantity);

        //data is push in assets/product.json 
        this.CategoryDataList.push({"id":parseInt(this.CategoryDataList.length +1),
          "name":this.CategoryData.name,
          "quantity":this.CategoryData.quantity
        });
        console.log(this.CategoryDataList);
        new Angular2Txt("data", './../../assets/json/product');
        
	}
  list()
    {
       this.categoryService.getCategorys().subscribe(data => {
          // Read the result field from the JSON response.
          this.CategoryDataList = data["data"];
        
        });
    }
}