function hour(){
    var hr=parseFloat(document.getElementById("num1").value);
     if(!isNaN(hr)){
          var tosec=hr*3600;
        document.getElementById('res').value=tosec;
        return false;
      
    }else{
       alert("enter value");
      return true;
    }
} 
function reset(){
 document.getElementById('res').remove;
 
}
