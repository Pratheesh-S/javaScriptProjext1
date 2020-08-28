window.onload = function()
{
        var nameEle=document.getElementById("name");
var emailEle=document.getElementById("mail");
var buttEle=document.getElementById("submit");
var myForm=document.getElementById("form");
myForm.addEventListener("submit",function(e)
{
        e.preventDefault();
        var name=nameEle.value;
        var email=emailEle.value;
        var pName=document.getElementById("pName");
        var eName=document.getElementById("eName");
        pName.textContent=name;
        eName.textContent=email;
})

}
