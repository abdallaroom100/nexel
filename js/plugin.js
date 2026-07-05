$(".rush").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".block4").offset().top,
    },
    "slow"
  );
});

$(".form-control-input").on("focus", function () {
  $("#btnSubmit").removeAttr("disabled");
});
function mytime() {
  $("#btnSubmit").removeAttr("disabled");
}
var url = $(location).attr("href"),
  parts = url.split("="),
  last_part = parts[parts.length - 1];
last_part != url && $("#article").val(last_part);

function SubmitForm() {
  $("#btnSubmit").attr("disabled", "disabled");
  setTimeout(mytime, 4000);
  var jsFormData = $("#contact-form").serialize();
  $.ajax({
    type: "POST",
    url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdXxCqPlpw-KN0egnhgHAsnAOlxXcO6Z5cRiyV3vXJNDvir-g/formResponse",
    data: jsFormData,
    async: false,
    dataType: "xml",
    success: function (data) {
      SuccessResponse();
    },
  });
  SuccessResponse();
  window.open("thanks.html", "_self");
}

function SuccessResponse() {
  $("#btnSubmit").attr("disabled", "true");
  $("#contact-form :input").attr("disabled", true);
}

function validateForm() {
  $("#contact-form").validate();
}
$().ready(function () {
  // validate the comment form when it is submitted
  $("#contact-form").validate({
    rules: {
      "entry.710811246": {
        required: true,
        digits: true,
      },
    },
  });
});

$(function () {
  $("#block6-img1").on({
    mouseenter: function () {
      $(this).children("img").attr("src", "images/block2.2-1.png");
    },
    mouseleave: function () {
      $(this).children("img").attr("src", "images/block2.2.png");
    },
  });
});
$(function () {
  $("#block6-img2").on({
    mouseenter: function () {
      $(this).children("img").attr("src", "images/block2.3-1.png");
    },
    mouseleave: function () {
      $(this).children("img").attr("src", "images/block2.3.png");
    },
  });
});

$("#sync1").owlCarousel({
  loop: true,
  margin: 100,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
      stagePadding: 80,
      margin: 20,
    },
    576: {
      items: 1,
      stagePadding: 100,
      margin: 50,
    },
    767: {
      items: 1,
      stagePadding: 200,
      margin: 100,
    },
    991: {
      items: 1,
      stagePadding: 300,
      margin: 150,
    },
    1200: {
      items: 1,
      stagePadding: 400,
      margin: 200,
    },
    1600: {
      items: 1,
      stagePadding: 600,
      margin: 250,
    },
  },
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
});

