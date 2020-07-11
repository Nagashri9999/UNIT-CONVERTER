function kilogram(){
    var kg=parseFloat(document.getElementById("num1").value);
     if(!isNaN(kg)){
          var tograms=kg*1000;
        document.getElementById('res').value=tograms;
        return false;
      
    }else{
       alert("enter value");
      return true;
    }
} 
function reset(){
 document.getElementById('res').remove;
 
}
