exports.myDateTime = function () {
    return Date();
  };

exports.myGetTime = function(){
    return Date();
};  


var arrowGetTime = exports.myArrowGetTime = () => Date()

var arrowGetTimeV2 = exports.myArrowGetTimeV2 = () =>{
  return Date()
};