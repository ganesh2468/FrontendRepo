function checker(firstpos, secpos){
    if(firstpos>secpos)false
        return false;
    let range=secpos-firstpos;
    if(range>=1 && range<=6)
        return true;
    else 
        return false; 
}
console.log(checker(3,7));