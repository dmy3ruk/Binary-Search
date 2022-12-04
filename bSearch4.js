mas=[{name:"Rowan", age:350},
{name:"Aelin", age:19},
{name:"Manon", age:116},
{name:"Rhys", age:536},
{name:"Feyre", age:20},
{name:"Nesta", age:23}]
function bbleSort(mas){
    for (let i=0; i<mas.length-1; i++){
        for (let j=0; j<mas.length-1; j++){
            if (mas[j].age>mas[j+1].age){
            let a=mas[j];
            mas[j]=mas[j+1];
            mas[j+1]=a;
        }}}
    return mas
    }
    
    function bSearch(mas,key){
        mas=bbleSort(mas)
        let first=0;
        let last=mas.length-1;
        let middle;
        while(first<=last){
            middle=Math.floor((first+last)/2)
            if(mas[middle].age===key){
                return middle;
            }else if(mas[middle].age<key){
                first=middle+1;
            }else if(mas[middle].age>key)   {
               last=middle-1  
             }}
        return -1
    }console.log(bSearch(mas,23))