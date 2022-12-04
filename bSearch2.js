const mas = [1,33,6,9,25,10,48,50,5,100];
function bbleSort(mas){
for (let i=0; i<mas.length-1; i++){
    for (let j=0; j<mas.length-1; j++){
        if (mas[j]>mas[j+1]){
        let a=mas[j];
        mas[j]=mas[j+1];
        mas[j+1]=a;
    }}}
return mas
}
console.log(bbleSort(mas));

function bSearch(mas,key){
    mas=bbleSort(mas)
    let first=0;
    let last=mas.length-1;
    let middle;
    while(first<=last){
        middle=Math.floor((first+last)/2)
        if(mas[middle]===key){
            return middle;
        }else if(mas[middle]<key){
            first=middle+1;
        }else if(mas[middle]>key)   {
           last=middle-1  
         }}
    return -1
}console.log(bSearch(mas,10))