$(window).on('load', () => {
    var games = [
        ['csgo', 'CSGO'],
        ['apex-legends', 'APEX LEGENDS'], 
        ['valorant', 'VALORANT'], 
        ['modern-warfare', 'MODERN WARFARE'], 
        ['overwatch', 'OVERWATCH'],
    ];

    for (i in games) {
        $("#game-options").append(`<option>${games[i][1]}</option>`);

        $("#table-headers").append(`<th>${games[i][1]}</th>`);

        var entry = $(`<td>0.0000</td>`).attr('id', `result-${games[i][0]}`);
        $("#table-cells").append(entry);
    }

    $("#decimal-precision").change(() => {
        calcSens();
    });

    $("#sens-input").keyup(() => {
        var sens_input = $("#sens-input").val();
        var decimal_precision = $("#decimal-precision").val();
        //console.log(sens_input);

        var sens_csgo = parseFloat(sens_input);
        $("#result-csgo").text(sens_csgo.toFixed(decimal_precision));

        var sens_apex_legends = parseFloat(sens_input);
        $("#result-apex-legends").text(sens_apex_legends.toFixed(decimal_precision));

        var sens_valorant = parseFloat(sens_input * 7 / 22);
        $("#result-valorant").text(sens_valorant.toFixed(decimal_precision));

        var sens_modern_warfare = parseFloat(sens_input * (1/3));
        $("#result-modern-warfare").text(sens_modern_warfare.toFixed(decimal_precision));

        var sens_overwatch = parseFloat(sens_input * (1/3) * 10);
        $("#result-overwatch").text(sens_overwatch.toFixed(decimal_precision));
    });

    
});

function calcSens() {
    console.log($("#decimal-precision").val());
}