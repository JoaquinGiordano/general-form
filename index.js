//
//    GENERAL FORM
//    Joaquin Giordano (2018)
//    https://github.com/JoaquinGiordano/general-form
//

function generalForm([a,b,c]){

    let x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a)
    let x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a)
    
    return { x1: x1, x2: x2 }
    
}

