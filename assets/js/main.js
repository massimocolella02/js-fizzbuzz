for( let i = 1; i <=100; i++ ){
    //Create Element
    let box = document.createElement("div");
    document.querySelector(".container").appendChild(box);
    box.classList.add("box")

    //Logica
    if( i % 3 == 0 && i % 5 == 0){
        box.classList.add("bg-red")
        box.innerHTML+= "fizzbuzz"
    } else if( i % 3 == 0 ){
        box.classList.add("bg-green")
        box.innerHTML+= "fizz"
    } else if( i % 5 == 0 ){
        box.classList.add("bg-yellow")
        box.innerHTML+= "buzz"
    } else{
        box.innerHTML+= i
    }
}