const school = "Workintech";
console.log(school.length);

const users = {
  username: "ali.can",
  password: "abc123",
  lovesJavascript: true,
  favoriteNumber: 25,
};

for (let a in users) {
  console.log(a); // başlıkları verir username password lovesJavascript favoriteNumber
  console.log(users[a]); //başlıkların karşılığındaki değerleri verir 'ali.can', 'abc123', true, 25
}

const greatWhiteShark = {
  Alem: "Animalia",
  Şube: "Chordata",
  Sınıf: "Mammalia",
  Takım: "Carnivora",
  myGenus: "Pantherinae",
  mySpecies: "P.Tigris",
  getScientificName: function () {
    scientificName = this.myGenus + " türünde " + this.mySpecies;
    return scientificName;
  },
};
console.log(greatWhiteShark.getScientificName());

const students = {
  ad: "Ali",
  yas: "22",
  cinsiyet: "E",
  rol: "ogrenci",
  greet: function () {
    const yeniOgrenci = "Benim adım " + this.ad + " " + this.yas + " yaşındayım";
    return yeniOgrenci;
  },
};
console.log(students.greet())