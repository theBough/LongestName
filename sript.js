const names = ["Toopy", "Binoo","Patchy Patch","Fred","Barney","Wilma"];
const namesTwo = ["pheneas","Ferb", "Perry","Candace","Dr Heins Doofenschmitz"]
let max = 0;

//gets an array
//returns the longes String
function getLongest(arrName){
  let longestName;
  for(i = 0; i<arrName.length;i++ ){
      if(arrName[i].length > max){
        //found a NEW max
        max = arrName[i].length;
        longestName = arrName[i];
      }//end if
  }//end loop
  return longestName;
}
console.log(getLongest(namesTwo));
