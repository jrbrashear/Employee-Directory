

$(document).ready(function(){

$.ajax({
  url: 'https://randomuser.me/api/?results=12&format=json',
  dataType: 'json',
  success: function(data) {
    var empHTML = '<ul>'
    var detail=[];
      $.each(data.results, function (i, employee){
        empHTML += '<div class="container">'
        empHTML += '<li>';
        empHTML += '<img class="thumbnail" src="' + employee.picture.thumbnail +'">';
        empHTML +='<div style="inline" class="text">';
        detail.push(employee);
        empHTML += '<span class="name">'+ employee.name.first + " " + employee.name.last+ '</span>';
        empHTML += '<br>';
        empHTML += employee.email;
        empHTML += '<br>';
        empHTML += employee.location.city;
        empHTML += '</div>';
        empHTML += '</li>';
        empHTML += '</div>';
        }); //end $.each
    empHTML += '</ul>';
    $('.employees').html(empHTML);

    $('li').click(function() {
      $('.modal').show("slow");
      $('.employees').css({'opacity' :.25});
      var i = $('li').index(this);
      var emp = detail[i];
      var detailHTML = '<img class="photoMedium" src="' + emp.picture.large +'">';
      var birthDate = emp.dob.split(' ')[0];
      detailHTML += '<br>';
      detailHTML += '<span class="name">' + emp.name.first + " " + emp.name.last + '</span>';
      detailHTML += '<br>';
      detailHTML += emp.location.city;
      detailHTML += '<br>';
      detailHTML += emp.email;
      detailHTML += '<div class="empdetail">';
      detailHTML += '<br>';
      detailHTML += emp.cell;
      detailHTML += '<br>';
      detailHTML += emp.location.street + '<br>' + emp.location.city +
      " " + emp.location.state + " " + emp.location.postcode ;
      detailHTML += '<br>'
      detailHTML += '<span></span>';
      detailHTML += '<span class="birthday">Birthday:' + " " + birthDate  +'</span>';
      detailHTML += '</div>'
      detailHTML += '<span class="close" id="close">&times</span>';
      $('.modal').html(detailHTML);
        $('#close').click(function(){
          $('.modal').hide("slow");
          $('.employees').css({'opacity' : 1});
        });

      });

    }

  }); // end $.ajax randomuser
}); // end $ doc ready
