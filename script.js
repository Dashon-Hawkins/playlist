$(document).ready(function() {
  $.getJSON("https://lit-fortress-6467.herokuapp.com/object", function(data) {
    var myArr = data.results;
    var count = myArr.length;
    for (var i = 0; i <  newArr; i++) {
      var newArr = myArr [Math.floor(Math.random() * (count))];
      $('#first_row').append('#album_container')
      myArr.indexOf(newArr).slice(0);
    }
    return this;
  })
    })
  });

  $('#select_btn').click(function(ev) {
    ev.preventDefault();
    var inputVal = $('#search').val();
    if( !inputVal ) {
      alert('warning')
    } else {
      $.getJSON("https://lit-fortress-6467.herokuapp.com/object/?s=" + inputVal, function(data) {

        for (var i = 0; i < data.results.length; i++) {
          var obj = {};
          var results = [];

          obj.id = data.results[i].id;
          obj.title = data.results[i].title;
          obj.artist = data.results[i].artist;
          obj.cover_art = data.results[i].cover_art;
          results.push(obj);
          console.log(results);
        }

      });


$.getJSON('https://lit-fortress-6467.herokuapp.com/object')
   .done(function(data) {
      var albums = data.results.title;

      for (var i = 0; i < albums; i++) {
        $('#button').click(function() {
          $('#albums').append('<li>'+ albums[i] + '</li>');
        })
      }
    })
});

$('#button').click(function() {
  $.post('https://lit-fortress-6467.herokuapp.com/post')
    {
         "artist": "post artist",
         "title": "post titles",
     },
     function(data) {
       console.log ("data: " + data + "\nStatus: " + status);
       $('#request_box').load('https://lit-fortress-6467.herokuapp.com/object/?s=')

       {
         artist: "artist_name",
         title: "album_title"
         cover_art: "image"

        },
      function(){
        if (status == "success"){
               $("div").html("<ol></ol>");
               $(response).find("#artist").each(function(){
                   var item_text = $(this).text();
                   $('<li></li>').html(item_text).appendTo('ol');
               });
               alert("You requested: " + $(response).find("id").length + "Album")
           }
       });

     }
   )
 })
});
