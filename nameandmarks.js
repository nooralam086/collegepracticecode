const f1 = {
    name : "Noor Alam",
    marks : [ 81, 75,65,82,65,89],

    avg : function s1(){
       let sum = 0;
       for(let i=0;i<=4;i++){
        sum=sum+this.marks[i];
       }
       return sum/5;
       


    }
    
};
console.log(f1.name);
console.log(f1.avg());
