$(document).ready(function() {
    $('#select_track').click(function() {
        location.href = '/Users/dashonhawkins/Galvanize/g47_wdPHX/classwork/Quarterly/Q1/playlist/playlist_page.html'
    })

    $.getJSON("https://lit-fortress-6467.herokuapp.com/object", function(data) {
        var myArr = data.results;
        for (var i = 0; i < 3; i++) {
            var newArr = myArr[Math.floor(Math.random() * 4)];
            $('#imgCol').append(`
            <div class="row">
              <div class="col-md-4 col-md-offset-4">
              <img class="album_cover" src="images/${newArr.cover_art}">

              </div>
            </div>
          `)

        }
    })

    $.getJSON("https://lit-fortress-6467.herokuapp.com/object", function(data) {

        for (var i = 0; i < data.results.length; i++) {
            $('.album-sel').append('<img id="' + data.results[i].id + '" src="images/' + data.results[i].cover_art + '">')
            console.log(data.results[i].id);
        }

        $('.bin_submit').click(function(ev) {
            ev.preventDefault();
            var inputVal = $('.select_track').val();
            if (!inputVal) {
                alert('Please enter something')
            } else {
                $.getJSON("https://lit-fortress-6467.herokuapp.com/object", function(data) {

                    for (var i = 0; i < data.results.length; i++) {
                        // var myObj = {};
                        // var results = [];
                        //
                        // myObj.id = data.results[i].id;
                        // myObj.title = data.results[i].title;
                        // myObj.artist = data.results[i].artist;
                        // myObj.cover_art = data.results[i].cover_art;
                        // results.push(myObj);
                        // console.log(results);
                        $('.select_track').append('Some text')
                    }

                });
            });

            // $.getJSON('https://lit-fortress-6467.herokuapp.com/object').done(function(data) {
            //     var albums = data.results.title;
            //
            //     for (var i = 0; i < albums; i++) {
            //         $('#button').click(function() {
            //             $('#albums').append('<li>' + albums[i] + '</li>');
            //         })
            //     }
            // })
        }
    });
});
