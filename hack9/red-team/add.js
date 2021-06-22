$(document).ready(function () {
});

function add(){
    console.log($("#box-one").val());
    x = parseInt($("#box-one").val()) + parseInt($("#box-two").val());
    console.log(x);
    $(result).text(x);
}