
import { CategoryComponent } from './components/category.component';
import { AddCategoryComponent } from './components/add-category.component';
import { EditCategoryComponent } from './components/edit-category.component';

export  var CategoryConfig = [ CategoryComponent , AddCategoryComponent ,EditCategoryComponent];

export var CategoryRoute = [
	{
		path:'category',
		component:CategoryComponent
	},
	{
		path:'add-category',
		component:AddCategoryComponent
	},
	{
		path:'edit-category/:id',
		component:EditCategoryComponent
	},
	{ 
		path: '',
   		redirectTo: 'category',
    	pathMatch: 'full'
  	}
];

