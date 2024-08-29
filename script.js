//Øvelse 1

//Øvelse 2

//Øvelse 3
document.querySelector("button").addEventListener("click", tjekTal);

let forsoeg = 0;
//let er en variabel
//Variabel starter på nul før man begynder at klikke
const ranNum = Math.floor(Math.random() * 11);
//const er en konstant. Math Random vælger et random tal mellem 0 og 11

function tjekTal() {
  forsoeg++;
  //Der lægges til et nummer hver gang man klikker
  const brugerTal = document.querySelector("#tal").value;
  //Query selector = vælger
  //document er dokumentet

  if (ranNum > brugerTal) {
    alert("Øv!" + brugerTal + " var for lavt. Prøv igen :)");
  } else if (ranNum < brugerTal) {
    alert("Øv! " + brugerTal + " var for højt. Prøv igen :)");
  } else {
    alert(
      brugerTal +
        " er rigtigt!" +
        " Du brugte " +
        forsoeg +
        " forsøg. Prøv igen med et nyt tal :)"
    );
    location.reload();
  }
}
