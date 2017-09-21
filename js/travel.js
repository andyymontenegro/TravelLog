 $(document).on('click', '#bandSearch',function(event){
    var type= $("#eventInput").val().trim();
    var apiUrl = 'https://api.seatgeek.com/2/performers?q=';
    type = encodeURIComponent(type);
    var apiKey = '&client_id=ODkyNzE3MnwxNTA1NTc5MjczLjAx';
    var queryURL = apiUrl + type + apiKey ;

      event.preventDefault();
       //$("#maps").html("<iframe width=\"600px\" height=\"450px\" src='"www.google.com/maps/embed/v1/place?key=AIzaSyCrAG0aRsURc6XpGJG2j7aAyD1hiJuX3xA&q=Space+Needle,Seattle+WA"'/iframe>");
  $.ajax({url:queryURL,method:'GET'})
      .done(function(response){
        $("#ticket").html("<iframe width=\"600px\" height=\"450px\" src='"+response.performers[0].url+"'/iframe>");
        $("#maps").html(`<iframe width=\"600px\" height=\"450px\" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCrAG0aRsURc6XpGJG2j7aAyD1hiJuX3xA&q=Space+Needle,Arlington+TX"</iframe>`);
          console.log(response);

        });

    });
//FireBase getting city input

 var config = {
    apiKey: "AIzaSyCxYwoPI_J2BE9j7Io6VCOqbLORnOvYkqg",
    authDomain: "travel-1b81d.firebaseapp.com",
    databaseURL: "https://travel-1b81d.firebaseio.com",
    projectId: "travel-1b81d",
    storageBucket: "travel-1b81d.appspot.com",
    messagingSenderId: "369551747144"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var cityName = "";
  

  //Capture Button Clicks
  $('#bandSearch').on('click', function(event){
    event.preventDefault();

    cityName = $("#locationInput").val().trim();
    console.log(cityName);

   //Grab Values to handle push
   var objToPush = {
    cityName: cityName,
    
    dateAdded: firebase.database.ServerValue.TIMESTAMP
   } 

   database.ref().push(objToPush);



  })
