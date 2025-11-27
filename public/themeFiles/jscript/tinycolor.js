$(document).ready(function() {

    function calculateColorContrast(){
        let monocolor = $('.monocolor').css('background-color');

        if(tinycolor(monocolor).isLight()){
            $('.monocolor').css({'color':'#333'});
        }else{
            $('.monocolor').css({'color':'#fff'});
        }
    }
    calculateColorContrast();


    if($('.docPic').css('float') == 'none'){
        $('.docPic').css({'max-width':'850px','margin':'0 auto 30px auto','display':'flex'});
        $('.content--box').css({'max-width':'850px','margin':'0 auto'});
    }

    if($('.rowDirect').css('flex-direction') == 'row'){
        $('.rowDirect2').css('flex-direction','row-reverse');
    }else{
        $('.rowDirect2').css('flex-direction','row');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const docPic = document.querySelector('.docPic');
    const hT = docPic.naturalHeight;
    const wT = docPic.naturalWidth;

    if (hT === wT) {
        if (wT > 600) {
            docPic.style.width = '50%';
        }
    } else if (hT > wT) {
        if (hT < 2000 && hT > 700) {
            docPic.style.width = '25%';
        } else if (hT < 700 && hT > 500) {
            docPic.style.width = '50%';
        }
    } else {
        if (docPic.classList.contains('float-none')) {
            docPic.style.width = '100%';
        }
        if (wT < 600) {
            docPic.style.width = '500px';
        }
    }
});
