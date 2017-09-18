$(document).ready(function() {

  var flavor1 = prompt("Name a flavor");
  var flavor2 = prompt("Name a second flavor");
  var flavor3 = prompt("Name a third flavor");

  var flavors = [flavor1, flavor2, flavor3];

  alert(flavors);

  flavors.forEach(function(flavor) {
    debugger;
      var userInput= $("li " + flavor).val();
      $("ul#icecreamlist").append("<li>" +flavor+ "</li>");
      $("li#1").text(flavor);
    });

});
