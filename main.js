let offset = 0;
const slaiderLine = document.querySelector('.slaider--line');
document.querySelector('.btn--next').addEventListener('click', function(){
    offset = offset + 1423;
    if(offset > 5692){
        offset = 0;
    }
    slaiderLine.style.left = -offset + 'px';
});
document.querySelector('.btn--prev').addEventListener('click', function(){
    offset = offset - 1423;
    if(offset < 0){
        offset = 5692;
    }
    slaiderLine.style.left = -offset + 'px';
});
// 
$('.slaider--line--media').slick();
// 
$('.collection--case--media').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });
