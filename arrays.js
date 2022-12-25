function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  
  function eightBall() {
      const fortunes = ["Evet, kesinlikle!", "Emin olabilirsin.", "Hiç şüphesiz", "Büyük ihtimalle", "hmm. bilemedim!", "offf. hayır!", "tekrar dene", "hiç sanmam."];
      var fortune = fortunes[getRandomInt(0,7)];
      console.log(fortune)
  }

  eightBall()