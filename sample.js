function findMissingLetter(array)
{
  let first = array[0].charCodeAt();
  let last = array[array.length-1].charCodeAt();
  let found ;
  for(let i = first,j=0; j<=array.length-1;i++,j++){

    if((array[j+1] && array[j].charCodeAt()+1 !== array[j+1].charCodeAt())){
       found = i+1;
    } 
  }
	return String.fromCharCode(found);
}

function findMissingLetter(array)
{
  let found;
  for(let i = 0; i<=array.length-1;i++){
    if(array[i+1] && array[i].charCodeAt()-array[i+1].charCodeAt() !== 1) {
       found = array[i].charCodeAt() +1;
    } 
  }
	return String.fromCharCode(found)
}

function findMissingLetter(array)
{
  let first = array[0].charCodeAt();
  let last = array[array.length-1].charCodeAt();
  let found ;
  for(let i = first; i<=last;i++){
    if(!array.includes(String.fromCharCode(i))) {
       found = i
    } 
  }
	return String.fromCharCode(found)
}

function isogram(){
var cont=[];
a.forEach((d)=>{
     if(!(cont.includes(d))) {
        cont.push(d);
     } else {
        console.log('not isoGram');
     }
});
}

//SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
function SeriesSum(n)
{
  let j = 0,inc = 1;
	for(let i=0;i<n;i++) {
		j = i===0? 1 : j + (1/inc);
		inc = inc + 3;
	}
	return j.toFixed(2);
}
