// module.exports is an module.
// in this module we give add as an key and its value as function.
// {add: function(a, b){return a+b;}}
module.exports.add = function(a, b){
    return a + b;
}

module.exports.sub = function(a, b){
    return a - b;
}

module.exports.mul = function(a, b){
    return a * b;
}

exports.div = function(a, b){
    return a / b;
}

// we can't access rem outside the file: So that why we do 'module.expots'
// var rem = function(a, b){
//     return a % b;
// }

exports.rem = function(a, b){
    return a % b;
}

// module keywords are rendent for now: