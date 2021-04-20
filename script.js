$(function(){
// Jquery Starts

let $myProject1 = $(".portfolio-list-item1");
let projectList = $(".portfolio-list").children()

console.log(projectList);
console.log($myProject1)




projectList.each(function (){
  
  $(this).mouseover(function() {
    if ($(this).css("margin")=== "15px"){
      $(this).css({"cursor": "pointer"})
      $(this).animate({"margin": "0px"})
    } else($(this).stop)
  });
  $(this).mouseout(function() {
    $(this).animate({"margin": "15px"})
    
  });
})



// Jquery Ends
})