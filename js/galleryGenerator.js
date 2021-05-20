var xmlHttp = new XMLHttpRequest ();
var htmlCode = "";
var response;

$(document).ready(function()
{
    var send = "php/hook.php";
    xmlHttp.open("GET", send, true);
    xmlHttp.send(null);
    xmlHttp.onreadystatechange = function()
    {
        if (xmlHttp.readyState == 4)
        {
            response = xmlHttp.responseText.split("~");
            htmlCode += '<ol class="carousel-indicators">';
            for (var i = 0; i < response.length; i++)
            {
                htmlCode += '<li data-target="#gallery" data-slide-to="' + i + '"';
                if (i == 0)
                {
                    htmlCode += ' class="active"';
                }
                htmlCode += '></li>';
            }
            htmlCode += '</ol>';
            htmlCode += '<div class="carousel-inner">';
            for (var i = 0; i < response.length; i++)
            {
                htmlCode += '<div class="carousel-item img-thumbnail';
                if (i == 0)
                {
                    htmlCode += ' active';
                }
                htmlCode += '">';
                htmlCode += '<img src="images/' + response[i] + '">';
                htmlCode += '</div>'
            }
            htmlCode += '</div>';
            htmlCode += '<a class="carousel-control-prev" href="#gallery" data-slide="prev">';
            htmlCode += '<span class="carousel-control-prev-icon" aria-hidden="true"></span>';
            htmlCode += '<a class="carousel-control-next" href="#gallery" data-slide="next">';
            htmlCode += '<span class="carousel-control-next-icon" aria-hidden="true"></span>';
            document.getElementById('gallery').innerHTML = htmlCode;
        }
    }
});
