window.onload = function () {

  console.log('Nothing to see here.')
  let origin = window.location.href;
  if (origin.includes('bbc')){

    console.log('1')
    var el = document.createTextNode("All water suppliers will soon be asking for plans to ensure water is piped effectively to buildings");
    document.querySelector("[data-component=text-block]").appendChild(el);

  } else if (origin.includes('overview')){

    console.log('2')
    var item = $(".c11-fourColTextLink").children().children().last()[0]
    item.querySelector(".col-title").innerText = "Notice of Building Plans Request"
    item.querySelector(".col-text").innerText = "See notice of Building Plans Request"

  } else if (origin.includes('competition')){

    console.log('3')
    $(".navbar-nav").remove()
    $(".breadcrumbs").remove()
    $("#-notice-of-retail-exit-application-").first().text("Notice of Building Plans Request")

    var node = $("<p>As of 12th October 2021 we are requesting the plans of all building over 200 sq ft to ensure water is correctly being supplied and there is no wastage.</p>")
    $(".text").prepend(node);
  }
}