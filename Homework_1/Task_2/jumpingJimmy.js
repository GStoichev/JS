function jumpingJimmy(tower, jumpHeight) {
    let maxHeight = 0;
    for(let floar of tower){
        if(floar > jumpHeight) {
            return maxHeight;
        }
        maxHeight += floar;
    }
    return maxHeight;
}