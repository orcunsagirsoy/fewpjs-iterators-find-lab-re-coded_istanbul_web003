const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array){

  const winResult = array.find( result => result.result === 'W' );
    console.log(winResult);

    if(winResult !== undefined){
      return winResult.year

    }else{
    return winResult
  }
}