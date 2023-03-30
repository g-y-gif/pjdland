
$(function(){

    // 알림창
    alert('이 사이트는 1920x1024를 기준으로 제작되었습니다.');

    // 기본 이벤트 제거
    window.addEventListener("wheel", function(e){
        e.preventDefault();
    },{passive : false});

    // 페이지 선언
    var $html = $("html");
    var page = 1;
    var lastPage = $(".content").length;

    $html.animate({scrollTop:0},10);

    // 휠 이벤트
    $(window).on("wheel", function(e){
 
        if($html.is(":animated")) return;
     
        if(e.originalEvent.deltaY > 0){
            if(page== lastPage) return;
     
            page++;
        }else if(e.originalEvent.deltaY < 0){
            if(page == 1) return;
     
            page--;
        }
        var posTop = (page-1) * $(window).height();
     
        $html.animate({scrollTop : posTop});
     
    });


    // swiper
    var swiper = new Swiper(".autoplay", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
      });



    // 지도로 돌아가기
    $("div.return").click(function(){
        $(".wrap").hide()
    });
    $("div.return").click(function(){
        $(".wrap1").hide()
    });

    // s02 어트랙션 li 상세 페이지 인덱스 연결
    $("li.wb ul.l1 > li").click(function(){
        var pageindex = $(this).index()
        $(".wrap > .a1 > div").eq(pageindex).show().siblings().hide();
        return false
    });
    $("li.al ul.l2 > li").click(function(){
        var pageindex = $(this).index()
        $(".wrap > .a2 > div").eq(pageindex).show().siblings().hide();
        return false
    });
    $("li.wl ul.l3 > li").click(function(){
        var pageindex = $(this).index()
        $(".wrap .a3 > div").eq(pageindex).show().siblings().hide();
        return false
    });
    $("li.cc ul.l4 > li").click(function(){
        var pageindex = $(this).index()
        $(".wrap .a4 > div").eq(pageindex).show().siblings().hide();
        return false
    });
    $("li.fl ul.l5 > li").click(function(){
        var pageindex = $(this).index()
        $(".wrap .a5 > div").eq(pageindex).show().siblings().hide();
        return false
    });
    $("li.tt ul.l6 > li").click(function(){
        var pageindex = $(this).index()
        $(".wrap .a6 > div").eq(pageindex).show().siblings().hide();
        return false
    });
    $("li.tl ul.l7 > li").click(function(){
        var pageindex = $(this).index()
        $(".wrap .a7 > div").eq(pageindex).show().siblings().hide();
        return false
    });


    // s02 area
    // worldbazaar
    $("#worldbazaar").hover(function(){
        $("#s02 > img").attr("src", "../pjdland/images/land/landmap_1.png")
    });
    $("#worldbazaar").mouseleave(function(){
        $("#s02 > img").attr("src", "../pjdland/images/land/Landsection.png")
    });
    // adventureLand
    $("#adventureLand").hover(function(){
        $("#s02 > img").attr("src", "../pjdland/images/land/landmap_2.png")
    });
    $("#adventureLand").mouseleave(function(){
        $("#s02 > img").attr("src", "../pjdland/images/land/Landsection.png")
    });
    // westernLand
    $("#westernLand").hover(function(){
        $("#s02 > img").attr("src", "../pjdland/images/land/landmap_3.png")
    });
    $("#westernLand").mouseleave(function(){
        $("#s02 > img").attr("src", "../pjdland/images/land/Landsection.png")
    });
    // critterCountry
    $("#critterCountry").hover(function(){
        $("#s02 > img").attr("src", "../pjdland/images/land/landmap_4.png")
    });
    $("#critterCountry").mouseleave(function(){
        $("#s02 > img").attr("src", "../pjdland/images/land/Landsection.png")
    });
    // fantasyLand
    $("#fantasyLand").hover(function(){
        $("#s02 > img").attr("src", "../pjdland/images/land/landmap_5.png")
    });
    $("#fantasyLand").mouseleave(function(){
        $("#s02 > img").attr("src", "../pjdland/images/land/Landsection.png")
    });
    // toonTown
    $("#toonTown").hover(function(){
        $("#s02 > img").attr("src", "/pjdland/images/land/landmap_6.png")
    });
    $("#toonTown").mouseleave(function(){
        $("#s02 > img").attr("src", "../pjdland/images/land/Landsection.png")
    });
    // tomorrowLand
    $("#tomorrowLand").hover(function(){
        $("#s02 > img").attr("src", "../pjdland/images/land/landmap_7.png")
    });
    $("#tomorrowLand").mouseleave(function(){
        $("#s02 > img").attr("src", "../pjdland/images/land/Landsection.png")
    });
    $("#s02 map area").click(function(){
        var index = $(this).index()
        $(".wrap").css("display", "flex");
        $(".wrap > div").hide().eq(index).css("display", "flex");
        return false
    });
      
    

    // s03 area
    // mediterraneanHarbor
    $("#mediterraneanHarbor").hover(function(){
        $("#s03 > img").attr("src", "../pjdland/images/sea/seamap_1.png")
    });
    $("#mediterraneanHarbor").mouseleave(function(){
        $("#s03 > img").attr("src", "../pjdland/images/sea/Seasection.png")
    });
    // americanWaterfront
    $("#americanWaterfront").hover(function(){
        $("#s03 > img").attr("src", "../pjdland/images/sea/seamap_2.png")
    });
    $("#americanWaterfront").mouseleave(function(){
        $("#s03 > img").attr("src", "../pjdland/images/sea/Seasection.png")
    });
    // portDiscovery
    $("#portDiscovery").hover(function(){
        $("#s03 > img").attr("src", "../pjdland/images/sea/seamap_3.png")
    });
    $("#portDiscovery").mouseleave(function(){
        $("#s03 > img").attr("src", "../pjdland/images/sea/Seasection.png")
    });
    // lostRiverDelta
    $("#lostRiverDelta").hover(function(){
        $("#s03 > img").attr("src", "../pjdland/images/sea/seamap_4.png")
    });
    $("#lostRiverDelta").mouseleave(function(){
        $("#s03 > img").attr("src", "../pjdland/images/sea/Seasection.png")
    });
    // arabianCoast
    $("#arabianCoast").hover(function(){
        $("#s03 > img").attr("src", "../pjdland/images/sea/seamap_5.png")
    });
    $("#arabianCoast").mouseleave(function(){
        $("#s03 > img").attr("src", "../pjdland/images/sea/Seasection.png")
    });
    // mermaidLagoon
    $("#mermaidLagoon").hover(function(){
        $("#s03 > img").attr("src", "../pjdland/images/sea/seamap_6.png")
    });
    $("#mermaidLagoon").mouseleave(function(){
        $("#s03 > img").attr("src", "../pjdland/images/sea/Seasection.png")
    });
    // mysteriousIsland
    $("#mysteriousIsland").hover(function(){
        $("#s03 > img").attr("src", "../pjdland/images/sea/seamap_7.png")
    });
    $("#mysteriousIsland").mouseleave(function(){
        $("#s03 > img").attr("src", "../pjdland/images/sea/Seasection.png")
    });
    $("#s03 map area").click(function(){
        var index = $(this).index()
        $(".wrap1").css("display", "flex");
        $(".wrap1 > div").hide().eq(index).css("display", "flex");
        return false
    });

    // s02 어트랙션 li 상세 페이지 인덱스 연결
    $("li.mh ul.s1 > li").click(function(){
        var pageindex1 = $(this).index()
        $(".wrap1 > .b1 > div").eq(pageindex1).show().siblings().hide();
        return false
    });
    $("li.aw ul.s2 > li").click(function(){
        var pageindex1 = $(this).index()
        $(".wrap1 > .b2 > div").eq(pageindex1).show().siblings().hide();
        return false
    });
    $("li.pd ul.s3 > li").click(function(){
        var pageindex1 = $(this).index()
        $(".wrap1 .b3 > div").eq(pageindex1).show().siblings().hide();
        return false
    });
    $("li.lrd ul.s4 > li").click(function(){
        var pageindex1 = $(this).index()
        $(".wrap1 .b4 > div").eq(pageindex1).show().siblings().hide();
        return false
    });
    $("li.ac ul.s5 > li").click(function(){
        var pageindex1 = $(this).index()
        $(".wrap1 .b5 > div").eq(pageindex1).show().siblings().hide();
        return false
    });
    $("li.ml ul.s6 > li").click(function(){
        var pageindex1 = $(this).index()
        $(".wrap1 .b6 > div").eq(pageindex1).show().siblings().hide();
        return false
    });
    $("li.mi ul.s7 > li").click(function(){
        var pageindex1 = $(this).index()
        $(".wrap1 .b7 > div").eq(pageindex1).show().siblings().hide();
        return false
    });
});