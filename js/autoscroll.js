// $(function() {
//     $('a[href*=\\#]:not([href=\\#])').on('click', function() {
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
//         if (target.length) {
//             $('html,body').animate({scrollTop: target.offset().top}, 1500);
//             return false;
//         }
//     });
// });

// $(function() {
//     $('a[href*=\\#]:not([href=\\#])').on('click', function() {
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
//         if (target.length) {
//             $('html,body').animate({scrollTop: target.offset().top}, 1500);
//             return false;
//         }
//     });
// });

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $(document).animate(
        {scrollTop: $($.attr(this, 'href')).offset.top}, 
        500
    );
});

// function smoothScrollingTo(target){
//     $('html,body').animate({scrollTop:$(target).offset().​top}, 500);
//   }
// // $('a[href*=\\#]').on('click', function(event){     
// //     event.preventDefault();
// //     smoothScrollingTo(this.hash);
// // });
// $(document).on('click', function(){
// smoothScrollingTo(location.hash);
// });