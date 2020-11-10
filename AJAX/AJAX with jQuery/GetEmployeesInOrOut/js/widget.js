$(document).ready(function(){
    var url="../data/employees.json";
    $.getJSON(url, function(response){
      var statusHTML = "<ul class='bulleted'>";
      $.each(response, function(index, value){
        if (value.inoffice) {
          statusHTML += '<li class="in">' + value.name + '</li>';
        } else {
          statusHTML += '<li class="out">' + value.name + '</li>';
        }
      });
      statusHTML += '</ul>';
      $("#employeeList").append(statusHTML);
      
    });
});