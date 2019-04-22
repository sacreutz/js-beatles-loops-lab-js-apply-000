// add solution here
function theBeatlesPlay(musicians, instruments){
  let newArray = []
  
  for (let i = 0; i < musicians.length; i++){
    let string = musicians[i] + ' plays ' + instruments[i];
    newArray.push(string)
  }
  return newArray; 
}