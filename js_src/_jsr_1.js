jQuery(document).ready(function($) {
  $.ajax({
    // 결과를 한글로 받을 수 있다.
    //url : "http://api.wunderground.com/api/d9f45faf33cb9139/geolookup/conditions/lang:KR/q/Korea/Seoul.json",
    //dataType : "jsonp",
    //success : function(parsed_json) {
    //  // 관측지에 대한 정보
    //  var observ = parsed_json.current_observation;
    //  //var observ_s = observ.display_location.full;
    //  // 날씨정보
    //  var weather_s = "<p class="+"weather-icon"+">"+"<img src='"+observ.icon_url+"'/></p>";
    //  weather_s += "<div class="+"weather-wrap"+">";
    //  weather_s += "<p class="+"weather-text"+">"+observ.weather+"</p>";
    //  weather_s += "<p class="+"weather-temp"+">"+observ.temp_c+" ℃ </p>";
    //  weather_s += "</div>";
    //  $("#weatherinfo").append(weather_s);
    //}
  });
});