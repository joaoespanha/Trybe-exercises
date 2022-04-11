let base = 10;
let pencil = '+';
let spaces = ' ';


for (let trianguleWidth = 1; trianguleWidth <= base; trianguleWidth += 2 ) {
    let pencilSpacesRatio = (base - trianguleWidth)//2;
    
    console.log((spaces.repeat(pencilSpacesRatio)) + (pencil.repeat(trianguleWidth)));
        
    
}



