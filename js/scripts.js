(function() {
  var changeNumbers, inner, outer;

  outer = 1;

  changeNumbers = function() {
    var inner;
    inner = -1;
    return outer = 0;
  };

  inner = changeNumbers();

  $(".account").attr({
    "class": "active"
  });

}).call(this);
