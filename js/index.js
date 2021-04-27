$(document).ready(function() {
    $(".first-list-element").addClass("active");
    $(".nav-item").click(function () {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });
    $("#toggler").click(function(event) {
        $("#copyright").text(" 2020 أكاديمية حسوب" + new Date().getFullYear());
        $('#wrap').toggleClass('toggled');

        //إضافة طبقة سوداء
        var right = $('.sidebar').css("right"); //أعطينا هذه الخاصية للقائمة الجانبية لكي تُصبح على اليمين
        if (right == '0px') //القائمة الجانبية بحالة إظهار وبالتالي يجب إغلاقها
        {
            $('.sidebar').css({ 'right': '-17rem' });
            $('.layer').fadeOut(); /*أخفي الطبقة السوداء*/
        }
        else { //القائمة الجانبية بحالة إغلاق وبالتالي يجب إظهارها
            $('.sidebar').css({ 'right': '0' });
            $('.layer').fadeIn(); /*أظهر الطبقة السوداء*/
        }
    });
    new Date().getFullYear()
    {
        document.getElementById("year").innerHTML = new Date().getFullYear();
        }

       

    //إخفاء القائمة الجانبية والطبقة السوداء عند الضغط على الطبقة السوداء
    $('.layer').click(function () {
        $('.sidebar').css({ 'right': '-17rem' });
        $('.layer').fadeOut();
    });

    //إخفاء وإظهار حقل البحث عند الضغط على أيقونة البحث التي تظهر في الشاشات المتوسطة والصغيرة
    $(".search-icon").click(function () {
        $(".search-input").slideToggle("slow"); 
    });

});