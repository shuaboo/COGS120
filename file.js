var theContent = $('#notes');
 
$('#save').on('click', function(){
  var editedContent   = theContent.html();
  localStorage.newContent = editedContent;
});