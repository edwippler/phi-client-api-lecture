myApp.controller('HomeController', ['$http', function($http) {
  console.log('home controller running');

  var self = this;
  self.pet = {};
  self.message = "Welcome to the Home View";

  var api_key = "86523d76eacd7cf0b425bd7800740019";
  var baseURL = "http://api.petfinder.com/";

  self.getRandomDog = function() {
    // create a URL
    var query = baseURL + "pet.getRandom";
    query += "?key=" + api_key;
    query += "&animal=dog";
    query += "&output=basic";
    query += "&format=json";

    // console.log('query to API: ', query);

    // encode that URL
    var request = query + "&callback=JSON_CALLBACK";
    console.log(request);

    // make ajax request
    $http.jsonp(request).then(function(response) {
      console.log('response: ', response.data);
      self.pet = response.data.petfinder.pet;
    });
  }
  
  self.getRandomPig = function() {
    // create a URL
    var query = baseURL + "pet.getRandom";
    query += "?key=" + api_key;
    query += "&animal=pig";
    query += "&output=basic";
    query += "&format=json";

    // console.log('query to API: ', query);

    // encode that URL
    var request = query + "&callback=JSON_CALLBACK";
    console.log(request);

    // make ajax request
    $http.jsonp(request).then(function(response) {
      console.log('response: ', response.data);
      self.pet = response.data.petfinder.pet;
    });

    // when request is completed, put info on the DOM
  }

}]);
