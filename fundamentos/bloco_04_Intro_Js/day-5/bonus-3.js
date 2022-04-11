let base = 5;
let pencil = '+';
let spaces = ' ';


for (let trianguleWidth = 1; trianguleWidth <= base; trianguleWidth += 1 ) {
    console.log((spaces.repeat(base - trianguleWidth)) + (pencil.repeat(trianguleWidth)));
        
    
}


