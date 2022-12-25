const tarif = (a, b, c) => {
  console.log(a + b + c);
};

tarif("un ", "su ", "tuz");

function logsPerson(isim, sehir, renk) {
  console.log(
    `Merhaba! Benim adım ${isim}, ve benim yaşadığım şehir ${sehir}. En sevdiğim renk ise ${renk}.` , "Merhaba /memleketim:" , sehir ,"/adım:", isim ,"/renk:", renk
  );
}

logsPerson("onur","antalya","siyah");


function para(repeat) {
    for (let i = 0; i < repeat; i++) {
      var yaziTura = Math.round(Math.random());
      if (yaziTura === 1) {
        console.log("Tura");
      }
      else {
        console.log("Yazı");
      }
  
    }
  }
  
  para(10);