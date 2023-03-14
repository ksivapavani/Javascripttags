function fun()
{
    var colour=document.getElementById("col").value
 sessionStorage.setItem("Colour:",colour)
 sessionStorage.setItem("First Name:","Shiva")
sessionStorage.setItem("Last Name:","Shakthi")
}
function getData()
{
    var fn=sessionStorage.getItem("First Name:")
    var ln=sessionStorage.getItem("Last Name:")
    var col=sessionStorage.getItem("Colour:")
    document.getElementById("a").innerHTML=fn
    document.getElementById("b").innerHTML=ln
 document.getElementById("a").style.color=col
 document.getElementById("b").style.color=col
}