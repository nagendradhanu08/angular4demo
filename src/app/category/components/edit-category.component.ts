import { RouterModule, Routes , ActivatedRoute , Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../services/category.service';
import * as fs from 'file-system';
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
  selector: 'app-editCategory',
  providers: [ CategoryService ],
  templateUrl: './../views/add-category.component.html',
  styleUrls: ['./../styles/category.component.css']
})
export class EditCategoryComponent implements OnInit {
	
  constructor(private categoryService: CategoryService,private activatedRoute: ActivatedRoute) { }

  CategoryData :any = {};
  CategoryDataList :any = {};


    errors :any='';
    success :any='';
    catId :any='';
    category: FormGroup;
    name: FormControl;
    quantity: FormControl;
    

    ngOnInit() {
      this.createFormControls();
      this.createForm();
      this.list();
    }

    createFormControls(){
     this.name = new FormControl('', [
      Validators.required,
      // Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.quantity = new FormControl('', [ 
       Validators.pattern("^(0|[1-9][0-9]*)$") 
      // this validate only number
    ]);

  }

  createForm() {
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

        // serch id and change the value
        for(let i=0;i<this.CategoryDataList.length;i++)
          {
           if(this.CategoryDataList[i].id==this.catId){
              // this.CategoryData=this.CategoryDataList[i];
              this.CategoryDataList[i].name=this.CategoryData.name;

              this.CategoryDataList[i].quantity=this.CategoryData.quantity;
           }
          }
          console.log("edit");
          console.log("this.CategoryDataList",this.CategoryDataList);
            var file = fs.File.fromPath('./../../assets/json/product');
            file.writeText("Something")
            .then(function () {
            // Succeeded writing to the file.
            }, function (error) {
            // Failed to write to the file.
            });
  }
   list()
    {
       this.categoryService.getCategorys().subscribe(data => {
          // Read the result field from the JSON response.
          this.CategoryDataList = data["data"];
          this.activatedRoute.params.subscribe((params: Params) => {
            let userId = params['id'];
            this.catId = userId;
            console.log("this.CategoryDataList",this.CategoryDataList);
            for(let i=0;i<this.CategoryDataList.length;i++)
              {
               if(this.CategoryDataList[i].id==userId){
                  this.CategoryData=this.CategoryDataList[i];
                  console.log("this.CategoryData",this.CategoryData);
               }
              }
          });
        });
    }

}
