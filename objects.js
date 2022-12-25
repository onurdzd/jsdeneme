const user = {
    username: 'ali.can',
    password: 'abc123',
    lovesJavascript: true,
    favoriteNumber: 25,
  };
  const passString = 'password'; //passString user objesinin içindeki password olmuş oldu
  user['lovesJavascript']; // true user.lovesJavascript ile aynı şey
  user['username'];        // ali.can user.username ile aynı şey
  console.log(user[passString]); // abc123 user.passString ile aynı şey


  const newUser = {
	isNew: true,
}
const loveJSString = 'lovesJavascript'; //user objesinden lovesJavascript: true, değerini aldı
newUser.username = 'new.username'; //newUser objesine ekleme yapıyor
newUser['password'] = '12345'; //newUser objesin ekleme yapıyor
newUser[loveJSString] = true; //newUser objesine user objesinden ekleme yapıyor
console.log(newUser)

delete newUser.password //newUser objesinin içinden password sildi
console.log(newUser)

const kaplan = {
    Alem:"Animalia",
    Sube:	"Chordata",
    Takım	:"Carnivora",
    Familya:	"Felidae",
    Genus	:"Pantherinae",
    Speciea: "P.Tigris",
    Sınıf	:"Mammalia"
}

console.log(kaplan)
kaplan.conservationStatus = 'vulnerable';
console.log(kaplan)
console.log(Object.keys(kaplan)) //kaplan içerisindeki başlıkları verir (8) ['Alem', 'Sube', 'Takım', 'Familya', 'Genus', 'Speciea', 'Sınıf', 'conservationStatus']
console.log(Object.values(kaplan)) //kaplan içerisindeki başlık içerisindeki değerleri verir (8) ['Animalia', 'Chordata', 'Carnivora', 'Felidae', 'Pantherinae', 'P.Tigris', 'Mammalia', 'vulnerable']
console.log(Object.entries(kaplan)) //kaplan içerisindeki başlıkları değerleriyle birlikte dizi olarak döndürerek verir (8) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]


const student = { ad: 'Ali', yas: '22', cinsiyet: 'E', rol: 'ogrenci' };
console.log(Object.entries(student))
student.characters=['Ayşe', 'Anne', 'Baba', 'Galip', 'Ahmet']
console.log(student.characters)

for(var i = 0 ; i<5 ; i++){
  console.log(student.characters[i])
}