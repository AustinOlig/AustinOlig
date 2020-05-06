// available games to convert between
var games = [
    ['csgo', 'CSGO'],
    ['apex-legends', 'APEX LEGENDS'], 
    ['valorant', 'VALORANT'], 
    ['modern-warfare', 'MODERN WARFARE'], 
    ['overwatch', 'OVERWATCH'],
];

// initialize window
$(window).on('load', () => {
    // for all games, populate table and dropdown items for converting
    for (i in games) {
        // populate game options
        var option = $(`<option>${games[i][1]}</option>`).attr('value', `${games[i][0]}`);
        $("#game-options").append(option);

        // populate table headers
        $("#table-headers").append(`<th>${games[i][1]}</th>`);

        // populate table results
        var result = $(`<td>0.0000</td>`).attr('id', `result-${games[i][0]}`);
        $("#table-cells").append(result);
    }
});

// calculate sens when selecting game to convert from
$("#game-options").change(() => {
    calcSens();
});

// calculate sens when inputting sensitivity to convert from
$("#sens-input").on('keyup change', () => {
    calcSens();
});

// calculate sens when selecting decimal precision of results
$("#decimal-precision").change(() => {
    calcSens();
});

// calculate the sensitivity for each game
function calcSens() {
    // initialize variables
    var sens_input = 0.00;
    var sens_source = 0.00;
    var selected_game = $("#game-options option:selected").val();
    var decimal_precision = $("#decimal-precision").val();

    // if sens is invalid
    if ($("#sens-input").val() <= 0) {
        sens_input = 0.00;
    } else {
        sens_input = $("#sens-input").val();
    }

    // convert input sens from selected game to source sens
    if (selected_game == 'csgo') {
        sens_source = parseFloat(sens_input);
    } else if (selected_game == 'apex-legends') {
        sens_source = parseFloat(sens_input);
    } else if (selected_game == 'valorant') {
        sens_source = parseFloat(sens_input * 22 / 7);
    } else if (selected_game == 'modern-warfare') {
        sens_source = parseFloat(sens_input * 3);
    } else if (selected_game == 'overwatch') {
        sens_source = parseFloat(sens_input / 10 * 3);
    }

    // convert to csgo
    var sens_csgo = parseFloat(sens_source);
    $("#result-csgo").text(sens_csgo.toFixed(decimal_precision));

    // convert to apex legends
    var sens_apex_legends = parseFloat(sens_source);
    $("#result-apex-legends").text(sens_apex_legends.toFixed(decimal_precision));
    
    // convert to valorant
    var sens_valorant = parseFloat(sens_source * 7 / 22);
    $("#result-valorant").text(sens_valorant.toFixed(decimal_precision));

    // convert to modernwarfare
    var sens_modern_warfare = parseFloat(sens_source * (1/3));
    $("#result-modern-warfare").text(sens_modern_warfare.toFixed(decimal_precision));

    // convert to overwatch
    var sens_overwatch = parseFloat(sens_source * (1/3) * 10);
    $("#result-overwatch").text(sens_overwatch.toFixed(decimal_precision));
}