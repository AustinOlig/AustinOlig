var games = [
    ['csgo', 'CSGO'],
    ['apex-legends', 'APEX LEGENDS'], 
    ['valorant', 'VALORANT'], 
    ['modern-warfare', 'MODERN WARFARE'], 
    ['overwatch', 'OVERWATCH'],
];

var sens_input = 0.00;
var sens_csgo = 0.00;
var sens_apex_legends = 0.00;
var sens_valorant = 0.00;
var sens_modern_warfare = 0.00;
var sens_overwatch = 0.00;
var decimal_precision = 4;
var selected_game = games[0][0];

$(window).on('load', () => {
    // initializing fields
    initFields();

    // selecting game to convert from
    $("#game-options").change(() => {
        selected_game = $("#game-options option:selected").val();
        console.log(selected_game);
    });

    // inputting sensitivity to convert from
    $("#sens-input").keyup(() => {
        sens_input = $("#sens-input").val();
        calcSens();
    });

    // selecting decimal precision of results
    $("#decimal-precision").change(() => {
        decimal_precision = $("#decimal-precision").val();
        calcSens();
    });
});

function initFields() {
    // for all games, construct table and dropdown items
    for (i in games) {
        var option = $(`<option>${games[i][1]}</option>`).attr('value', `${games[i][0]}`);
        $("#game-options").append(option);

        $("#table-headers").append(`<th>${games[i][1]}</th>`);

        var result = $(`<td>0.0000</td>`).attr('id', `result-${games[i][0]}`);
        $("#table-cells").append(result);
    }
}

function calcSens() {
    // CSGO
    var sens_csgo = parseFloat(sens_input);
    $("#result-csgo").text(sens_csgo.toFixed(decimal_precision));

    // APEX LEGENDS
    var sens_apex_legends = parseFloat(sens_input);
    $("#result-apex-legends").text(sens_apex_legends.toFixed(decimal_precision));
    
    // VALORANT
    var sens_valorant = parseFloat(sens_input * 7 / 22);
    $("#result-valorant").text(sens_valorant.toFixed(decimal_precision));

    // MODERN WARFARE
    var sens_modern_warfare = parseFloat(sens_input * (1/3));
    $("#result-modern-warfare").text(sens_modern_warfare.toFixed(decimal_precision));

    // OVERWATCH
    var sens_overwatch = parseFloat(sens_input * (1/3) * 10);
    $("#result-overwatch").text(sens_overwatch.toFixed(decimal_precision));
}