const mas = [1,3,6,9,10,25,34,48,50,57,100];
let first=0;
let last=mas.length-1;
let middle;
function bSearch(mas,key){
while(first<=last){
        middle=Math.floor((first+last)/2)
        if(mas[middle]===key){
            return middle;
        }else if(mas[middle]<key){
            first=middle+1;
        }else if(mas[middle]>key)   {
           last=middle-1  
         }
    }return -1
}console.log(bSearch(mas,25))