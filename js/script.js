$('.burger').click(function() {
    // menuにactiveというクラス名を追加する
    $(".burger").toggleClass("is-active");
    $(".menu").toggleClass("is-active");
})