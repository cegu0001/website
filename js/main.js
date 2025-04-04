document.querySelector("#headCircle").addEventListener("click", headInfo);
function headInfo() {
  console.log("headInfo");

  document.querySelector(".info-text > h2").textContent = "Opførsel";

  document.querySelector(".info-text > article > p").textContent =
    "En kvinde, der stiller for mange spørgsmål eller virker klogere, end hun burde være, er mistænkelig. Hvis hun går alene om natten, taler med dyr, eller – Gud forbyde det – virker uinteresseret i mandens autoritet, er der stor sandsynlighed for, at hun er en heks. Hvis hun griner på de forkerte tidspunkter eller virker alt for rolig, når hun bliver anklaget, så er det næsten en garanti!";
}
document.querySelector("#neckCircle").addEventListener("click", neckInfo);
function neckInfo() {
  console.log("neckInfo");

  document.querySelector(".info-text > h2").textContent = "Beklædning";

  document.querySelector(".info-text > article > p").textContent =
    "Enhver kvinde, der ikke klæder sig beskedent og enkelt, må naturligvis skjule noget. Hvis hun bærer sort for ofte, kan hun være i pagt med mørke kræfter. Hvis hendes kjoler har mistænkelige mønstre eller broderier, kan det være skjulte besværgelser. Og hvis hun ikke går med kors? Utvivlsomt en heks!";
}
document.querySelector("#handsCircle").addEventListener("click", handsInfo);
function handsInfo() {
  console.log("handsInfo");

  document.querySelector(".info-text > h2").textContent = "Tilbehør";

  document.querySelector(".info-text > article > p").textContent =
    "Har hun en lille pose med urter? Forbandelse! En sort kat? Djævlens tjener! En sær sten eller et smykke med mærkelige symboler? Det er hekseri! Hvis hun bærer en bog, hun ikke burde forstå, må det være en trolddomsbog. Og hvis hun pludselig har penge eller gaver uden en mand til at give dem til hende? Magi!";
}
