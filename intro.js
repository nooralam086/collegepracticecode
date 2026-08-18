const intro = {
    name : "Noor Alam",
    age : "20",
    work:"student",
    address:{
        city:"Varanasi"
    },
    hello : function sayhello(){
        console.log("Hello",this.name);
    }
}
console.log(intro.name);
console.log(intro.age);
console.log(intro.address.city);
intro.hello();