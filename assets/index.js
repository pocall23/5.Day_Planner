
$(init)
const today = moment();
// var containerEl = $('#container');
function init(){


//get current day 

$("#currentDay").text(today.format("dddd, MMMM Do"));
//for each time block
$(".time-block").each(function(){
    var blockId = $(this).attr('id');

    $("#" +blockId + "textarea").text(localStorage.getItem(today.format("DDDYYYY") + blockId));
});
//
$(".saveBtn").on("click",handleSave);
};

function handleSave(event){

    var hourId = $(this).parent().attr("id");

    localStorage.setItem(today.format("DDDYYYY") + hourId, $("#" + hourId + " textarea").val());
 };
