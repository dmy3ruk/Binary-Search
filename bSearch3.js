const mas = [{name:"Elide", age:18, species:"human"},
    {name:"Aelin", age:19, species:"demi-fae"},
    {name:"Dorian", age:20, species:"human"},
    {name:"Yrene", age:22, species:"human"},
    {name:"Manon", age:116, species:"witch"},
    {name:"Rowan", age:350, species:"fae"},
    {name:"Gavriel", age:600, species:"fae"}];
let first=0;
let last=mas.length-1;
let middle;
function bSearch(mas,key){
while(first<=last){
        middle=Math.floor((first+last)/2)
        if(mas[middle].age===key){
            return middle;
        }else if(mas[middle].age<key){
            first=middle+1;
        }else if(mas[middle].age>key){
           last=middle-1  
         }
    }return -1
}console.log(bSearch(mas,350))