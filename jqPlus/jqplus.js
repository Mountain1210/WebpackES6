/* 
* @Author: anchen
* @Date:   2015-12-15 10:36:43
* @Last Modified by:   anchen
* @Last Modified time: 2016-07-13 01:10:39
*/

(function($){
  
    $.fn.prog=function(claname){
        var listname='.'+claname;
        var count=0;
        $(listname).each(function() {
        var el=$(this),per=el.attr('per'),mon=el.attr('money'),claname=el.attr('cname');
        var status=' ';
        (claname=='yuyue')?status='已预约':status='已募集';
        per=parseInt(per);
        var nummon=mon;
        mon=parseInt(mon);
        var defper=parseInt(-100);
        lastper=per+defper; 

        if(mon==-1){
         
            var html='<div class="progress '+claname+'"><p class="txt">募集规模不限</p></div>';
            el.html($(html));
            return false;
        }
        if(per<=0){
            var html='<div class="progress '+claname+'"><div class="zero" style="display:none"></div><div class="pg" style="left:'+lastper+'%"></div><p class="txt">'+status+'<span class="bfb">'+per+'%</span>余<span>'+nummon+'</span></p></div>';
        }else{
            var html='<div class="progress '+claname+'"><div class="zero"></div><div class="pg" style="left:'+lastper+'%"></div><p class="txt">'+status+'<span class="bfb">'+per+'%</span>余<span>'+nummon+'</span></p></div>';
        }
        
             el.html($(html));
        });      
    };
    $.fn.smartFloat = function(index) {
        // var mb=$('#mybar');
        var ysel;
    var position = function(element) {
        ysel=element;
        index=index+1;
        // var outh=(element.outerHeight(true))*index;
         var outh=element.outerHeight(true);
        var top = element.position().top, pos = element.css("position");
        top=top-outh;
        $(window).on("scroll",function() {
            var scrolls = $(this).scrollTop();
            if (scrolls > top) { 
                    element.css({
                        position: "fixed",
                        top: 0,
                        width:'100%',
                        zIndex:110
                    });  
            }else{
                element.css({
                    // position: 'static',
                    position: pos,
                    width:'100%',
                    zIndex:110
                });
            }
        });
    };
    return $(this).each(function() {
        position($(this));   
    });
};

 $.fn.azSmartFloat = function(index) {
    var position = function(element) {
        index=index+1;
        // var outh=(element.outerHeight(true))*index-8;
        var outh=element.outerHeight(true);
        var top = element.position().top, pos = element.css("position");
        top=top-outh;
        $(window).scroll(function() {
            var scrolls = $(this).scrollTop();
            if (scrolls > top) { 
                if (window.XMLHttpRequest) { 
                    element.css({
                        position: "fixed",
                        top: 0,
                        width:'100%',
                        zIndex:10
                    }).addClass("shadow");  
                } else { 
                    element.css({
                        top: scrolls
                    }); 
                }
            }else {
                element.css({
                    position: pos,
                    width:'100%',
                    zIndex:10
                }).removeClass("shadow");   
            }
        });
    };
    return $(this).each(function() {
        position($(this));                       
    });
};
$.fn.mobSmartFloat=function(){    
    $('<div id="mytopbar" style="display:none; position:fixed; top:0px; z-index:9999; width:100%"></div>').appendTo('body');
     var position = function(elArray) {
            var mtb=$('#mytopbar'),ellength=elArray.length;
            $(window).on("touchmove scroll ",function() {
                var scrolls = $(this).scrollTop();
                if(elArray.length>2){
                    if(scrolls>=elArray[0].posi && scrolls<elArray[1].posi){
                    mtb.show();
                    mtb.text(elArray[0].txt);   
                  }
                $.each(elArray,function(index,val){
                    if(elArray[0]==elArray[index]){
                      if(scrolls>=elArray[0].posi && scrolls<elArray[1].posi){
                        mtb.hide();
                        // alert(111)
                      }
                    }else{
                         if(scrolls>=elArray[index].posi){
                       // if(scrolls>=elArray[index].posi &&scrolls<elArray[index+1].posi){
                            mtb.show();
                            mtb.text(elArray[index].txt);            
                          }
                    } 
                    if(scrolls<=elArray[1].posi ){
                                   mtb.fadeOut(200);
                               }              
                  });
                }else{
                  // alert('QA看见他，看见立即通知前端！');
                }  
            });
        }      
    var  elArray=[];
     return $(this).each(function() {        
        var obj={
            txt:$(this).text(),
            posi:$(this).position().top
        }
        elArray.push(obj);
        // console.log(elArray)
        position(elArray);                       
    });
}
})(jQuery)