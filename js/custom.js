//General functions
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});

function swap(selected)
{
    document.getElementById('home').style.display = 'none';
    document.getElementById('submission').style.display = 'none';
    document.getElementById('coke').style.display = 'none';
    document.getElementById('roses').style.display = 'none';
    document.getElementById('appletiser').style.display = 'none';
    document.getElementById(selected).style.display = 'block';

    switch (selected)
    {
        case 'home':
            restyle('#760003', '#ffffff', '#f1f8fe', '#000000', '#ff0000', '#ffffff');
            break;
        case 'submission':
            restyle('#760003', '#ffffff', '#f1f8fe', '#000000', '#ff0000', '#ffffff');
            break;
        case 'coke':
            restyle('#ff0000', '#ffffff', '#e6e6e6', '#000000', '#ffffff', '#000000');
            break;
        case 'roses':
            restyle('#044323', '#ffffff', '#3b7812', '#ffffff', '#55bd00', '#ffffff');
            break;
        case 'appletiser':
            restyle('#ffffff', '#000000', '#55bd00', '#000000', '#d4ff00', '#000000');
            break;
    }
}

function restyle(primary, primaryText, secondary, secondaryText, highlight, highlightText)
{
    const style = document.createElement('style');

    document.head.appendChild(style);

    style.sheet.insertRule(
        '.navbar_coca_cola {' +
        'background-color: ' + primary + ';' +
        'color: ' + primaryText + ';' +
        '}'
    );

    style.sheet.insertRule(
        '.navbar_coca_cola:hover {' +
        'color: ' + highlight + ';' +
        '}'
    );

    style.sheet.insertRule(
        '.navbar-brand {' +
        'color: ' + primaryText + ';' +
        '}'
    );

    style.sheet.insertRule(
        '.navbar-brand:hover {' +
        'color: ' + highlight + ';' +
        '}'
    );

    style.sheet.insertRule(
        '.navbar-nav .nav-link {' +
        'color: ' + primaryText + ';' +
        '}'
    );

    style.sheet.insertRule(
        '.navbar-nav:hover .nav-link:hover {' +
        'color: ' + highlight + ';' +
        '}'
    );

    style.sheet.insertRule(
        '.navbar_coca_cola .navbar-nav .nav-item > .active,' +
        '.navbar_coca_cola .navbar-nav > .active > a:hover,' +
        '.navbar_coca_cola .navbar-nav > .active > a:focus {' +
        'color: ' + highlightText + ';' +
        'background-color: ' + highlight + ';' +
        '}'
    );

    style.sheet.insertRule(
        '.dropdown-menu {' +
        'background-color: ' + primary + ';' +
        '}'
    );

    style.sheet.insertRule(
        '.dropdown-menu .dropdown-item {' +
        'color: ' + primaryText + ';' +
        '}'
    );

    style.sheet.insertRule(
        '.dropdown-menu .dropdown-item:hover {' +
        'background-color: ' + highlight + ';' +
        'color: ' + highlightText + ';' +
        '}'
    );

    style.sheet.insertRule(
        'body {' +
        'background-color: ' + secondary + ';' +
        'color: ' + secondaryText + ';' +
        '}'
    );

    style.sheet.insertRule(
        '.card {' +
        'background-color: ' + highlight + ';' +
        'color: ' + highlightText + ';' +
        '}'
    );

    style.sheet.insertRule(
        '.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {' +
        'color: ' + primaryText + ';' +
        'background-color: ' + primary + ';' +
        '}'
    );

    style.sheet.insertRule(
        '.nav-tabs .nav-link {' +
        'color: ' + secondaryText + ';' +
        '}'
    );

    style.sheet.insertRule(
        '.nav-tabs .nav-link:hover {' +
        'color: ' + highlight + ';' +
        '}'
    );

    style.sheet.insertRule(
        '.footer {' +
        'background-color: ' + primary + ';' +
        'color: ' + primaryText + ';' +
        '}'
    );

    style.sheet.insertRule(
        '.navbar-text > p {' +
        'color: ' + primaryText + ';' +
        '}'
    );
}

//X_ITE
X3D (function ()
{
	var Browser = X3D .getBrowser ("#browser");

	$(".version") .text (Browser .name + " X3D Browser - Version " + Browser .version);

	$(function ()
	{
		var scrollId;

		$(".console-button") .click (function ()
		{
			var clicked = false;

			function updateScroll ()
			{
				if (clicked)
					return;

				var element = $(".x_ite-console");

				element .scrollTop ($(".x_ite-console") .prop ("scrollHeight"));
			}

			var hidden = ($(".x_ite-console") .css ("display") == "none");

			if (hidden)
				scrollId = setInterval (updateScroll, 200);
			else
				clearInterval (scrollId);

			$(".x_ite-console") .click (function () { clicked = true; });

			$(".x_ite-console") .css ("display", hidden ? "block" : "none");

			return false;
		});

		$(".clock-button") .click (function ()
		{
			Browser .getBrowserTimings () .setEnabled (! Browser .getBrowserTimings () .getEnabled ());

			return false;
		});

		$(".fullscreen-button") .click (function ()
		{
			$("#browser") .fullScreen (true);

			return false;
		});
	});
},
function (error)
{
	console .error ("Please forgive me, your browser may not support all features required by X_ITE!");
	console .error (error);
});


//X3D
var capOn = true;
var lightsOn = true;

function cameraDefault()
{
    document.getElementById('CA_Cam_default').setAttribute('bind', 'true');
}

function cameraFront()
{
    document.getElementById('CA_Cam_front').setAttribute('bind', 'true');
}

function cameraBack()
{
    document.getElementById('CA_Cam_back').setAttribute('bind', 'true');
}

function cameraLeft()
{
    document.getElementById('CA_Cam_left').setAttribute('bind', 'true');
}

function cameraRight()
{
    document.getElementById('CA_Cam_right').setAttribute('bind', 'true');
}

function cameraTop()
{
    document.getElementById('CA_Cam_top').setAttribute('bind', 'true');
}

function lighting()
{

}

function open()
{

}
