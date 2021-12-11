$(function() {
   var $preview = $("#preview");

   $("ul#products a").hover(function() {
      $preview.attr("src", $(this).attr("data-thumbnail-src"));
   }, function() {
      $preview.attr("src", "");
   });
});

