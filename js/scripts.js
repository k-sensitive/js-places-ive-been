$(document).ready(function() {
  $("#add-fact").click(function() {
    $("#new-facts").append('<div class="new-fact">' +
    '<div class="form-group">' +
    '<label for="new-landmark">Landmark</label>' +
    '<input type="text" class="form-control new-landmark">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="new-last-visited">Time Lasted Visited</label>' +
    '<input type="text" class="form-control new-last-visited">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="new-notes">Notes</label>' +
    '<input type="text" class="form-control new-notes">' +
    '</div>' +
    '</div>');
  });
  $("form#new-location").submit(function(event) {
    event.preventDefault();

    var inputtedCountryName = $("input.new-country-name").val();
    var inputtedCapitalName = $("input.new-capital-name").val();

    var newLocation = { countryName: inputtedCountryName, capitalName: inputtedCapitalName, facts: [] };

    $(".new-fact").each(function() {
      var inputtedLandmark = $(this).find("input.new-landmark").val();
      var inputtedLastVisited = $(this).find("input.new-last-visited").val();
      var inputtedNotes = $(this).find("input.new-notes").val();

      var newFacts = { landmark: inputtedLandmark, lastVisited: inputtedLastVisited, notes: inputtedNotes };
      newLocation.facts.push(newFacts);

    });


    $("ul#locations").append("<li><span class='location'>" + newLocation.countryName + "</span></li>");

    $(".location").last().click(function() {
      $("#show-location").show();

      $("#show-location h2").text(newLocation.countryName);
      $(".country-name").text(newLocation.countryName);
      $(".capital-name").text(newLocation.capitalName);

      $("ul#facts").text("");
      newLocation.facts.forEach(function(fact) {
        $("ul#facts").append("<li>" + "Landmark: " + fact.landmark + "<br>Last Visited: " + fact.lastVisited + "<br>Notes: " + fact.notes + "</li>");
      });
    });

    $("input.new-country-name").val("");
    $("input.new-capital-name").val("");
    $("input.new-landmark").val("");
    $("input.new-last-visited").val("");
    $("input.new-notes").val("");
  });
});
