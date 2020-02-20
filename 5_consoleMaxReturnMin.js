function psrl(arr){
    var min = arr[0];
    var max = arr[0];

    for(var i=1; i<arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
        if(max < arr[i]){
            max = arr[i];
        }
    }
    console.log("Min is "+min);
    console.log("Max is "+max);
    return min;
}

var arr=[8,3,2,5,7];
var large = psrl(arr);