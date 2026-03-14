const removeFromArray = function(arr, ...args) {

    let resultArr = [];

    for(let item of arr){
        if(args.includes(item)){
            continue;
        }
        resultArr.push(item);
    }
    return resultArr;

};

// Do not edit below this line
module.exports = removeFromArray;
