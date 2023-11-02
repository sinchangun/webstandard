$('.tit .btn').click(function(e){
  e.preventDefault
  //$('.nav').toggle();
  //$('.nav').fadeToggle();
  $('.nav').slideToggle();
  $(this).toggleClass("on");
});

$('.ban').slick({
infinite: true,
slidesToShow: 3,//한화면에 보이는 갯수
slidesToScroll: 1,//버튼을 클릭하면 넘어가는 갯수
dots:true,
autoplay:true,
});

$('.gallery_img').slick({
  arrows:false
});

$('.gallery_btn .play').click(function(){
  $(".gallery_img").slick("slickPlay")
})
$('.gallery_btn .pause').click(function(){
  $(".gallery_img").slick("slickPause")
})
$('.gallery_btn .prev').click(function(){
  $(".gallery_img").slick("slickPrev")
})
$('.gallery_btn .next').click(function(){
  $(".gallery_img").slick("slickNext")
})



// 텝메뉴
//.next() 는 바로밑요소(바로아래동생)
//.parent() 는 부모요소
//.siblings() 나를 제외한 형제들
//.find() 하위요소(내안에 있는 요소들)

let tab_list=$('.tab_menu');

tab_list.find('ul ul').hide();
tab_list.find('li.active ul').show();


$('.tab_menu>ul>li>a').click(function(ev){
  ev.preventDefault();
  let $this = $(this);//변수를  만들때 사용할수 있는 특수문자  $,_
  //console.log($this)
  $this.next('ul').show();
  $this.parent('li').siblings('li').find('ul').hide();

  $this.parent('li').addClass('active');
  $this.parent('li').siblings('li').removeClass('active');
});

lightGallery(document.getElementById('lightgallery'), {
  plugins: [lgThumbnail],
});

let toggle_layer;
    toggle_layer = true;
console.log(toggle_layer);

$(".layer").click(function(e){
  e.preventDefault();
  if(toggle_layer){
    $("#layer").fadeIn();
    toggle_layer = false;
  }else{
    $("#layer").fadeOut();
    toggle_layer = true;
  }
})

$(".close").click(function(e){
  e.preventDefault();
  $("#layer").fadeOut();
  toggle_layer = true;
})


$(".window").click(function(e){
  e.preventDefault();
  window.open("popup.html", "_blank",",top=500,left=500,width=900,height=590");
})