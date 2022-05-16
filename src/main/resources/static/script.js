var Person = /** @class */ (function () {
    function Person(id, name, vorname, mail, telefon, saite, dauer, abgabe, bespannungLängs, bespannungQuer, preis) {
        this.id = id;
        this.name = name;
        this.vorname = vorname;
        this.mail = mail;
        this.telefon = telefon;
        this.saite = saite;
        this.dauer = dauer;
        this.abgabe = abgabe;
        this.bespannungLängs = bespannungLängs;
        this.bespannungQuer = bespannungQuer;
        this.preis = preis;
    }
    return Person;
}());
var allData;
var vollPreis;
vollPreis = 0;
// loadData(); //Daten sofort laden
//document.getElementById("btnDeletePerson").onclick = deletePerson;
/*function loadData(){
    console.log("loadData");
    let url: string = "http://localhost:8080/person/";
    fetch (url, {method:"GET"})
        .then(response => response.json())
        .then(obj => loadDataCallback(obj));
}

 */
/*function loadDataCallback(data){
    allData=data;

    console.log("loadDataCallback");
    let personenliste: HTMLElement = document.getElementById("personenliste");
    personenliste.innerHTML="";

    data.forEach(person => {
        let eintrag:HTMLLIElement = document.createElement("li");
        eintrag.innerHTML = person.anrede + " " +person.vorname + " "+person.nachname;
        eintrag.onclick=showPersonDialog;
        eintrag.setAttribute("data-id",person.id);
        personenliste.appendChild(eintrag);
    });

}

 */
/* function showPersonDialog(){
    let id: string = "";
    try{
        id = this.getAttribute("data-id");
    }catch(e){}

    if(id==""){
        //leerer Dialog
        (<HTMLInputElement>document.getElementById("btnDeletePerson")).style.display = "none";
        //showPersonDialogCallback(new Person("","","","","","",0,"",""))
    }
    else{
        //daten für Dialog laden
        let url: string = "http://localhost:8080/person/"+id;
        fetch (url, {method:"GET"})
            .then(response => response.json())
            .then(obj => showPersonDialogCallback(obj));
    }
}

 */
/* function showPersonDialogCallback(person) {
    (<HTMLInputElement>document.getElementById("pVorname")).value = person.id;
    (<HTMLInputElement> document.getElementById("pNachname")).value = person.anrede;
    (<HTMLInputElement> document.getElementById("pEmail")).value = person.vorname;
    (<HTMLInputElement> document.getElementById("pTelefon")).value = person.nachname;
    (<HTMLInputElement> document.getElementById("pSaite")).value = person.strasseNr;
    (<HTMLInputElement> document.getElementById("pBlängs")).value = person.plz;
    (<HTMLInputElement> document.getElementById("pBquer")).value = person.ort;
    (<HTMLInputElement> document.getElementById("pDauer")).value = person.email;
    (<HTMLInputElement> document.getElementById("pAbgabe")).value = person.geburtsdatum;

    if(person.id==""){
        (<HTMLInputElement> document.getElementById("personDialogTitel")).innerHTML = "Person erfassen";
    }
    else{
        (<HTMLInputElement> document.getElementById("personDialogTitel")).innerHTML = "Person bearbeiten";
    }
    (<HTMLDialogElement> document.getElementById("personDialog")).showModal();
}

function closePersonDialog() {
    (<HTMLDialogElement> document.getElementById("personDialog")).close();
}

 */
/*  function deletePerson(evt) {
  evt.preventDefault();
  let id: string = "";
  try{
      id = (<HTMLInputElement> document.getElementById("personId")).value;
  }catch(e){}

  console.log("deletePerson");
  let url: string = "http://localhost:8080/person/"+id;

  fetch (url,{method:"DELETE"})
      .then(response => response.json())
      .then(obj => savePersonCallback(obj));
}

 */
function preisBerechnen() {
    if (document.getElementById("pSaite").value === "Luxilon Adrenaline Century") {
        vollPreis = 0;
        vollPreis += 30;
    }
    if (document.getElementById("pSaite").value === "Babolat RPM Blast") {
        vollPreis = 0;
        vollPreis += 35;
    }
    if (document.getElementById("pSaite").value === "eigene") {
        vollPreis = 0;
        vollPreis += 20;
    }
    if (document.getElementById("pDauer").value === "2 Tage") {
        vollPreis += 10;
    }
    if (document.getElementById("pDauer").value === "5 Tage") {
        vollPreis += 5;
    }
    document.getElementById("preisOutput").value = vollPreis.toString() + "Fr.";
}
function savePerson(evt) {
    console.log("hallo");
    var id = null;
    var strMethod = "POST";
    var data = null;
    var url = "http://localhost:8080/person/post";
    data = new Person(id, document.getElementById("pNachname").value, document.getElementById("pVorname").value, document.getElementById("pEmail").value, Number(document.getElementById("pTelefon").value), document.getElementById("pSaite").value, (document.getElementById("pDauer").value), (document.getElementById("pAbgabe").value), Number(document.getElementById("pBlängs").value), Number(document.getElementById("pBquer").value), vollPreis);
    var data3 = new Person("", "", "", "", null, "", null, "", null, null, null);
    if (document.getElementById("pNachname").value === "" ||
        document.getElementById("pVorname").value === "" ||
        document.getElementById("pEmail").value === "") {
        alert("Bitte füllen Sie alle Daten aus");
        evt.preventDefault();
    }
    else {
        fetch(url, { method: strMethod, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
            .then(function (response) { return response.json(); })
            .then(function (obj) { return savePersonCallback(obj); })
            .catch(function (error) { return console.log(error); });
    }
}
function savePersonCallback(obj) {
    var data = obj;
    if (data === null) {
        alert("Fehler!");
    }
    else {
    }
    console.log("savePersonCallback");
}
