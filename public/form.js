$(function() {
  $("#responsesection, #newqueryheading").hide();
  $("form").on("submit", function() {
    var query = $("#query").val();
    $.get("/api/whereis", { q: query }, function(data) {
      $("#previousquery").text(query);
      $("#response").text(query + " is located " + data);
      $("#responsesection, #newqueryheading").show();
    });
    return false;
  });
});
