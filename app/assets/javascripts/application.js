$(function() {
    $(".sort_paginate_ajax").on("click", ".pagination a", function(){
        $.getScript(this.href);
        return false;
    });
});