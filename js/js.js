$(document).ready(function(){

    // 탑 메뉴 스크롤 이벤트

    $(window).scroll(function(){

        sct = $(window).scrollTop();

        // console.log(sct);

        if( sct >= 100 ){
            $('header').css({
                backgroundColor: '#fff',
                position: 'fixed',
                top: 0,
            });

            $('#top_btn').fadeIn(500);

        }else if( sct < 100 ){
            $('header').css({
                backgroundColor: 'transparent',
                // position: 'relative',
            });

            $('#top_btn').fadeOut(0);
        }
    });


    // 메인이미지 슬라이드

    var sectionw = $('#sec01').width();

    var click_num = 0;

    var i = 0;

    $("#right").click(function(){

        click_num++;

        console.log(click_num);

        if( click_num > 3 ){
            click_num = 0;
        }

        $('#img_wrap').animate({
            left: -sectionw * click_num,
        });

    });

    $('#left').click(function(){

        click_num--;

        if( click_num < 0 ){
            click_num = 3;
        }

        $("#img_wrap").animate({
            left: -sectionw * click_num,
        });
    });


    // 메인 자동 슬라이드 //
    
    $("#sec01").click(function(){

        i++;
       
        if( i > 3){
            i = 0;
        }

        $("#img_wrap").animate({
            left: -sectionw * i,
        })

    });

    setInterval(function(){

        $("#sec01").trigger('click');

    },5000);   


   //sec02 컨텐츠 3개씩 슬라이드

   var conw = $('.con_wrap02').width();

   var click_num2 = 0;

    $("#btn_right").click(function(){

        click_num2++;

        if( click_num2 > 2 ){
            click_num2 = 0;
        }

        $('.con_wrap02').animate({
            left: -conw/3 * click_num2
        });

    });

    $('#btn_left').click(function(){

            click_num2--;

            if( click_num2 < 0 ){
                click_num2 = 2;
            }

            $('.con_wrap02').animate({
                left: -conw/3 * click_num2
            });
    });

    // 모바일버전 sec02 컨텐츠 1개씩 자동슬라이드

    var moconw = $('#container02').width();

    var s = 0;

    $("#container02").click(function(){

        s++;
       
        if( s > 8){
            s = 0;
        }

        $(".con02").animate({
            left: -moconw * s,
        })

    });

    setInterval(function(){

        $("#container02").trigger('click');

    },3000);   

    // sec06 NEXT 글자 클릭시 한개씩 슬라이드

    var pickw = $('.con_wrap06').width();

    var p = 0;

    $("#more_box").click(function(){

        p++;

        if( p > 11 ){
            p = 0;
        }

        $('.con_wrap06').animate({
            left: -pickw * p
        });

    });




    // TOP버튼 효과
    $(document).ready(function(){

        $(window).scroll(function(){

            sct = $(window).scrollTop();

            if( sct > 100 ){

                $('#top_btn').css('opacity',1);

            }else{

                $('#top_btn').css('opacity',0);

            }

        });

        $('#top_btn').click(function(){

            $('html,body').animate({
                scrollTop : 0,
            },500);

        });
    });












    
}); //end
