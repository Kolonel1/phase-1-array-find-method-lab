
    
const record = [
    {year:'2015',result:'W'},
    {year:'2014',result:'N/A'},
    {year:'2013',result:'L'}]
    


function superbowlWin(array){
 let result = array.find((object)=>object.result ==='W')
 if(result === undefined){
  return undefined
 }else{
 return result.year}
}
    // what is the difference between returning then console logging the result
    // later on and console logging the result instead of returning it


  console.log(superbowlWin(record))

   //this is not possible
   