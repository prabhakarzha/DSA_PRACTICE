/**
 * @param {number[]} sides
 * @return {number[]}
 */
var internalAngles = function(sides) {
    let [a,b,c] = sides;

    if(a+b<=c || b+c <=a || c+a<=b){
        return [];
    }

    const angleA = Math.acos((b*b +c*c -a*a) /(2*b*c));
    const angleB = Math.acos((a*a +c*c -b*b) /(2*a*c));
    const angleC = Math.acos((a*a +b*b -c*c) /(2*a*b));

    const toDegree = (rad) => rad*(180 / Math.PI);

    let result = [
        toDegree(angleA),
        toDegree(angleB),
        toDegree(angleC)
    ];
    result.sort((x,y) =>x-y);
    return result


    
};