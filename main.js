var f = function(id){
    return parseFloat(document.getElementById(id).value);
}
function gous(){
    var r1 = [f("r1a"),f("r1b"),f("r1c"),f("r1d")];
    var r2 = [f("r2a"),f("r2b"),f("r2c"),f("r2d")];
    var r3 = [f("r3a"),f("r3b"),f("r3c"),f("r3d")];

    var mulvalR2 = (r2[0]/r1[0]);
    var mulvalR3 = (r3[0]/r1[0]);
    for(var i = 0;i<=3;i++){
        r2[i] = parseFloat((r2[i] - (r1[i]*mulvalR2)).toFixed(3));
        r3[i] = parseFloat((r3[i] - (r1[i]*mulvalR3)).toFixed(3));
    }
    console.log(r1);
    console.log(r2);
    console.log(r3);

    var mulvalR4 = (r3[1]/r2[1]);
    for(var i = 0;i<=3;i++){
        r3[i] = r3[i] - (r2[i]*mulvalR4).toFixed(3);
    }
    console.log(r1);
    console.log(r2);
    console.log(r3);

    // x y z value calculation
    var z = (r3[3]/r3[2]).toFixed(3);
    var y = ((r2[3]-(r2[2]*z))/r2[1]).toFixed(3);
    var x = ((r1[3]-(r1[2]*z)-(r1[1]*y))/r1[0]).toFixed(3);
    console.log(z);
    console.log(y);
    console.log(x);

}