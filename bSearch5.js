const mas = [1,3,6,9,10,25,34,48,50,57,100];
function bSearch(mas,key){
    function rSearch(first=0, last=mas.length-1){
        let middle=Math.floor((first+last)/2)
        if(first>last){
            return -1;
        }
        if(mas[middle]===key){
           return middle;
        }else if(mas[middle]<key){
            return rSearch(first=middle+1,last);
        }else {
            return rSearch(first,last=middle-1);
         }}return rSearch(0, mas.length-1)
}console.log(bSearch(mas,25))