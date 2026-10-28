export{};
let marks:number[] = [1,2,4,5,6,7,8,9,10]

//traditional for loop
for(let i=0;i<=marks.length;i++){
    if(i === 2){
        console.log(i);
        break;
    }
}

//for..of loop

for(let mark of marks){
    console.log(mark+"\t");
}

//foreach loop
marks.forEach(mark => {
    console.log(mark);
})
