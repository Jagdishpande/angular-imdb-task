import { Pipe, PipeTransform } from '@angular/core';
import { Imoviearr } from '../model/data';

@Pipe({
  name: 'filtermovie'
})
export class FiltermoviePipe implements PipeTransform {

  transform(value: Imoviearr[], serchtext : string): Imoviearr[] {
    if(!value){
     return []
    }
   if(!serchtext){
     return value
 }
   let  movieArray= value.filter(movieobj=>{
     return movieobj.title.toLowerCase().startsWith(serchtext.toLowerCase())

   })
   return movieArray
 }

}
