// for (let i = 0; i < 6; i++) {
    // console.log("*".repeat(i));
// }
function DrawTriangle (height){
    for(let i= 0; i<= height;i++){
        let star="";
        for(let j=0;j<=i;j++){
            star+="*";
    }
    console.log(star);
}
}
 DrawTriangle(5);