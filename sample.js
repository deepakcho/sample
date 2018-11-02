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


function towerBuilder(nFloors) {
   var tower=[];
  
  var totalStars=nFloors+nFloors-1;
  var spaces=~~(totalStars/2);
  var addCharactor =(n,char)=>{
    let str='';
    for(let j=0;j<n;j++) {
      str=str+char;
    }
    return str;
  };
  for(let i=0;i<nFloors;i++) {
     tower.push(addCharactor((spaces-1),' ')+addCharactor((totalStars-(spaces*2))+1,'*')+addCharactor((spaces-1),' '));
spaces--;
  }
  return tower
  
}

function solution(number){
var sum=0;
for(let i=0;i<number;i++)
  sum=((i%3)==0 || (i%5)==0) ? sum+i:sum;
  return sum;
}

function decrypt(encryptedText, n) {
let output = encryptedText;
  for(i=0;i<n;i++){
    let textArr= output.split('');
    let first= textArr.slice(0,~~(textArr.length/2));
    let last = textArr.slice(~~(textArr.length/2));
    let str ='';
	let flag=true;
    for(let i=0,j=1;i<textArr.length;i++,j++) {
		 if(last.length >i){
			str = str + textArr[first.length+i] +  textArr[i];
			if(str.length > textArr.length && textArr.length%2!==0){
				let arr = str.split('');
				arr.length = arr.length-1;
				str = arr.join('');
			}
		 } else {
			break;
			}
    }
    console.log(str);
    output = str;
  }
return output;
}

function encrypt(text, n) {
  let textArr= text.split('');
  return result = textArr.filter((d,i)=> {if(i%2!==0) return d}).join('') + textArr.filter((d,i)=> {if(i%2==0) return d}).join('');
}
