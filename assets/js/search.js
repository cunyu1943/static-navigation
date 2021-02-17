$("div").on("click", "label", function () {
  $("div label").each(function () {
      $(this).attr("class", "searchlabel");
  });
  $(this).attr('class', 'nsearchlabel');
  var id = $(this).attr("data-target");
  $("div form").each(function () {
      $(this).addClass("hidden");
  });
  $("#" + id).removeClass("hidden");
});