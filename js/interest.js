// titleCat 클릭 후 숨김 -> catsImg
$(document).ready(function() {
    $('.titleCat').show();
    $('.cats').hide();

    $('.titleCat').click(function() {
        $(".titleCat").css('font-size', '8rem');
        $(".titleCat").css('height', '0px');
        $(".cats").show();
            return;
    });
});

    