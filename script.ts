
class Locations { 
   locName: string ;
   locAddress: string ;
   locZipCode: string ;
   locImage: string ;
       
constructor (locName, locAddress, locZipCode, locImage) { 
       this.locName = locName;
       this.locAddress = locAddress;
       this.locZipCode = locZipCode;
       this.locImage = locImage;
   }

     display(){ 
      return(`
        
          <div class="col-lg-6 col-md-6 places">
              <p class="h2 text-danger">Places</p>
              <p class="h4 text-monospace">${this.locName}</p>
              <ul>
                <li class="h6 text-monospace"> ${this.locAddress}, ${this.locZipCode}</li>
                <li> <img src="${this.locImage}"></li>
              <ul>
          </div>   
  `)}
 }

var arcDe = new Locations ("Arc De Triomphe", "Place Charles de Gaulle", "75008 Paris","img/arc.jpg");
// arcDe.display();
var charles = new Locations ("Charles bridge", "Karluv most 1", "110 00 Prague","img/charles.jpg");
// charles.display();

//extended class
class Restaurant extends Locations { 
   restaType: string ;
   webAddress: string ;
   restaPhone: string ;
   
          
constructor (locName, locAddress, locZipCode, locImage, restaType, webAddress, restaPhone) {
       super (locName, locAddress, locZipCode, locImage);
       this.restaType = restaType;
       this.webAddress = webAddress;
       this.restaPhone = restaPhone;
       }

     display(){ 
      return(`
        <div class="col-lg-6 col-md-6 food">
            <p class="h2 text-danger">Restaurants</p>
            <p class="h4 text-monospace">${this.locName}</p>
            <ul>
              <li class="h6 text-monospace"> ${this.locAddress}, ${this.locZipCode}, ${this.restaPhone}</li>
              <li class="h6 text-monospace"> ${this.webAddress}</li>
              <li> <img src="${this.locImage}"></li>
            <ul>
       </div>  
  `)}
 }

var zlatnoBurence = new Restaurant ("Zlatno Burence", "Geiselbergstraße 68", "1110 Vienna","img/burence.jpg", "serbian", "www.burence.com", "+43 660 2304595");
// zlatnoBurence.display();

var figl = new Restaurant ("Figlmuller", "Wollzeile 5", "1010 Vienna","img/figlm.jpg", "austrian", "www.figlmueller.at", "+43 1 512 61 77");
// figl.display();

// extended class1
class Events extends Locations { 
   eventDate: string ;
   eventTime: string ;
   ticketPrice: string;
          
constructor (locName, locAddress, locZipCode, locImage, eventDate, eventTime, ticketPrice) {
       super (locName, locAddress, locZipCode, locImage);
       this.eventDate = eventDate;
       this.eventTime = eventTime;
       this.ticketPrice = ticketPrice;
    }

     display(){ 
     return (`
        <div class="col-lg-6 col-md-6 games">
            <p class="h2 text-danger">Events</p>
            <p class="h4 text-monospace">${this.locName}</p>
            <ul>
              <li class="h6 text-monospace"> ${this.eventDate}, ${this.eventTime}</li>
              <li class="h6 text-monospace"> ${this.locAddress}, ${this.locZipCode}</li>
              <li class="h6 text-monospace"> ${this.ticketPrice}</li>
              <li> <img src="${this.locImage}"></li>
            <ul>
       </div>  
  `)}
 }

var psgZvezda = new Events ("PSG - FK Crvena Zvezda", "24 Rue du Commandant Guilbaud", "75781 Paris", "img/psg.jpg", "03.10.2018", "21:00", "€ 150");
// psgZvezda.display();

var trnava = new Events ("FC Spartak- FK Crvena Zvezda", "Športová 1", "917 01 Trnava", "img/trnava.jpg", "14.08.2018", "21:00", "€ 50");
// trnava.display();


var boring = document.getElementById('theo');
var locations = [arcDe,charles,zlatnoBurence,figl,psgZvezda,trnava];
 

  for (let i = 0; i <locations.length ; i++) { 
    // $(boring[i]).each(function(){locations[i].display()} //avoid each function, just for loop run. Inste
    //   )
    // }
        boring.innerHTML += locations[i].display();
}