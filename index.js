userInputArr = process.argv.slice(2);
const characters = require('./java.js');

let start = `Dein Name ist Paul. Du stehst auf einer weißen Wiese mit vielen lila Blumen. Der Himmel ist blau und klar. Links ist ein Weg und Rechts ist eine Brücke. Gib ein weg oder brücke.`;

let weg = `Du kommst zu einem Weg wo ein Mann steht. Vor dir ist ein Wald. Willst du Reden, Weitergehen, oder Zurückgehen? Wenn du reden willst musst du das reden... mit Leerzeichen hinter dem Befehl eingeben Gib ein reden, wald(weiter) oder start(zurück).`;
let redeMann = `Der Mann erzählt das vor dem Waldweg vor dir Banditen warten und das es ein Zauberwort mit dem Namen trommel gibt. Willst du Weitergehen, oder Zurückgehen? Gib ein wald(weiter) oder start(zurück).`;
let wald = `Vor dir ist ein dunkler Wald mit eckigen Bäumen und der Himmel wird mit jedem Schritt düsterer. Willst du Weitergehen, oder Zurückgehen? Gib ein wald2(weiter) oder start(zurück).`;
let wald2 = `Vor und hinter dir tauchen dunkle Gestalten auf. Willst du flüchten oder kämpfen? Gib ein waldFlucht oder waldKampf.`;
let waldKampf = `Vor dir siehst du ein wunderschönes weißes Einhorn und eine Schar von Piguinen. Sie wollen dein Hab und Gut. Willst du es ihnen geben, kämpfen oder flüchten. Gib ein geben, waldKampf2 oder waldFlucht`;

//let waldKampf2 

let geben = `Du gibst ihnen dein Hab und Gut. Willst du wieder in Richtung Weg gehen wo du herkamst oder in die andere Richtung du siehst aus der Ferne ein Hexenhaus? Gib ein weg oder hexenhaus`
let waldFlucht = `Du wirst von vielen Schatten verfolgt aber entkommst ihnen. Nun hast du dich im Wald verlaufen. Vor dir ist ein Lebkuchenhaus. Gib ein hexenhaus(kein anderer Weg)`;
let hexenhaus = `Das Lebkuchenhaus ist viel größer als es vorher aussah und zudem voll mit Essen. Du hörst Schreie aus dem Keller. Willst du das Essen nehmen und abhauen oder in den Keller gehen und den Schreien folgen? Gib ein weghier oder keller`;
let keller = `Der Keller ist dunkel und du siehst 2 Kinder in einem rostigen Käfig um Hilfe rufen. Gib ein retteKinder`;
let retteKinder = `Du rettest die Kinder und der Tag ist gerettet. Nun taucht die Hexe auf. Gib ein kampfHexe`;

//let kampfhexe

let ende1 = `Du rettest die Kinder und der Tag ist gerettet. Herzlichen Glückwunsch! 
----The End----`;
let weghier = `Du hast viel Essen in den Taschen und läufst so schnell wie deine Beine dich tragen. Du hörst Geräusche. Vertsecken oder weiterlaufen? Gib ein verstecken oder weiterlaufen`;
let verstecken = waldKampf;
let weiterlaufen = `Du wirst von Pinguinen durch den Wald gejagt. Willst du schneller laufen oder dich ergeben? Gib ein schneller oder ergeben`;
let schneller = weg;


let brücke = `Du kommst zu einem Fluss dort steht eine kleine hölzerne Brücke und davor ist ein Junge. Willst du Reden, Weitergehen, oder Zurückgehen? Wenn du reden willst musst du das reden mit Leerzeichen hinter dem Befehl eingeben Gib ein reden, feste(weiter) oder start(zurück)`;
let redeJunge = `Der Junge fragt dich ob du Stress suchst und haut dir ins Gesicht. Willst du Kämpfen, Reden, Weitergehen, oder Zurückgehen? Wenn du reden willst musst du das reden mit Leerzeichen hinter dem Befehl eingeben Gib ein reden2, kampfJunge(kämpfen), feste(weiter) oder start(zurück)`;

// let kampfJunge

let redeJunge2 = `Der Junge ruft seine Freunde. Willst du Reden oder Flüchten? Wenn du reden willst musst du das reden mit Leerzeichen hinter dem Befehl eingeben Gib ein reden3, feste(weiter), start(zurück)`;
let redeJunge3 = `Der Junge verhaut dich mit seinen Freunden. Game Over!`;

let feste = `Du kommst zu einer Feste aus massivem Stein. Davor ist ein Soldat. Willst du Reden, weitergehen, oder Zurückgehen? Gib ein redeSoldat, inFeste(weiter) oder brücke(zurück)`;
let redeSoldat = `Der Soldat sagt das er zu tun hat und gerade leider nicht reden kann. Willst du weitergehen oder zurück? Gib ein inFeste(weiter) oder brücke(zurück)`;
let inFeste1 = `Der Soldat lässt dich nicht ohne das Zauberwort weiter. Wenn du weiterwillst musst du das Zauberwort mit Leerzeichen hinter dem Befehl eingeben. Gib ein inFeste(weiter) (Zauberwort) oder brücke(zurück)`;
let inFeste2 = `Du betritts die Feste und siehst einen Anblick wie nie zuvor in deinem Leben. Du erblickst hübsche Prinzessinen mit hinreißenden Kleidern und Lords mit Bäuchen so dick wie Fässern. Zwei umwerfend aussehende Frauen kamen auf dich zu. Wilsst du reden oder weglaufen? Gib ein redeFrauen oder weglaufen.`;
let redeFrauen = `Die Frauen laden dich ein mit Ihnen tanzen zu gehen. Nimmst du an? Gib ein ja oder nein.`;
let nein = `Die Frauen gehen weg und du stehst allein in der Feste. GameOver!`;
let ja = `Du gehst in eine bäuerliche Bar. Sie ist voller Bauern die saufen. Du trinkst mit und hast viel Spaß mit den Frauen. hre Männer kommen vorbei und wollen das du gehst. Gehst du? Gib ein gehen oder nichtgehen`;
let nichtgehen = `Es startet ein Kampf. Gib ein barkampf`;
let barkampf = `Es startet eine riesige Schlägerei. Meschen sterben und du bist der erste der stirbst. GameOver!`
let gehen = feste;
let weglaufen = feste;

if(userInputArr[0] === `start`){
    console.log(start);
}


if(userInputArr[0] === `weg`){
    console.log(weg);
}

if(userInputArr[0] === `weg` && userInputArr[1] === `reden`){
    console.log(redeMann);
}


if(userInputArr[0] === `wald`){
    console.log(wald);
}

if(userInputArr[0] === `wald2`){
    console.log(wald2);
}


if(userInputArr[0] === `waldKampf`){
    console.log(waldKampf);
}

if(userInputArr[0] === `geben`){
    console.log(geben);
}

if(userInputArr[0] === `waldFlucht`){
    console.log(waldFlucht);
}

if(userInputArr[0] === `hexenhaus`){
    console.log(hexenhaus);
}


if(userInputArr[0] === `keller`){
    console.log(keller);
}

if(userInputArr[0] === `retteKinder`){
    console.log(retteKinder);
}

if(userInputArr[0] === `ende1`){
    console.log(ende1);
}

if(userInputArr[0] === `weghier`){
    console.log(weghier);
}


if(userInputArr[0] === `verstecken`){
    console.log(verstecken);
}

if(userInputArr[0] === `weiterlaufen`){
    console.log(weiterlaufen);
}

if(userInputArr[0] === `schneller`){
    console.log(schneller);
}

if(userInputArr[0] === `brücke`){
    console.log(brücke);
}

if(userInputArr[0] === `brücke` && userInputArr[1] === `reden`){
    console.log(redeJunge);
}

if(userInputArr[0] === `brücke` && userInputArr[1] === `reden2`){
    console.log(redeJunge2);
}

if(userInputArr[0] === `brücke` && userInputArr[1] === `reden3`){
    console.log(redeJunge3);
}

if(userInputArr[0] === `feste`){
    console.log(feste);
}


if(userInputArr[0] === `feste` && userInputArr[1] === `reden`){
    console.log(redeSoldat);
}

if(userInputArr[0] === `inFeste`){
    console.log(inFeste1);
}

if(userInputArr[0] === `inFeste` && userInputArr[1] === `trommel`){
    console.log(inFeste2);
}

if(userInputArr[0] === `inFeste` && userInputArr[1] === `reden`){
    console.log(redeFrauen);
}

if(userInputArr[0] === `nein`){
    console.log(nein);
}


if(userInputArr[0] === `ja`){
    console.log(ja);
}

if(userInputArr[0] === `nichtgehen`){
    console.log(nichtgehen);
}

if(userInputArr[0] === `barkampf`){
    console.log(barkampf);
}

if(userInputArr[0] === `gehen`){
    console.log(gehen);
}

if(userInputArr[0] === `weglaufen`){
    console.log(weglaufen);
}



