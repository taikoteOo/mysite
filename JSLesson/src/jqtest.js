// $(document).ready(
//     function(){
//         // $('button').click(function(){
//         //     $('p').toggle();
//         // });
//         // $('p').text('Ето текст');
//         // $("p").html(<h3>Ето заголовок</h3>);
//         // $('p').attr("style");
//         // $('p').before("<div>Text</div>");
//     }
// );

// $(document).ready(function(){
//     $('#callAjax').click(function(){
//         $("#ajaxContent").load("../text.txt")
//     })
// })

$(document).ready(function () {
  $.ajax({
    URL: "https://jsonplaceholder.typicode.com/todos/5",
    type: "GET",
    success: function (data) {
      for (key in data) {
        $("#ajaxContent").append(key + ":" + data[key] + "<br>");
      }
    },
    error: function (error) {
      $("#ajaxContent").text(error);
    },
  });
});
