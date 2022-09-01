$(function () {
    $(".option").mouseover(function () {
        $(this).addClass("active").siblings().removeClass("active");
    })
})
