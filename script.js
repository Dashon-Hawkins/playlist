$(document).ready(function() {

    // Splash_page.html Functionality  //

    $.getJSON("https://lit-fortress-6467.herokuapp.com/object", function(data) {
        var myArr = data.results;
        for (var i = 0; i < 3; i++) {
            var newArr = myArr[Math.floor(Math.random() * myArr.length)];
            $('.col-borderRt').append(`
            <div class="row">
              <div class="col-md-4 col-md-offset-4">
              <img class="album_cover" src="images/${newArr.cover_art}">
              </div>
            </div>
          `)

        }

        $('img').click(function(data) {
            ev.preventDefault();
            var inputVal = $('.select_track').val();
            if (!inputVal) {
                alert('Please enter something') }
            } else {

                var artist_info = $(this).attr('src');

                // console.log (artist_info);
                // console.log ('images/' + artists[0].cover_art);

                for (var i = 0; i < data.results.length; i++) {
                    if (artist_info === 'images/' + artists[i].cover_art) {
                        $('.select_track').append('<div>' + artists[i].artist + " : " + artists[i].title + '<div>');

                    }
                }

            })

            // Empty the Bin event //
            $('#clear tracks').click(function() {
                $('col-md-8').empty();
            });

        }); // API  at End

        //POST Request

        $('#submit_bin').click(function() {
            $.post("https://lit-fortress-6467.herokuapp.com/post").done(function() {
                alert("Success!!!");
            }).fail(function) {
                alert("Error...unable to post!!!");
            })

        })

    }) //Document End
