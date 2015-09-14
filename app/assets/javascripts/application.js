// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .




$(function() {
    $('#login-form-link').click(function(e) {
        $(".login").delay(100).fadeIn(100);
        $(".registration").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#register-form-link').click(function(e) {
        $(".registration").delay(100).fadeIn(100);
        $(".login").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

});

$(document).ajaxStart(function() {
    $( ".ajax-spiners" ).show();
});

$(document).ajaxStop(function() {
    $( ".ajax-spiners" ).hide();
});

$(function() {
    $(".pagination a").click(function() {
        $(".pagination").html("Page is loading...");
        $.getScript(this.href);
        return false;
    });
});
