"use strict";
window.onload = function countrySearch(){
    var query = document.getElementById("country").value;
    var httprequest = new XMLHttpRequest();

    document.getElementById("lookup").addEventListener("click", function{
        httprequest.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById("result").innerHTML = this.responseText;
            alert(this.responseText.replace(/<\/?[^>]+(>|$)/g, " ")); 
        }
    };
    
    if (document.getElementById('allChkBox').checked)
    {
        var url = "world.php?all=true";
    }
    else
    {
        var url = "world.php?country="+query;
    }

    });
    
    
    httprequest.open("GET",url,true);
    httprequest.send("");
}