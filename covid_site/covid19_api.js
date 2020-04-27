function get_covid_info(country) {

var country_name = country

var covid_data = ''

var covid_country = {}

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}

var client = new HttpClient();
client.get('https://api.covid19api.com/summary', function(response) {
    var covid_data = JSON.parse(response)
    var countries = covid_data['Countries']
    var country_name_capitalized = country_name.charAt(0).toUpperCase() + 
           country_name.slice(1)
    for (let i = 0; i < countries.length; i++) {
        if (country_name_capitalized == countries[i]['Country'] || 
            country_name.toUpperCase() == countries[i]['CountryCode']) {
        var covid_country = countries[i];
        }
    }
    var output = [];
    for (var property in covid_country) {
    output += property + ': ' + covid_country[property]+';\n';
}
    alert(output)
});
}

  function handleTextContent(evt) {
    var country = document.getElementById("textbox").value
    get_covid_info(country)
  }


  document.getElementById('textbox').addEventListener('change', handleTextContent, false);
