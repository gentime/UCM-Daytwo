function yourmom(){
    var area = document.getElementById('area').value;
   
    var rad = document.getElementById('rad').innerHTML =  parseInt(area) * parseInt(area) * Math.PI;
    alert(rad);
}
function yourdad(){
    var cir = document.getElementById('cir').value;
    alert(cir);
    var rad = document.getElementById('rad').innerHTML =  2 * parseInt(cir) * Math.PI;
    alert(rad);
};