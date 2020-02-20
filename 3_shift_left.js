// Given an array, shift all values one position to the left.  Change the final position to 0. Return the changed array
// Predicted Output: shiftLeft([1,2,3,4,5]) should return [2,3,4,5,0];

function shiftLeft(arr){
    // YOUR CODE HERE
    var newArray=[];
    var left = 1;
    for(var i=0; i<arr.length; i++){
        if(arr[i+left]!=undefined){
            newArray.push(arr[i+left]);
        }
        else {
            newArray.push(0);
        }
    }
    return newArray;
}
var resultArr = shiftLeft([]);
console.log(resultArr);

// shiftLeft Test Cases:
// shiftLeft([1,-7,2,-5,8,7,-11,10])        //Expected output: [-7,2,-5,8,7,-11,10,0]
// shiftLeft(["hello","hi","yo","wazzup"])  //Expected output: [hi","yo","wazzup",0]
// shiftLeft([1,2])                         //Expected output: [2,0]
// shiftLeft([1])                           //Expected output: [0]
// shiftLeft([])                            //Expected output: []



