

$(function(){
    // 지도로 돌아가기
    $("div.return").click(function(){
        $(".wrap").hide()
    });

    // 어트랙션 li 상세 페이지 인덱스 연결
    $("li.wb ul.l1 > li").click(function(){
        var pageindex = $(this).index()
        $(".wrap > .t1 > div").eq(pageindex).show().siblings().hide();
        return false
    });
    $("li.al ul.l2 > li").click(function(){
        var pageindex = $(this).index()
        $(".wrap > .t2 > div").eq(pageindex).show().siblings().hide();
        return false
    });
    $("li.wl ul.l3 > li").click(function(){
        var pageindex = $(this).index()
        $(".wrap .t3 > div").eq(pageindex).show().siblings().hide();
        return false
    });
    $("li.cc ul.l4 > li").click(function(){
        var pageindex = $(this).index()
        $(".wrap .t4 > div").eq(pageindex).show().siblings().hide();
        return false
    });
    $("li.fl ul.l5 > li").click(function(){
        var pageindex = $(this).index()
        $(".wrap .t5 > div").eq(pageindex).show().siblings().hide();
        return false
    });
    $("li.tt ul.l6 > li").click(function(){
        var pageindex = $(this).index()
        $(".wrap .t6 > div").eq(pageindex).show().siblings().hide();
        return false
    });
    $("li.tl ul.l7 > li").click(function(){
        var pageindex = $(this).index()
        $(".wrap .t7 > div").eq(pageindex).show().siblings().hide();
        return false
    });


    // s02 area
    // worldbazaar
    $("#worldbazaar").hover(function(){
        $(".s02 > img").attr("src", "/images/land/landmap_1.png")
    });
    $("#worldbazaar").mouseleave(function(){
        $(".s02 > img").attr("src", "/images/land/Landsection.png")
    });
    // adventureLand
    $("#adventureLand").hover(function(){
        $(".s02 > img").attr("src", "/images/land/landmap_2.png")
    });
    $("#adventureLand").mouseleave(function(){
        $(".s02 > img").attr("src", "/images/land/Landsection.png")
    });
    // westernLand
    $("#westernLand").hover(function(){
        $(".s02 > img").attr("src", "/images/land/landmap_3.png")
    });
    $("#westernLand").mouseleave(function(){
        $(".s02 > img").attr("src", "/images/land/Landsection.png")
    });
    // critterCountry
    $("#critterCountry").hover(function(){
        $(".s02 > img").attr("src", "/images/land/landmap_4.png")
    });
    $("#critterCountry").mouseleave(function(){
        $(".s02 > img").attr("src", "/images/land/Landsection.png")
    });
    // fantasyLand
    $("#fantasyLand").hover(function(){
        $(".s02 > img").attr("src", "/images/land/landmap_5.png")
    });
    $("#fantasyLand").mouseleave(function(){
        $(".s02 > img").attr("src", "/images/land/Landsection.png")
    });
    // toonTown
    $("#toonTown").hover(function(){
        $(".s02 > img").attr("src", "/images/land/landmap_6.png")
    });
    $("#toonTown").mouseleave(function(){
        $(".s02 > img").attr("src", "/images/land/Landsection.png")
    });
    // tomorrowLand
    $("#tomorrowLand").hover(function(){
        $(".s02 > img").attr("src", "/images/land/landmap_7.png")
    });
    $("#tomorrowLand").mouseleave(function(){
        $(".s02 > img").attr("src", "/images/land/Landsection.png")
    });
    $("map area").click(function(){
        var index = $(this).index()
        $(".wrap").css("display", "flex");
        $(".wrap > div").hide().eq(index).css("display", "flex");
        return false
    });
      
    

    // s03 area
    // mediterraneanHarbor
    $("#mediterraneanHarbor").hover(function(){
        $(".s03 > img").attr("src", "/images/sea/seamap_1.png")
    });
    $("#mediterraneanHarbor").mouseleave(function(){
        $(".s03 > img").attr("src", "/images/sea/Seasection.png")
    });
    // americanWaterfront
    $("#americanWaterfront").hover(function(){
        $(".s03 > img").attr("src", "/images/sea/seamap_2.png")
    });
    $("#americanWaterfront").mouseleave(function(){
        $(".s03 > img").attr("src", "/images/sea/Seasection.png")
    });
    // portDiscovery
    $("#portDiscovery").hover(function(){
        $(".s03 > img").attr("src", "/images/sea/seamap_3.png")
    });
    $("#portDiscovery").mouseleave(function(){
        $(".s03 > img").attr("src", "/images/sea/Seasection.png")
    });
    // lostRiverDelta
    $("#lostRiverDelta").hover(function(){
        $(".s03 > img").attr("src", "/images/sea/seamap_4.png")
    });
    $("#lostRiverDelta").mouseleave(function(){
        $(".s03 > img").attr("src", "/images/sea/Seasection.png")
    });
    // arabianCoast
    $("#arabianCoast").hover(function(){
        $(".s03 > img").attr("src", "/images/sea/seamap_5.png")
    });
    $("#arabianCoast").mouseleave(function(){
        $(".s03 > img").attr("src", "/images/sea/Seasection.png")
    });
    // mermaidLagoon
    $("#mermaidLagoon").hover(function(){
        $(".s03 > img").attr("src", "/images/sea/seamap_6.png")
    });
    $("#mermaidLagoon").mouseleave(function(){
        $(".s03 > img").attr("src", "/images/sea/Seasection.png")
    });
    // mysteriousIsland
    $("#mysteriousIsland").hover(function(){
        $(".s03 > img").attr("src", "/images/sea/seamap_7.png")
    });
    $("#mysteriousIsland").mouseleave(function(){
        $(".s03 > img").attr("src", "/images/sea/Seasection.png")
    });
});