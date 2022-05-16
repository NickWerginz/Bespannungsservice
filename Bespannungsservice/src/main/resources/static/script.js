var Person = /** @class */ (function () {
    function Person(id, name, vorname, mail, telefon, saite, bespannungshärte, dauer, beseitungsbild, abgabe) {
        this.id = id;
        this.name = name;
        this.vorname = vorname;
        this.mail = mail;
        this.telefon = telefon;
        this.saite = saite;
        this.bespannungshärte = bespannungshärte;
        this.dauer = dauer;
        this.beseitungsbild = beseitungsbild;
        this.abgabe = abgabe;
    }
    return Person;
}());
var allData;
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
function savePerson(evt) {
    console.log("hallo");
    evt.preventDefault();
    console.log("changePerson");
    var id = null;
    var strMethod = "POST";
    var data = null;
    var url = "http://localhost:8080/person/post";
    data = new Person(id, document.getElementById("pVorname").value, document.getElementById("pNachname").value, document.getElementById("pEmail").value, Number(document.getElementById("pTelefon").value), document.getElementById("pSaite").value, Number(document.getElementById("pBlängs").value), Number(document.getElementById("pBquer").value), Number(document.getElementById("pDauer").value), document.getElementById("pAbgabe").value);
    fetch(url, { method: strMethod, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
        .then(function (response) { return response.json(); })
        .then(function (obj) { return savePersonCallback(obj); })
        .catch(function (error) { return console.log(error); });
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
