//解决页面进入的时候，首页登陆时候处理
//关闭loadding页面。
function closes(){
    $("#Loading").fadeOut("normal",function(){
        $(this).remove();
    });
}
var pc;

$.parser.onComplete = function(){
    if(pc) clearTimeout(pc);
    pc = setTimeout(closes, 1000);
}






$(function(){
    


    /*布局部分*/
    $('#master-layout').layout({
        fit:true/*布局框架全屏*/
    });
    /*左侧菜单控制部分*/
    var left_control_status=true;
    var left_control_panel=$("#master-layout").layout("panel",'west');

    $(".left-control-switch").on("click",function(){
        if(left_control_status){
            left_control_panel.panel('resize',{width:70});
            left_control_status=false;
            $(".theme-left-normal").hide();
            $(".theme-left-minimal").show();
        }else{
            left_control_panel.panel('resize',{width:200});
            left_control_status=true;
            $(".theme-left-normal").show();
            $(".theme-left-minimal").hide();
        }
        $("#master-layout").layout('resize', {width:'100%'})
    });
    /*左侧菜单控制结束*/

    $(".theme-navigate-user-modify").on("click",function(){
        $('.theme-navigate-user-panel').menu('hide');
        $.insdep.window({id:"personal-set-window",href:"user.html",title:"修改资料"});

    });

    //$.insdep.control("list.html");
    if($.config.singlepage){
        $.debug('进入单页面模式');
        $('#tt').remove();
    }else{
        $.debug('进入iframe模式');
    }

});





