
import {Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'category'
})
export class CategoryPipe implements PipeTransform {
    transform(items: Array, searchText: string){
        if (items && items.length){
            return items.filter(item =>{
                if (searchText && item.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1){
                    return false;
                }
                return true;
           })
        }
        else{
            return items;
        }
    }
}