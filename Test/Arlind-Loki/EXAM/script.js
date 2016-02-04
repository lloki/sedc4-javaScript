$(document).ready(function () {
 Add();
});

function Add(){
$("#contacts-table tbody").append( "<tr>"+
"<td><input type='text'/></td>"+ 
"<td><input type='text'/></td>"+ 
"<td><input type='text'/></td>"+ 
"<td><button class='btnSave'>Save</button><button class='btnDelete'>Delete</button></td>"+ 
"</tr>");

$(".btnSave").bind("click", Save);
$(".btnDelete").bind("click", Delete);

};

function Save(){ 
var par = $(this).parent().parent();
 //tr 
 var tdName = par.children("td:nth-child(1)");
 var tdPhone = par.children("td:nth-child(2)"); 
 var tdEmail = par.children("td:nth-child(3)"); 
 var tdButtons = par.children("td:nth-child(4)");
 tdName.html(tdName.children("input[type=text]").val()); 
 tdPhone.html(tdPhone.children("input[type=text]").val()); 
 tdEmail.html(tdEmail.children("input[type=text]").val()); 
 tdButtons.html("<button class='btnRead'>Read</button><button class='btnDelete'>Delete</button><button class='btnEdit'>Edit</button>"); 
 $(".btnRead").bind("click", Read);
 $(".btnEdit").bind("click", Edit); 
 $(".btnDelete").bind("click", Delete); 
 }; 
function Edit(){ 
var par = $(this).parent().parent();
 //tr 
 var tdName = par.children("td:nth-child(1)");
 var tdPhone = par.children("td:nth-child(2)");
 var tdEmail = par.children("td:nth-child(3)");
 var tdButtons = par.children("td:nth-child(4)"); 
 tdName.html("<input type='text' id='txtName' value='"+tdName.html()+"'/>"); 
 tdPhone.html("<input type='text' id='txtPhone' value='"+tdPhone.html()+"'/>"); 
 tdEmail.html("<input type='text' id='txtEmail' value='"+tdEmail.html()+"'/>"); 
 tdButtons.html("<button class='btnSave'>Save</button>"); 
 $(".btnSave").bind("click", Save); 
 $(".btnEdit").bind("click", Edit);
 $(".btnDelete").bind("click", Delete); };
 
 function Delete(){
	var par = $(this).parent().parent(); //tr
 par.remove(); }; 
 
 function Read() {
	 var par = $(this).parent().parent();
 var tdName = par.children("td:nth-child(1)");
 var tdPhone = par.children("td:nth-child(2)");
 var tdEmail = par.children("td:nth-child(3)");
 var tdButtons = par.children("td:nth-child(4)"); 
$("#txtArea").text("Name: " + tdName.html() + "\n" + "Email: " + tdPhone.html() + "\n" + "Phone: " + tdEmail.html() );
};

function Clear() {
	$("#txtArea").val('');
};
 
$(function(){
$(".btnEdit").bind("click", Edit);
$(".btnDelete").bind("click", Delete);
$(".btnAdd").bind("click", Add);
$(".btnRead").bind("click", Read);
$(".btnClear").bind("click", Clear);
 });
