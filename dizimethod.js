const justiceLeague = ['Harley', 'Batman', 'Wonder Woman', 'Flash', 'Aquaman'];

justiceLeague.shift()
justiceLeague.push("Dead Shot")
justiceLeague.unshift("Superman")
console.log(justiceLeague)


const middleEarth = ['Frodo', 'Samwise', 'Gandalf', 'Sauraman', 'Treebeard'];

middleEarth.splice(3,1) //dizinin 3. elemanından başlayak 1 tane eleman sil
console.log(middleEarth)
middleEarth.splice(2,1,"erk") //dizinin 2. sıraki elemanından başlayarak 1 tane eleman silip "erk" i buraya yerleştiriyor.
console.log(middleEarth)
middleEarth.splice(3,0,"dizdar") //dizinin 3. sıraki elemanından başlayarak 0 tane eleman silip "dizdar" i buraya yerleştiriyor.
console.log(middleEarth)

const numbers = [2, 3, 4, 5, 6];
const yeninumber=numbers.map((items)=>items*10)
console.log(yeninumber)

const friends = [
    { name: 'Monica', gender: 'F' },
    { name: 'Chandler', gender: 'M' },
    { name: 'Ross', gender: 'M' },
    { name: 'Phoebe', gender: 'F' },
    { name: 'Joey', gender: 'M' },
    { name: 'Rachel', gender: 'M' }
  ];
  const femaleFriends = friends.filter(e=>e.gender==="F")
  const male = friends.filter(e=> e.gender === "M")
  console.log(femaleFriends , male)