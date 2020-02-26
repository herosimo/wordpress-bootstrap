/**
 * Configuraion for setting hamburgers menu.
 */

var $header = $("#masthead");
var $siteBranding = $(".site-branding");
var $menu = $("#site-navigation");
var $hamburger = $(".hamburger");
var $content = $("#content");
var $footer = $("#colophon");
$hamburger.on("click", function(e) {
    // $header.toggleClass("animated");
    // $siteBranding.toggleClass("animated");
    $menu.toggleClass("is-active animated");
    $hamburger.toggleClass("is-active");
    // $content.toggle("fast");
    // $footer.toggle("fast");
});
