export const PageScroll2id = () => {
    $(document).on("click", "header a, .about-right-btn a", function(e) {
        e.preventDefault();
        var id  = $(this).attr('href');
        var top = $(id).offset().top - 80; // получаем координаты блока
        $('body, html').animate({scrollTop: top}, 1000); // плавно переходим к блоку
    });
};
