//https://www.stwater.co.uk/businesses/overview/

var item = $(".c11-fourColTextLink").children().children().last()[0]
item.querySelector(".col-title").innerText = "Notice of Building Plans Request"
item.querySelector(".col-text").innerText = "See notice of Building Plans Request"


//https://www.stwater.co.uk/businesses/competition-in-water/retail-exit-application-notification/
$(".navbar-nav").remove()
$(".breadcrumbs").remove()
$("#-notice-of-retail-exit-application-").first().text("Notice of Building Plans Request")

var node = $("<p>As of 12th October 2021 we ar requesting the plans of all building over 200sq ft to ensure water is correctly being supplied and there is no wastage.</p>") 
$(".text").prepend(node);

