class Person{
    private id: string;
    private name: string;
    private vorname: string;
    private mail: string;
    private telefon: number;
    private saite: string;
    private dauer: string;
    private abgabe: string;
    private bespannungLängs: number;
    private bespannungQuer: number;
    private preis: number;

    constructor(id: string, name: string, vorname: string, mail: string, telefon: number, saite: string, dauer: string, abgabe: string, bespannungLängs: number, bespannungQuer: number, preis: number) {
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
}
var allData;
let vollPreis: number;
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
   if ((<HTMLInputElement> document.getElementById("pSaite")).value === "Luxilon Adrenaline Century"){
       vollPreis = 0;
       vollPreis += 30;
   }
    if ((<HTMLInputElement> document.getElementById("pSaite")).value === "Babolat RPM Blast") {
        vollPreis = 0;
        vollPreis += 35;
    }
    if ((<HTMLInputElement> document.getElementById("pSaite")).value === "eigene") {
        vollPreis = 0;
        vollPreis += 20;
    }
    if ((<HTMLInputElement> document.getElementById("pDauer")).value === "2 Tage") {
        vollPreis += 10;
    }
    if ((<HTMLInputElement> document.getElementById("pDauer")).value === "5 Tage") {
        vollPreis += 5;
    }
    (<HTMLInputElement>document.getElementById("preisOutput")).value = vollPreis.toString() + "Fr."
}

function savePerson(evt){

    console.log("hallo")
    let id: string = null
    let strMethod: string = "POST";
    let data: Person = null;
    const url: string = "http://localhost:8080/person/post";


    data = new Person(id,
        (<HTMLInputElement>document.getElementById("pNachname")).value,
    (<HTMLInputElement> document.getElementById("pVorname")).value,
    (<HTMLInputElement> document.getElementById("pEmail")).value,
    Number((<HTMLInputElement>document.getElementById("pTelefon")).value),
    (<HTMLInputElement> document.getElementById("pSaite")).value,
    ((<HTMLInputElement>document.getElementById("pDauer")).value),
    ((<HTMLInputElement>document.getElementById("pAbgabe")).value),
    Number((<HTMLInputElement>document.getElementById("pBlängs")).value),
    Number((<HTMLInputElement>document.getElementById("pBquer")).value),
        vollPreis
    );

    let data3 = new Person ("","","","",null,"",null,
      "",null,null,null)

if ((<HTMLInputElement>document.getElementById("pNachname")).value === "" ||
    (<HTMLInputElement>document.getElementById("pVorname")).value === "" ||
    (<HTMLInputElement>document.getElementById("pEmail")).value === "" ){
    alert("Bitte füllen Sie alle Daten aus");
    evt.preventDefault()
} else {

    fetch(url, {method: strMethod, headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)})
        .then(response => response.json())
        .then(obj => savePersonCallback(obj))
        .catch(error => console.log(error));
}
}

function savePersonCallback(obj){
    let data: Person = obj;
    if(data === null){
        alert("Fehler!");
    }
    else{
    }
    console.log("savePersonCallback");
}