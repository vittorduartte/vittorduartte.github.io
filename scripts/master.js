/* jQuery - Menu Burger */

$(".navbar-burger").click(
   function () {
       $(".navbar-menu").show();
       $(".btn-close").show();
       $(".navbar-burger").hide();
   }
);
$(".navbar-item").click(
   function () {
       $(".navbar-menu").hide();
       $(".navbar-burger").show();
   }
); 