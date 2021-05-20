$(document).ready(function()
{
    $.getJSON('./model/data.json', function(jsonObj)
    {
        //Home page main content
        $('#titleHome').html('<h2>' + jsonObj.pageTextData[0].title + '</h2>');
        $('#subTitleHome').html('<h3>' + jsonObj.pageTextData[0].subTitle + '</h3>');
        $('#descriptionHome').html('<p>' + jsonObj.pageTextData[0].description + '</p>');

        //Home page Coca Cola
        $('#titleCoke').html('<h3>' + jsonObj.pageTextData[1].title + '</h3>');
        $('#subTitleCoke').html('<h4>' + jsonObj.pageTextData[1].subTitle + '</h4>');
        $('#descriptionCoke').html('<p>' + jsonObj.pageTextData[1].description + '</p>');
        $('#linkCoke').html('<a href="' + jsonObj.pageTextData[1].link + '" class="btn btn-primary">Find out more...</a>');
        $('#imageCoke').html('<img class="card-img-top img-fluid img thumbnail" src="' + jsonObj.pageTextData[1].image + '" alt="Coca Cola">');

        //Home page Roses
        $('#titleRoses').html('<h3>' + jsonObj.pageTextData[2].title + '</h3>');
        $('#subTitleRoses').html('<h4>' + jsonObj.pageTextData[2].subTitle + '</h4>');
        $('#descriptionRoses').html('<p>' + jsonObj.pageTextData[2].description + '</p>');
        $('#linkRoses').html('<a href="' + jsonObj.pageTextData[2].link + '" class="btn btn-primary">Find out more...</a>');
        $('#imageRoses').html('<img class="card-img-top img-fluid img thumbnail" src="' + jsonObj.pageTextData[2].image + '" alt="Roses">');

        //Home page Appletiser
        $('#titleAppletiser').html('<h3>' + jsonObj.pageTextData[3].title + '</h3>');
        $('#subTitleAppletiser').html('<h4>' + jsonObj.pageTextData[3].subTitle + '</h4>');
        $('#descriptionAppletiser').html('<p>' + jsonObj.pageTextData[3].description + '</p>');
        $('#linkAppletiser').html('<a href="' + jsonObj.pageTextData[3].link + '" class="btn btn-primary">Find out more...</a>');
        $('#imageAppletiser').html('<img class="card-img-top img-fluid img thumbnail" src="' + jsonObj.pageTextData[3].image + '" alt="Appletiser">');

        //3D page Coca Cola
        $('#3DmodelTitleCoke').html('<h2>' + jsonObj.pageTextData[4].x3dModelTitle + '</h2>');
        $('#3DmodelMethodCoke').html('<p>' + jsonObj.pageTextData[4].x3dCreationMethod + '</p>');
        $('#3DtitleCoke').html('<h3>' + jsonObj.pageTextData[4].title + '</h3>');
        $('#3DsubTitleCoke').html('<h4>' + jsonObj.pageTextData[4].subTitle + '</h4>');
        $('#3DdescriptionCoke').html('<p>' + jsonObj.pageTextData[4].description + '</p>');
        $('#3DlinkCoke').html('<a href="' + jsonObj.pageTextData[4].link + '" class="btn btn-primary">Find out more...</a>');
        $('#3DmodelCoke').html('<inline url="' + jsonObj.pageTextData[4].model + '"></inline>');

        //3D page Roses
        $('#3DmodelTitleRoses').html('<h2>' + jsonObj.pageTextData[5].x3dModelTitle + '</h2>');
        $('#3DmodelMethodRoses').html('<p>' + jsonObj.pageTextData[5].x3dCreationMethod + '</p>');
        $('#3DtitleRoses').html('<h3>' + jsonObj.pageTextData[5].title + '</h3>');
        $('#3DsubTitleRoses').html('<h4>' + jsonObj.pageTextData[5].subTitle + '</h4>');
        $('#3DdescriptionRoses').html('<p>' + jsonObj.pageTextData[5].description + '</p>');
        $('#3DlinkRoses').html('<a href="' + jsonObj.pageTextData[5].link + '" class="btn btn-primary">Find out more...</a>');
        $('#3DmodelRoses').html('<X3DCanvas id="browser" class="browser" src="' + jsonObj.pageTextData[6].model + '" id="canvas" style="width: 100%; height: 100%;"><p>Your browser may not support all features required by X_ITE.</p></X3DCanvas>');

        //3D page Appletiser
        $('#3DmodelTitleAppletiser').html('<h2>' + jsonObj.pageTextData[6].x3dModelTitle + '</h2>');
        $('#3DmodelMethodAppletiser').html('<p>' + jsonObj.pageTextData[6].x3dCreationMethod + '</p>');
        $('#3DtitleAppletiser').html('<h3>' + jsonObj.pageTextData[6].title + '</h3>');
        $('#3DsubTitleAppletiser').html('<h4>' + jsonObj.pageTextData[6].subTitle + '</h4>');
        $('#3DdescriptionAppletiser').html('<p>' + jsonObj.pageTextData[6].description + '</p>');
        $('#3DlinkAppletiser').html('<a href="' + jsonObj.pageTextData[6].link + '" class="btn btn-primary">Find out more...</a>');
        $('#3DmodelAppletiser').html('<X3DCanvas id="browser" class="browser" src="' + jsonObj.pageTextData[6].model + '" id="canvas" style="width: 100%; height: 100%;"><p>Your browser may not support all features required by X_ITE.</p></X3DCanvas>');

        //Gallery
        $('#galleryTitle').html('<h4>' + jsonObj.pageTextData[7].galleryTitle + '</h4>');
        $('#galleryDescription').html('<p>' + jsonObj.pageTextData[7].galleryDescription + '</p>');

        //Interaction
        $('#interactionTitle').html('<h4>' + jsonObj.pageTextData[8].interactionTitle + '</h4>');
        $('#interactionDescription').html('<p>' + jsonObj.pageTextData[8].interactionDescription + '</p>');
    });
});
