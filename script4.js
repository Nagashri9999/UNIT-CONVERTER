function meter(){
    var mt=parseFloat(document.getElementById("num1").value);
     if(!isNaN(mt)){
          var tofeet=mt*3.28;
        document.getElementById('res').value=tofeet;
        return false;
      
    }else{
       alert("enter value");
      return true;
    }
} 
function reset(){
 document.getElementById('res').remove;
 
}
