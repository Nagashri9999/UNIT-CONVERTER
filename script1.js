function celsius(){
  var cel=parseInt(document.getElementById("num1").value);
   if(!isNaN(cel)){
        var tocelsius=(cel-32)*5/9;
      document.getElementById('res').value=tocelsius;
      return false;
    
  }else{
     alert("enter value");
    return true;
  }
} 
function reset(){
document.getElementById('res').remove;

}
