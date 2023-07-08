
function calcWave() {

    theta += 0.001;

    for (let i = 0; i < w / xspacing; i++) {
        yvalues[i] = 0;
    }

    for (let j = 0; j < maxwaves; j++) {
        let x = theta;
        for (let i = 0; i < yvalues.length; i++) {
            if (j % 1 === 0) yvalues[i] += tan(x) * amplitude[j];
            else yvalues[i] += sin(x) * amplitude[j];
            x += dx[j];
        }
    }
}



function tsikua() {

    var ruidoX = -0.000009;
    var posX = noise(millis() * ruidoX) * height;

    var ruidoC = 0.000018;
    var posC = noise(millis() * ruidoC) * 200;

    var ruidoC4 = 0.0001;
    var posC4 = noise(millis() * ruidoC4) * 12;

    translate(0, 130);

    for (let x = 0; x < yvalues.length; x++) {

        
        var words = RiTa.tokenize("[el regocijo de una mandarina pendiendo todavía de esa rama altísima como tus largos brazos de mono nunca más infinito]")


        noStroke();
        textSize(fontsize);
        fill(0);

        for (var i = 0, j = words.length; i < j; i++) {
            text(words[i], x * xspacing, x + yvalues[x] + i * posC);
        }
    }
}
