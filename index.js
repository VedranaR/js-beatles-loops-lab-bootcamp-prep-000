const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for(let i=0; i < (musicians.length); i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}



function johnLennonFacts(facts) {
  var newArray = [];
  var i = 0;
  while (i < facts.length) {
    newArray.push(facts[i] + "!!!");
    i++;
  }
  return newArray;
}