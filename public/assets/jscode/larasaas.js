$(function() {

//  var stu_email_address = 0;

  $(".class_delete").on('click',function(){
    var con = confirm("Are You Sure!");
    if (con == true) {
      var delete_id = $(this).attr("id");
      jQuery.ajax({
      type:"GET",
      url:"class_delete",
      data:{delete_id:delete_id},    // multiple data sent using ajax
      success: function (data) {
        window.location.reload();
      }
    });
    }
    });     // delect class function  
//   $(".delete_client").on('click',function(){
//     var con = confirm("Are You Sure!");
//     if (con == true) {
//       var client_deleteid = $(this).attr("id");
//       jQuery.ajax({
//       type:"POST",
//       url:"/saas/index.php/SaasController/Delete_Client",
//       data:{client_deleteid:client_deleteid},    // multiple data sent using ajax
//       success: function (data) {
//         window.location.reload();
//       }
//     });
//     }
//   });

  $(".session_delete").on('click',function()
  {
    var con = confirm("Are You Sure!");
    if (con == true) 
    {
      var delete_id = $(this).attr("id");
      jQuery.ajax({
      type:"GET",
      url:"session_delete",
      data:{delete_id:delete_id},    // multiple data sent using ajax
      success: function (data)
      {
        window.location.reload();
        }
      });
    } 
  });
//     /////////////////////////////////     Insert Student          /////////////////////////////

//     $("#select_class").change(function()
//     {
//       //e.preventDefult();
//       var select_class = $('#select_class').val();
//       if(select_class !='')
//       { 
//         $('.form2').removeAttr('disabled');
//         jQuery.ajax({
//         type:"POST",
//         url:"/saas/index.php/SaasController/Get_InsertClass",
//         data:{select_class:select_class},
//         success: function (data) {
//           console.log(data);
//           $('#stud_id').val(data);
//         }
//       });
//       }
//       else if (select_class =='')
//       {
//         $('.form2').attr('disabled','disabled');
//       }
//     });

//     ///////////////////////////////////////////////////////////////////////////////////////////


    $(".delete_student").on('click',function(){
       var con = confirm("Are You Sure!");
        if (con == true) {
         var delete_student = $(this).attr("id");
        jQuery.ajax({
        type:"GET",
        url:"delete_student",
        data:{delete_student:delete_student},    // multiple data sent using ajax
            success: function (data) {
             window.location.reload();
        }
      });
        }       
    });
// //////////////////////////  upload Images ////////////////////////////////////////////

//        $("#showbutton").on('click',function(){
//        var classs = $('.select_class').val();
//        if(classs != ""){
//        jQuery.ajax({
//         type:"POST",
//         url:"/saas/index.php/SaasController/image_class_id",
//         data:{class_id:classs},    // multiple data sent using ajax
//             success: function (data) {
//              alert(data);
//         }
//       });
//        $('#mydropzone').show();
//    }
//    else{
//        alert('Please Select Class');
//    }
//      });
// //////////////////////   Templete Charachter Cout /////////////////////////////////
     
//      var text_length = 0;
//     $('#Characters').html(' Characters : '+text_length);

//     $('#textarea').keyup(function() {
//         var text_length = $('#textarea').val().length;

//         $('#Characters').html('Characters : ' +text_length);  
   
//       });
        
// //////////////////////   Templete Charachter Cout /////////////////////////////////        

// //////////////////////   ---- Delete Template ////////////////////////////////////

// $(".delete_template").on('click',function(){
//        var con = confirm("Are You Sure!");
//         if (con == true) {
//          var delete_template = $(this).attr("id");
//       //  alert(delete_template); 
//         jQuery.ajax({
//         type:"POST",
//         url:"/saas/index.php/SaasController/Template_Delete",
//         data:{delete_template:delete_template},    // multiple data sent using ajax
//             success: function (data) {
//              window.location.reload();
//         }
//       });
//         }
       
//     });
// /////////////////////////-----------delete template------------////////////////////////////////////


//     text_length = 0;
//     $('#Characters2').html('Characters : '+text_length);
//     $('#Message').keyup(function() {
//         text_length = $('#Message').val().length;
//         $('#Characters2').html('Characters : ' +text_length);  
//       });

// $("#select_template").change(function(){
//   var templateid = $("#select_template").val();
//   if (templateid){
//     jQuery.ajax({
//       type:"POST",
//       url:"/saas/index.php/SaasController/Select_Template",
//       data:{
//       templateid:templateid
//       },    // multiple data sent using ajax
//       success: function (data) {
//         $("#Message").val(data);    
//         text_length = $('#Message').val().length;
//         $('#Characters2').html('Characters : '+text_length);
//       }
//     });
//   }
//   else{
//     $("#Message").html('Please Select template !!');
//   }
//     // var text_length = $('#Message').val().length;
//     //     $('#Characters2').html(' Characters : '+text_length);
//     // $('#Message').keyup(function() {
//     //     var text_length = $('#Message').val().length;

//     //     $('#Characters2').html('Characters : ' +text_length);  
   
//     //   });

// });

//   var size = 0;
//   $('#num1').html('SMS Cout : ' + size);

//  $('#messagegroup').change(function(){
//     var groupname = $("#messagegroup").val();
//     //alert(groupname);
//     if(groupname !=''){
//        jQuery.ajax({
//         type:"POST",
//         url:"/saas/index.php/SaasController/Select_Group",
//         dataType:'json',
//         data:{groupname:groupname},    // multiple data sent using ajax
//             success: function (data) {
//               $('#Contact').val(data);
//                var size = $(data).size();
//                if(size){ 
//                var size = $(data).size();
//               $('#num1').html('SMS Cout : ' + size);
//          }
//               else{
//           $('#Contact').html('Group is Empty !!');
//          }
//           }
//    });
//         $('#Contact').keyup(function() {
//         var size = $('#Contact').size();
//         $('#num1').html('SMS Cout : '+size);  
   
//       });
//     }
//  });
// ///////////////////// upload Data excel sheet ///////////////////////////////////////
 
 $('#insert_uploaddata_class').focusin(function(){
  $("#uploaddataclass").attr('disabled', 'disabled');
 });
 $('#insert_uploaddata_class').focusout(function(){
  $("#uploaddataclass").removeAttr('disabled');    
 });
// //////////////////////// Shift Js /////////////////////////////////

$(".delete_shift").on('click',function(){
       var con = confirm("Are You Sure!");
        if (con == true) {
         var delete_shift = $(this).attr("id");
        jQuery.ajax({
        type:"GET",
        url:"delete_shift",
        data:{delete_shift:delete_shift},    // multiple data sent using ajax
            success: function (data) {
             window.location.reload();
        }
      });
        }
    });
// ////////////////////////--------- Attendance-----------/////////////////////
$('#classname').change(function(){
  var classname = $('#classname').val();
  if(classname!=''){
  $('#studid').removeAttr('disabled');
  jQuery.ajax({
        type:"GET",
        url:"class_students",
        dataType:'json',
        data:{classname:classname},    // multiple data sent using ajax
            success: function (data) {
                $('#studid option').remove();
                $('#studid').append('<option></option>');
                for(var i=0;i<data.length;i++)
               {
                    var name = data[i]['name'];
                    var studid = data[i]['studid'];
                    var father = data[i]['father'];
            $('#studid').append('<option value = "'+studid+'">'+ name +' '+father+'</option>');
                }
              $('.date').removeAttr('disabled');
            
              }
      });
  }
  else if(classname ==''){
    $('#studid').attr('disabled','disabled');
  }
});

// // $("#studdetail").DataTable({
// //   scrollX:true,
// //   iDisplayLength:false
// // });

$('#studid').change(function(){
  var studid = $('#studid').val(); 
  var classname = $('#classname').val();
  jQuery.ajax({
        type:"GET",
        url:"student_details",
        dataType:'json',
        data:{classname:classname,studid:studid},    // multiple data sent using ajax
            success: function (data) {
                
                for(var i=0;i<data.length;i++)
               {
                   var name = data[i]['name'];
                   var studid = data[i]['studid'];
                   var father = data[i]['father'];
                   var dob = data[i]['dob'];
                   var cnic = data[i]['cnic'];
                   var contact_no = data[i]['contact_no'];
                   stu_email_address = data[i]['stu_email_address'];
                   var img = data[i]['image_name'];

                   var image ='images/student/'+ img +'.jpg'; 
                  $('#studdetail').html('<tr><td><img class="img-thumbnail" style="height:auto;width:120px;"src ='+image+'></td><td>'+
                    '<table class="table table-bordered"><tr><th>Name</th><td>'+name+'</td></tr>'+
                    '<tr><th>Father</th><td>'+father+'</td></tr>'+
                    '<tr><th>DOB</th><td>'+dob+'</td></tr>'+
                    // '<tr><th>Cnic</th><td>'+cnic+'</td></tr>'+
                    '<tr><th>Contact</th><td>'+contact_no+'</td></tr>'+
                    '</table></tr>');
                  // var image ='/saas/uploads/'+ img +'.jpg';
                  // $('#stname').html('Stud Id :'+' '+ studid +'<br>'+'Name :' +' '+ name +'<br>'+'Fahter :' +' '+ father+'<br>'
                  //   +'DOB :' +' '+ dob+'<br>'+'CNIC :' +' '+ cnic+'<br>'+ 'Contact :' +' '+ contact_no);                  
                  // // $('#stfather').html('Fahter :' +' '+ father);
                  // // $('#dob').html('DOB :' +' '+ dob);
                  // // $('#cnic').html('CNIC :' +' '+ cnic);
                  // // $('#contact').html('Contact :' +' '+ contact_no);
                  // $('#studpic').html('<img class="img-thumbnail" style="height:130px;" src ='+image+'>');
                }
              //$('.date').removeAttr('disabled');
              $('#stdata').slideDown(1000);
              }
      });
 });

    dataTable = $("#attendance").DataTable({
    responsive : true,
    scrollX:true,
    iDisplayLength:31,
     dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
  });
  
$('#showattendance').on('click',function(){ 
  var classname = $('#classname').val();
  var stud_id = $('#studid').val();
  var from = $('#from').val();
  var to = $('#to').val();
  var tdata = "";
  if(from!='' && to!='')
  {
    jQuery.ajax({
      type:"GET",
      url:"show_attendance",
      dataType:'json',
      data:{stud_id:stud_id,from:from,to:to,classname:classname},    // multiple data sent using ajax
      success: function (data){
      $('#emailsend').show(); 
      dataTable.clear();
      var sr = 1;
      var h = 0;
      var m = 0;
      var sunday=0;
      var overtime = 0;
      var absents = 0;
      var presents = 0;
      var late_hours= 0;
      var late_minutes= 0;
      var IN_hours = 0;
      var IN_minutes= 0;
      var total_late_mints = 0;
      var total_late_hours = 0;

      for(var i=0; i<data.length; i++) {

        var shift          = data[i]['shift'];
        var shift_in_time  = data[i]['shift_in_time'];
        var shift_out_time = data[i]['shift_out_time'];
        
        var in_start       = data[i]['in_start'];
        var in_end         = data[i]['in_end'];
        var out_start      = data[i]['out_start']; 
        var out_end        = data[i]['out_end'];
        
        var day            = data[i]['day'];
        var date           = data[i]['date'];
        var timein         = data[i]['timein'];
        var timeout        = data[i]['timeout'];
        var allow_late     = data[i]['allow_late'];
        var totaltime      = data[i]['totaltime'];
        var hour           = data[i]['hour'];
        var minutes        = data[i]['minutes'];
      
            h = h+parseInt(hour);     // total hours
            m = m+parseInt(minutes);  //   total minutes
            var totalmints = m % 60;   // get TOTAL MINUTE MOD
            var remainMinutes = m - totalmints;  /// get hour minutes
            var gethours = remainMinutes/60   
            var totalhours = h+gethours;   ///  GET TOTAL HOURS
            
          if(day=='Sunday' && timein!='' && timeout!=''){   // check overtime
            sunday++;
            overtime++;
            presents++;
            var status = '<img style="height:20px;width:20px;float:right" src="http://localhost/larasaas/public/attimage/sun.jpg"/>';
            dataTable.row.add([sr+status,day,date,timein,timeout]).draw();
            //  .nodes()
            //  .to$()
            // .addClass('Sunday');
          }   // check overtime

          if(allow_late<timein && day!='Sunday' && timein!='' && timeout!='' && timein!=timeout && timeout!=timein){
              
                 var Timein = timein.split(':');
                 IN_hours  = IN_hours + parseInt(Timein[0]);
                 IN_minutes  = IN_minutes + parseInt(Timein[1]);
                 total_late_mints = IN_minutes % 60;   // get TOTAL MINUTE MOD
                 var lateremainMinutes = IN_minutes-total_late_mints;  /// get hour minutes
                 total_late_hours = lateremainMinutes/60  
              presents++; 
              var status = '<img style="height:20px;width:20px;float:right" src="http://localhost/larasaas/public/attimage/lat.jpg"/>';
              dataTable.row.add([sr+status,day,date,timein,timeout]).draw();  
          }   // check late 

            var presentmark=0;
          if(allow_late<timein && day!='Sunday' && timein!='' && timeout!='' && timein==timeout){ 
                
                if (timein >= in_start && timein <= in_end) {
                  presentmark=1;
                 var Timein = timein.split(':');
                 IN_hours  = IN_hours + parseInt(Timein[0]);
                 IN_minutes  = IN_minutes + parseInt(Timein[1]);
                 total_late_mints = IN_minutes % 60;   // get TOTAL MINUTE MOD
                 var lateremainMinutes = IN_minutes-total_late_mints;  /// get hour minutes
                 total_late_hours = lateremainMinutes/60  
                 //presents++;
              absents++; 
              var status = '<img style="height:20px;width:20px;float:right" src="http://localhost/larasaas/public/attimage/abs.jpg" />';
              dataTable.row.add([sr+status,day,date,timein,'-']).draw(); 
            }

             if (timein>=out_start && timein<=out_end) {
                 presentmark=1;
                 // var Timein = timein.split(':');
                 // IN_hours  = IN_hours + parseInt(Timein[0]);
                 // IN_minutes  = IN_minutes + parseInt(Timein[1]);
                 // total_late_mints = IN_minutes % 60;   // get TOTAL MINUTE MOD
                 // var lateremainMinutes = IN_minutes-total_late_mints;  /// get hour minutes
                 // total_late_hours = lateremainMinutes/60  
                 // //presents++;
              absents++;
              var status = '<img style="height:20px;width:20px;float:right" src="http://localhost/larasaas/public/attimage/abs.jpg" />';
              dataTable.row.add([sr+status,day,date,'-',timeout,totaltime]).draw(); 
            }
            if (presentmark==0) {
              absents++;
              var status = '<img style="height:20px;width:20px;float:right" src="http://localhost/larasaas/public/attimage/abs.jpg" />';
              dataTable.row.add([sr+status,day,date,'-',timeout,totaltime]).draw(); 
            }

             // .nodes()
             // .to$()
             // .addClass('late');
          }   // check late2  

          if (timein=='' && timeout=='') {
            if(day=='Sunday'){
            sunday++;
          var status = '<img style="height:20px;width:20px;float:right;" src="http://localhost/larasaas/public/attimage/sun.jpg" />';
            dataTable.row.add([sr+status,day,date,day,day,day]).draw();
          }
          if(day!='Sunday'){
            absents++;   
            //var status = '<divstyle="height:20px;width:20px;margin-left:20px;"></div>';
             var status = '<img style="height:20px;width:20px;float:right" src="http://localhost/larasaas/public/attimage/abs.jpg" />';
            dataTable.row.add([sr+status,day,date,'Absent','Absent','Absent']).draw();
          } 
        }   // check absent and sunday

        if(day!='Sunday' && timein!='' && timeout!='' && allow_late>timein && timein!=timeout && timeout!=timein){
        presents++; 
        var status = '<img style="height:20px;width:20px;float:right" src="http://localhost/larasaas/public/attimage/pre.jpg" />';
        dataTable.row.add([sr+status,day,date,timein,timeout,totaltime]).draw();
        }
        if(day!='Sunday' && timein!='' && timeout!='' && allow_late>timein && timein==timeout){
        presents++; 
        var status = '<img style="height:20px;width:20px;float:right" src="http://localhost/larasaas/public/attimage/pre.jpg" />';
        dataTable.row.add([sr+status,day,date,timein,'-',totaltime]).draw();
        }
        sr++;
      }
      totalDays = sr-1;
     
        $('#summarytable thead')
        .html('<tr><th>'+'Shift'+'</th><td>'+shift+' '+'<small>'+'<b>'+shift_in_time+' to '+shift_out_time+'</b></small></td></tr>'+
        '<tr><th>'+'Total Days'+'</th><td>'+totalDays+'</td></tr>'+
        '<tr><th>'+'Present Days'+'</th><td>'+presents+'</td></tr>'+
        '<tr><th>'+'Absent Days'+'</th><td>'+absents+'</td></tr>'+
        '<tr><th>'+'Sunday'+'</th><td>'+sunday+'</td></tr>');  
        $('#summary').show("slow");
    }
  });
  } 
  else
  {
    alert('Please Select From And To Date');
  }  
}); 


// /////////////////////////////// Department Delete ///////////////////////////////////////

$(".delete_dept").on('click',function(){
       var con = confirm("Are You Sure!");
        if (con == true) {
         var delete_dept = $(this).attr("id");
        jQuery.ajax({
        type:"GET",
        url:"delete_dept",
        data:{delete_dept:delete_dept},    // multiple data sent using ajax
            success: function (data) {
             window.location.reload();
        }
      });
        }
    });
// //////////////////////////// Desination ///////////////////////////////////////////////
       
       $(".delete_des").on('click',function(){
       var con = confirm("Are You Sure!");
        if (con == true) {
         var delete_des = $(this).attr("id");
        jQuery.ajax({
        type:"GET",
        url:"delete_des",
        data:{delete_des:delete_des},    // multiple data sent using ajax
            success: function (data) {
             window.location.reload();
        }
      });
        }
    });
// ////////////////////////////////////////// grade ///////////////////////////////

    $(".delete_grade").on('click',function(){
       var con = confirm("Are You Sure!");
        if (con == true) {
         var delete_grade = $(this).attr("id");
        jQuery.ajax({
        type:"GET",
        url:"delete_grade",
        data:{delete_grade:delete_grade},    // multiple data sent using ajax
            success: function (data) {
             window.location.reload();
        }
      });
        }
    });

// ////////////////////////////////////////// Employeee ///////////////////////////
$(".delete_emp").on('click',function(){
       var con = confirm("Are You Sure!");
        if (con == true) {
         var delete_emp = $(this).attr("id");
        jQuery.ajax({
        type:"GET",
        url:"delete_emp",
        data:{delete_emp:delete_emp},    // multiple data sent using ajax
            success: function (data) {
             window.location.reload();
        }
      });
        }
    });

// ////////////////////////////////// Register Attendance ////////////////////

$('#showreg').on('click',function(){
  
  regclass = $('#regclass').val();
  month = $('#month').val();
  regclassname = $('#regclass option:selected').attr('data-id');
  client_id = $('#regclass option:selected').attr('data-name');
if (regclass =='' || month =='') {
  alert('Please Select Class And Month');
}else{
jQuery.ajax({
        type:"GET",
        url:"show_register",
        data:{regclass:regclass,month:month,regclassname:regclassname},    // multiple data sent using ajax
            success: function (data) { 
              $('#print').show(); 
             $("#register").html(data);
             $('#registerbox').show("fold",2000);
        } 
      }); 
}

}); 

function printData()
{  
  
   // client_id = $('#regclass option:selected').attr('data-name');
   // jQuery.ajax({
   //      type:"GET",
   //      url:"/saas/index.php/SaasController/Print_ClientName",
   //      data:{client_id:client_id},    // multiple data sent using ajax
   //          success: function (data) { 
   //              name = data;
        
   //  } });

    var divToPrint=document.getElementById("register");
         newWin= window.open("");
         newWin.document.write('<html><head><title>Client : '+name+'</title></head><body><footer>Class : '+regclassname+'<footer></body></html>'+divToPrint.outerHTML);
         newWin.print();
         newWin.close();             
}

$("#print").on('click',function(){
printData();
});
// //////////////////////////////////// Student Attendance Email ///////////////////////////////////////

// $("#emailsend").on('click', function () {
//   var element = $("#canvasid").html();
//   jQuery.ajax({
//   type:"POST",
//   url:"/saas/index.php/SaasController/Attendance_Email",
//   data:{element:element,stu_email_address:stu_email_address},    // multiple data sent using ajax
//   success: function (data) {
//     alert('Report Send Successfully.');
//   }
// });
// });
// //////////////////////////////////////////////
$('#deptid').change(function(){
  var deptid = $('#deptid').val();
  jQuery.ajax({
    type:"GET",
    dataType:'json',
    url:"att_employee_list",
    data:{deptid:deptid},    // multiple data sent using ajax
    success: function (data)
    {
      $('#employee').removeAttr('disabled');
      $('#employee option').remove();
      $('#employee').append('<option></option>');
      for(var i=0;i<data.length;i++)
        {
          var employeeid = data[i]['employeeid'];
          var empname = data[i]['name'];
          var empfather = data[i]['father'];
          $('#employee').append('<option value = "'+employeeid+'">'+ empname +' '+empfather+'</option>');
        }
        $('.date').removeAttr('disabled');
      }
    });
});

$('#employee').change(function() {
  var dept_id = $('#deptid').val();
  var employeeid = $('#employee').val();
  jQuery.ajax({
    type:"GET",
    dataType:'json',
    url:"employee_details",
    data:{deptid:dept_id,employeeid:employeeid},    // multiple data sent using ajax
    success: function (data)
    {
      for(var i=0;i<data.length;i++)
      {
          var employeeid = data[i]['employeeid'];
          var empname = data[i]['name'];
          var empfather = data[i]['father'];
          var nic = data[i]['nic'];
          var dob = data[i]['dob'];
          var contact_no = data[i]['contact_no'];
          var image_name = data[i]['image_name'];
          var image ='/images/employee/'+ image_name +'.jpg';
          
          $('#empdetail tbody')
          .html('<tr><td><img class="img-thumbnail" style="height:100px;width:120px;"src ='+image+'></td><td>'+empname+
          '</td><td>'+empfather+'</td><td>'+dob+'</td><td>'+contact_no+'</td></tr>');
        }
        $('#empdata').slideDown(1000);
      }
    });
});
 empdataTable = $("#emp_attendance").DataTable({
    responsive : true,
    scrollX:true,
    iDisplayLength:31,
     dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
  });

$('#showempattend').on('click',function(){
  var dept_id = $('#deptid').val();
  var employeeid = $('#employee').val();
  var from = $('#from').val();
  var to = $('#to').val();
  var tdata = "";
  //document.write(+dept_id+'<br>'+employeeid+'<br>'+from+'<br>'+to);
   jQuery.ajax({
    type:"GET",
    dataType:'json',
    url:"show_emp_attend",
    data:{deptid:dept_id,employeeid:employeeid,from:from,to:to},    // multiple data sent using ajax
    success: function(data)
    { 
     
       empdataTable.clear();  
      var sr = 1;
      var h = 0;
      var m = 0;
      var leave= 0;
      var sunday=0;
      var overtime = 0;
      var absents = 0;
      var presents = 0;
      var late_hours= 0;
      var late_minutes= 0;
      var IN_hours = 0;
      var IN_minutes= 0;
      var total_late_hours = 0;
      var total_late_mints = 0;
      for(var i=0; i<data.length; i++) {
        var shift          = data[i]['shift'];
        var shift_in_time  = data[i]['shift_in_time'];
        var shift_out_time = data[i]['shift_out_time'];
        
        var in_start       = data[i]['in_start'];
        var in_end         = data[i]['in_end'];
        var out_start      = data[i]['out_start']; 
        var out_end        = data[i]['out_end'];
        
        var day            = data[i]['day'];
        var date           = data[i]['date'];
        var timein         = data[i]['timein'];
        var timeout        = data[i]['timeout'];
        var allow_late     = data[i]['allow_late'];
        var totaltime      = data[i]['totaltime'];
        var hour           = data[i]['hour'];
        var minutes        = data[i]['minutes'];
        var is_leave       = data[i]['is_leave'];
        var leave_desc       = data[i]['desc'];

      
            h = h+parseInt(hour);     // total hours
            m = m+parseInt(minutes);  //   total minutes
            var totalmints = m % 60;   // get TOTAL MINUTE MOD
            var remainMinutes = m - totalmints;  /// get hour minutes
            var gethours = remainMinutes/60   
            var totalhours = h+gethours;   ///  GET TOTAL HOURS
            
          if(day=='Sunday' && timein!='' && timeout!=''){   // check overtime
            sunday++;
            overtime++;
            //presents++;
            var status = '<img style="height:20px;width:20px;float:right" src="http://localhost/larasaas/public/attimage/sun.jpg"/>';
            empdataTable.row.add([sr+status,day,date,timein,timeout,totaltime]).draw();
            //  .nodes()
            //  .to$()
            // .addClass('Sunday');
          }   // check overtime

          if(allow_late<timein && day!='Sunday' && timein!='' && timeout!='' && timein!=timeout && timeout!=timein){
              
                 var Timein = timein.split(':');
                 IN_hours  = IN_hours + parseInt(Timein[0]);
                 IN_minutes  = IN_minutes + parseInt(Timein[1]);
                 total_late_mints = IN_minutes % 60;   // get TOTAL MINUTE MOD
                 var lateremainMinutes = IN_minutes-total_late_mints;  /// get hour minutes
                 total_late_hours = lateremainMinutes/60  
              presents++; 
              var status = '<img style="height:20px;width:20px;float:right" src="http://localhost/larasaas/public/attimage/lat.jpg"/>';
              empdataTable.row.add([sr+status,day,date,timein,timeout,totaltime]).draw();  
          }   // check late 

            var presentmark=0;
          if(allow_late<timein && day!='Sunday' && timein!='' && timeout!='' && timein==timeout){ 
                
                if (timein >= in_start && timein <= in_end) {
                  presentmark=1;
                 var Timein = timein.split(':');
                 IN_hours  = IN_hours + parseInt(Timein[0]);
                 IN_minutes  = IN_minutes + parseInt(Timein[1]);
                 total_late_mints = IN_minutes % 60;   // get TOTAL MINUTE MOD
                 var lateremainMinutes = IN_minutes-total_late_mints;  /// get hour minutes
                 total_late_hours = lateremainMinutes/60  
                 //presents++;
              absents++; 
              var status = '<img style="height:20px;width:20px;float:right" src="http://localhost/larasaas/public/attimage/abs.jpg" />';
              empdataTable.row.add([sr+status,day,date,timein,'-',totaltime]).draw(); 
            }

             if (timein>=out_start && timein<=out_end) {
                 presentmark=1;
                 // var Timein = timein.split(':');
                 // IN_hours  = IN_hours + parseInt(Timein[0]);
                 // IN_minutes  = IN_minutes + parseInt(Timein[1]);
                 // total_late_mints = IN_minutes % 60;   // get TOTAL MINUTE MOD
                 // var lateremainMinutes = IN_minutes-total_late_mints;  /// get hour minutes
                 // total_late_hours = lateremainMinutes/60  
                 // //presents++;
              absents++;
              var status = '<img style="height:20px;width:20px;float:right" src="http://localhost/larasaas/public/attimage/abs.jpg" />';
              empdataTable.row.add([sr+status,day,date,'-',timeout,totaltime]).draw(); 
            }
            if (presentmark==0) {
              absents++;
              var status = '<img style="height:20px;width:20px;float:right" src="http://localhost/larasaas/public/attimage/abs.jpg" />';
              empdataTable.row.add([sr+status,day,date,'-',timeout,totaltime]).draw(); 
            }

             // .nodes()
             // .to$()
             // .addClass('late');
          }   // check late2  

          if (timein=='' && timeout=='') {
            if(day=='Sunday'){
            sunday++;
          var status = '<img style="height:20px;width:20px;float:right;" src="http://localhost/larasaas/public/attimage/sun.jpg" />';
            empdataTable.row.add([sr+status,day,date,day,day,day]).draw();
          }
          if(day!='Sunday')
          {
            if(is_leave!='')
            {
             leave++; 
             // var status = '<div style="height:20px;width:20px;margin-left:20px;"></div>';
             var status = '<img style="height:20px;width:20px;float:right" src="http://localhost/larasaas/public/attimage/blue.jpg" />';
            var leave_d = '<a data-toggle="tooltip" title= "'+leave_desc+'">LeaveID : '+is_leave+'</a>';
            empdataTable.row.add([sr+status,day,date,leave_d,'Leave','Leave']).draw();
            }
            if(is_leave==''){
            absents++;   
            //var status = '<divstyle="height:20px;width:20px;margin-left:20px;"></div>';
             var status = '<img style="height:20px;width:20px;float:right" src="http://localhost/larasaas/public/attimage/abs.jpg" />';
            empdataTable.row.add([sr+status,day,date,'Absent','Absent','Absent']).draw();
            }
          } 
        }   // check absent and sunday

        if(day!='Sunday' && timein!='' && timeout!='' && allow_late>timein && timein!=timeout && timeout!=timein){
        presents++; 
        var status = '<img style="height:20px;width:20px;float:right" src="http://localhost/larasaas/public/attimage/pre.jpg" />';
        empdataTable.row.add([sr+status,day,date,timein,timeout,totaltime]).draw();
        }
        if(day!='Sunday' && timein!='' && timeout!='' && allow_late>timein && timein==timeout){
        presents++; 
        var status = '<img style="height:20px;width:20px;float:right" src="http://localhost/larasaas/public/attimage/pre.jpg" />';
        empdataTable.row.add([sr+status,day,date,timein,'-',totaltime]).draw();
        }
        sr++;
      }
      totalDays = sr-1;
     
        $('#summarytable thead')
        .html('<tr><th>'+'Shift'+'</th><td>'+shift+' '+'<small>'+'<b>'+shift_in_time+' to '+shift_out_time+'</b></small></td></tr>'+
        '<tr><th>'+'Total Days'+'</th><td>'+totalDays+'</td></tr>'+
        '<tr><th>'+'Present Days'+'</th><td>'+presents+'</td></tr>'+
        '<tr><th>'+'Absent Days'+'</th><td>'+absents+'</td></tr>'+
        '<tr><th>'+'Sunday'+'</th><td>'+sunday+'</td></tr>'+
        '<tr><th>'+'Leave'+'</th><td>'+leave+'</td></tr>'+
        '<tr><th>'+'Overtime'+'</th><td>'+overtime+'</td></tr>'+
        '<tr><th>'+'Late Hours'+'</th><td>'+total_late_hours+':'+total_late_mints+'</td></tr>'+
        // '<tr><th>'+'Late hours'+'</th><td>''12:00''</td></tr>'+
        '<tr><th>'+'Total hours'+'</th><td>'+totalhours+':'+totalmints+'</td></tr>'); 
         $('#summary').show("slow"); 
    } 
    });
          
});

$('#showempreg').on('click',function(){
  regdept = $('#regdept').val();
  month = $('#month').val();

  // regregdept = $('#regdept option:selected').attr('data-id');
  // client_id = $('#regdept option:selected').attr('data-name');
if (regdept =='' || month =='') {
  alert('Please Select Class And Month');
}else{
jQuery.ajax({
        type:"GET",
        url:"attendance_register",
        data:{regdept:regdept,month:month},    // multiple data sent using ajax
            success: function (data) { 
             $("#Emp_Register").html(data);
             $('#emp_registerbox').show( "fold",2000);
        } 
      }); 
}
}); 
// ////////////////// Student Current Attendance ////////////////////////////////
$('#current').click(function(){
  currentclass = $('#currentclass').val();
  stdate = $('#stdate').val();
 // alert(stdate);
  if(currentclass!=''){
jQuery.ajax({
        type:"GET",
        url:"get_attendance",
        data:{currentclass:currentclass,stdate:stdate},    // multiple data sent using ajax
            success: function (data) { 
              if(data!=0){
             $('#stud_current_attend tbody').html(data); 
             $("#current_attend_box").show( "fold",2000)        
                 } 
                 if (data==0){alert('Schedule is Not Set');}
      }
      });
  } else{alert('Please Select CLass');} 

}); 
// ////////////////// Student Current Attendance ////////////////////////////////

// ////////////////// Employee Current Attendance ////////////////////////////////
$('#emp_current').click(function(){
  currentdept = $('#currentdept').val();
  empdate = $('#empdate').val();
  if(currentdept!='' && empdate !=''){
jQuery.ajax({
        type:"GET",
        url:"show_emp_attendance",
        data:{currentdept:currentdept,empdate:empdate},    // multiple data sent using ajax
            success: function (data) { 
             $('#emp_current_attend').html(data); 
             $("#emp_current_attend_box").show( "fold",2000)        
                 } 
      });
  } else{alert('Please Select Department and Date');} 

}); 
// ////////////////// Employee Current Attendance ////////////////////////////////

$(".deleterole").on('click',function(){
       var con = confirm("Are You Sure!");
        if (con == true) {
         var deleterole = $(this).attr("id");
        jQuery.ajax({
        type:"GET",
        url:"deleterole",
        data:{deleterole:deleterole},    // multiple data sent using ajax
            success: function (data) {
             window.location.reload();
        }
      });
        }
    });
// ///////////////////////-------------///////////////////////////////////////////
// studscheduledataTable = $('#studschedule').DataTable({
//     responsive : true,
//     scrollX:true
//   });

// $('#scheduleclassid').change(function(){
  
//   class_id = $('#scheduleclassid').val();
//   if(class_id!=''){
    
// jQuery.ajax({
//         type:"POST",
//         url:"/saas/index.php/SaasController/Show_Schedule",
//         dataType:'json',
//         data:{class_id:class_id},    // multiple data sent using ajax
//             success: function (data) { 
//               studscheduledataTable.clear();
//              for(var i=0; i<data.length; i++) {
//                   var stmonth = data[i]['month'];
//                   var stsession = data[i]['session'];
//                   var stclassname = data[i]['classname'];
//                   var stshift = data[i]['shift'];
//       studscheduledataTable.row.add([stmonth,stsession,stclassname,stshift]).draw();
             
//              } } 

//       });
//   } else{alert('Please Select Class');} 

// }); 

// empscheduledataTable = $('#empschedule').DataTable({
//     responsive : true,
//     scrollX:true
//   });
// $('#scheduledept').change(function(){
//   dept_id = $('#scheduledept').val();
//   if(dept_id!=''){
// jQuery.ajax({
//         type:"POST",
//         url:"/saas/index.php/SaasController/Show_EmpSchedule",
//         dataType:'json',
//         data:{dept_id:dept_id},    // multiple data sent using ajax
//             success: function (data) { 
//               empscheduledataTable.clear();
//              for(var i=0; i<data.length; i++) {
//                   dataTable.clear();
//                   var empdepartment = data[i]['department'];
//                   var empyear = data[i]['year'];
//                   var empmonth = data[i]['month'];
//                   var empshift = data[i]['shift'];
//       empscheduledataTable.row.add([empdepartment,empmonth,empyear,empshift]).draw();
//              } } 

//       });
//   } else{alert('Please Select Department');} 

// }); 
// //////////////////////////////////////////// END /////////////////

$(".delete_leave").on('click',function(){
    var con = confirm("Are You Sure!");
    if (con == true) {
      var delete_leave = $(this).attr("id");
      jQuery.ajax({
      type:"GET",
      url:"deleteleave",
      data:{delete_leave:delete_leave},    // multiple data sent using ajax
      success: function (data) {
       //alert(data);
        window.location.reload();
      }
    });
    }
    });     // delect class function  
  
  $(".leavedays").change(function(event) {
   var sum = 0;
    $("input[class *= 'leavedays']").each(function(){
        sum += +$(this).val();
    });
    $("#total_leaves").html(sum);
      });

  $("#sensation_dept").change(function(event) {
    var sen_dept = $('#sensation_dept').val();
    if (sen_dept!='') {
      jQuery.ajax({
      type:"GET",
      dataType:'json',
      url:"sensation_dept_emp",
      data:{sen_dept:sen_dept},    // multiple data sent using ajax
      success: function (data) {
      $('#sen_emp option').remove();
      $('#sen_emp').append('<option></option>');
      for(var i=0;i<data.length;i++){
          var employeeid = data[i]['employeeid'];
          var empname = data[i]['name'];
          var empfather = data[i]['father'];
          $('#sen_emp').append('<option value = "'+employeeid+'">'+ empname +' '+empfather+'</option>');
        }
      }
    });
    } else{alert('Please Select Department')}
  });

  $('#sen_emp').change(function(event) {
    var sen_dept = $('#sensation_dept').val();
    var sen_emp = $('#sen_emp').val();
   
    if(sen_emp!=''){
      jQuery.ajax({
      type:"GET",
      dataType:'json',
      url:"sensation_employe_details",
      data:{sen_dept:sen_dept,sen_emp:sen_emp},    // multiple data sent using ajax
      success: function (data) {
         $('#leave_des').slideDown(1000);
        for(var i=0;i<data.length;i++){
           employeeid = data[i]['employeeid'];
           empname    = data[i]['name'];
           empfather  = data[i]['father'];
           department = data[i]['department'];
           dept_id    = data[i]['dept_id'];
           grade      = data[i]['grade'];
           grade_id   = data[i]['grade_id']
           designation= data[i]['designation'];
           des_id     = data[i]['des_id'];
           email      = data[i]['email'];
           image_name = data[i]['image_name'];
          
          var image ='images/employee/'+ image_name +'.jpg';
          
          $('#sen_emp_details tbody')
          .html('<tr><td><img class="img-thumbnail" style="height:80px;width:100px;"src ='+image+'></td><td>'+empname+
          '</td><td>'+empfather+'</td><td>'+department+'</td><td>'+grade+'</td><td>'+designation+'</td></tr>');
        }
        $('#sen_emp_data').slideDown(1000);

      }
    });
    }
    else{alert('Please Select Employee');}
  });

  leave_balance_tabledataTable = $('#leave_balance_table').DataTable({
    responsive : true,
    iDisplayLength:31,
    "dom": '<"clear">'
  });


  $('#to_date').change(function(event) {
   //alert(employeeid);
    var from_date = $('#from_date').val();
    var to_date = $('#to_date').val();
    var start = $("#from_date").datepicker("getDate");
    var end = $("#to_date").datepicker("getDate");
    var days = (end - start) / (1000 * 60 * 60 * 24);
    $("#total_days").val(days+1);
    ///alert(grade_id);
   
    if(from_date && to_date !=''){

      jQuery.ajax({
      type:"GET",
      dataType:'json',
      url:"get_leave_bal",
      data:{grade_id:grade_id},    // multiple data sent using ajax
      success: function (data) {
        leave_balance_tabledataTable.clear();
        // $('#leave_balance_table').html(data);
         for(var i=0;i<data.length;i++){
           var gradeid   = data[i]['grade_id'];
           var leaveid   = data[i]['leave_id'];
           var leavename = data[i]['leave_name'];
           var leaveallow= data[i]['leave_allow'];
          
        
          leave_balance_tabledataTable.row.add($('<tr><td><input  type="text" value="'+leaveid+'" style="border: none;" name = "leaveID[]" readonly required >  </td><td><input name = "leave_name[]" type="text" value="'+leavename+'" style="border: none;" readonly required >  </td><td><input name = "leaveallow[]" style="border: none;" readonly required type="number" value ='+leaveallow+'>  </td><td><input name = "leaveapply[]" style="border: 2px solid #f4f4f4;" min="0" step="0" max="'+leaveallow+'" required type="number">  </td><td><input min="0" step="0" type="number" style="border: none;" required readonly class="remainsdays"></td></tr>')).draw().nodes()
             .to$()
             .addClass('input');
        }
         $('#emp_grad_id').html('<input type="hidden" name="employeeid" value ='+employeeid+' class="employeeid" ><input type="hidden" value ="'+gradeid+'" name="grade_id" class="grade_id">');
        $("#saveleave").show();   
      }
    });
    }else{alert('Please Select dates')}  
  });

$('#leave_balance_table tbody').on('change', 'tr', function() {
     var sum = 0;
     var $row = leave_balance_tabledataTable.row(this).nodes().to$(),
      allowdays = $row.find('td:eq(2) input').val();
      currentInputValue = $row.find('td:eq(3) input').val();
      sum = allowdays - currentInputValue;
      $row.find('td:eq(4) input').val(sum);

});
// ////////////////////////////////////////////////////////////////
$('[data-toggle="tooltip"]').tooltip();

////////////////////////////////// Calculate Delete ///////////////////////////////

 $(".calculate_delete").on('click',function(){
       var con = confirm("Are You Sure!");
        if (con == true) {
         var delete_id = $(this).attr("id");
         
        jQuery.ajax({
        type:"GET",
        url:"calculate_delete",
        data:{delete_id:delete_id},    // multiple data sent using ajax
            success: function (data) {
             window.location.reload();
        }
      });
        }
    });
//////////////////////////////////////// salary_dept ////////////////////////////////
$("#salary_dept").change(function(event) {

  var salarydept = $('#salary_dept').val();
  if(salarydept != '')
  {
        jQuery.ajax({
        dataType:'json',   
        type:"GET",
        url:"get_salary_emp",
        data:{salarydept:salarydept},    // multiple data sent using ajax
        success: function (data) {
      $('#salary_emp').removeAttr('disabled');
      $('#salary_emp option').remove();
      $('#salary_emp').append('<option></option>');
      for(var i=0;i<data.length;i++)
        {
          var employeeid = data[i]['employeeid'];
          var empname = data[i]['name'];
          var empfather = data[i]['father'];
          $('#salary_emp').append('<option value = "'+employeeid+'">'+ empname +' '+empfather+'</option>');
        }
        }
      });
  }
  else{
    $('#salary_emp').attr('disabled','disabled');
  }

});
////////////////////////////////// salary_delete ////////////////////////////////////////////
 $(".salarydelete").on('click',function(){
       var con = confirm("Are You Sure!");
        if (con == true) {
         var delete_id = $(this).attr("id");
         
        jQuery.ajax({
        type:"GET",
        url:"salary_delete",
        data:{delete_id:delete_id},    // multiple data sent using ajax
            success: function (data) {
             window.location.reload();
        }
      });
        }
    });
////////////////////////////////// Edit Salary Setup /////////////////////////////
$(".absent").change(function(event) {
  var absent = $(".absent").val();
  var total_days = $(".total_days").val();
  $(".present").val(total_days - absent);
  //alert(absent);
});
//////////////////////////////////////////////////////////////////////////////////

 $("#salary_pro").on('click',function(){
        
        var con = prompt("Are you sure for Salary Process ? Yes & No", "Yes");
        var res = con.toLowerCase();
    if (res == 'yes') {
        var dept = $("#dept").val();
        if (dept != '') {
         
        jQuery.ajax({
        type:"GET",
        url:"process",
        data:{dept:dept},    // multiple data sent using ajax
            success: function (data) {
            window.location.reload();
            alert('Salary Process Have Done'); 
        }
      }); 
        }
        else{alert('Please Select Department');}
    } 
      
    });
 ////////////////////////////////// Loan_delete ////////////////////////////////////////////
 
 $(".deleteloan").on('click',function(){
       var con = confirm("Are You Sure!");
        if (con == true) {
         var delete_id = $(this).attr("id");
        jQuery.ajax({
        type:"GET",
        url:"loan_delete",
        data:{delete_id:delete_id},    // multiple data sent using ajax
            success: function (data) {
             window.location.reload();
        }
      });
        }
    });

 ///////////////////////////////////////////////////////////////////////////////
 $("#loan_sensation_dept").change(function(event) {
    var loan_sen_dept = $('#loan_sensation_dept').val();
    if (loan_sen_dept!='') {
      jQuery.ajax({
      type:"GET",
      dataType:'json',
      url:"loan_sensation_emp",
      data:{loan_sen_dept:loan_sen_dept},    // multiple data sent using ajax
      success: function (data) {
      $('#loan_sen_emp').removeAttr('disabled');
      $('#loan_sen_emp option').remove();
      $('#loan_sen_emp').append('<option></option>');
      for(var i=0;i<data.length;i++){
          var employeeid = data[i]['employeeid'];
          var empname = data[i]['name'];
          var empfather = data[i]['father'];
          $('#loan_sen_emp').append('<option value = "'+employeeid+'">'+ empname +' '+empfather+'</option>');
        }
      }
    });
    } else{
      $('#loan_sen_emp').attr('disabled','disabled');
      $('#sdate').attr('disabled','disabled');
      $('#sid').attr('disabled','disabled');

      alert('Please Select Department');}
  });

    $('#loan_sen_emp').change(function(event) {
    var sen_dept = $('#loan_sensation_dept').val();
    var sen_emp = $('#loan_sen_emp').val();
   
    if(sen_emp!=''){
      jQuery.ajax({
      type:"GET",
      dataType:'json',
      url:"loan_sen_emp_details",
      data:{sen_dept:sen_dept,sen_emp:sen_emp},    // multiple data sent using ajax
      success: function (data) {

      $('#sdate').removeAttr('disabled');
      $('#sid').removeAttr('disabled');
      $('.Onselectemp').show();
      
      $('#leave_des').slideDown(1000);
      
        for(var i=0;i<data.length;i++){
           employeeid = data[i]['employeeid'];
           empname    = data[i]['name'];
           empfather  = data[i]['father'];
           department = data[i]['department'];
           dept_id    = data[i]['dept_id'];
           grade      = data[i]['grade'];
           grade_id   = data[i]['grade_id']
           designation= data[i]['designation'];
           des_id     = data[i]['des_id'];
           email      = data[i]['email'];
           cnic       = data[i]['cnic'];
           mobile     = data[i]['mobile'];
           dob        = data[i]['dob'];
           image_name = data[i]['image_name'];
          
          var image ='images/employee/'+ image_name +'.jpg';
          
          $('#loan_sen_emp_details tbody')
          .html('<tr><td><img class="img-thumbnail" style="height:80px;width:100px;"src ='+image+'></td><td>'+empname+
          '</td><td>'+empfather+'</td><td>'+department+'</td><td>'+grade+'</td><td>'+designation+'</td><td>'+dob+'</td><td>'+mobile+'</td><td>'+cnic+'</td></tr>');
        }
        $('#loan_sen_emp_data').slideDown(1000);

      }
    });
    }
    else{
      $('#sdate').attr('disabled','disabled');
      $('#sid').attr('disabled','disabled');
      $('.Onselectemp').hide();
      alert('Please Select Employee');

    }
  });
////////////////////////////// loan_sen_delete ////////////////////////////
 $(".loan_sen_delete").on('click',function(){
       var con = confirm("Are You Sure!");
        if (con == true) {
         var delete_id = $(this).attr("id");
        jQuery.ajax({
        type:"GET",
        url:"loan_sen_delete",
        data:{delete_id:delete_id},    // multiple data sent using ajax
            success: function (data) {
             window.location.reload();
        }
      });
        }
    });

////////////////////////// loan_adust_delete/////////////////////////////

 $(".loan_adust_delete").on('click',function(){
       var con = confirm("Are You Sure!");
        if (con == true) {
         var delete_id = $(this).attr("id");
        jQuery.ajax({
        type:"GET",
        url:"loan_adust_delete",
        data:{delete_id:delete_id},    // multiple data sent using ajax
            success: function (data) {
             window.location.reload();
        }
      });
        }
    });
/////////////////////////////////////////////

$("#printPayslip").on("click", function () {
var divContents = $("#print_div").html();
var printWindow = window.open('', '', 'height=400,width=800');
printWindow.document.write('<html><head><title>DIV Contents</title>');
printWindow.document.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">');
printWindow.document.write('<link rel="stylesheet" href="http://larasaas.dev/assets/dist/css/print.css" type="text/css">');
printWindow.document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>');
printWindow.document.write('<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>');
printWindow.document.write('</head><body >');
printWindow.document.write(divContents);
printWindow.document.write('</body></html>');
printWindow.document.close();
printWindow.print();
        });
 /////////////////////////////////////////////// Check Deduction /////////////////////
 deduction_table = $("#deduction_table").DataTable({
    responsive : true,
    scrollX:true,
    iDisplayLength:31,
     dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        "footerCallback": function ( row, data, start, end, display ) {
            var api = this.api(), data;
 
            // Remove the formatting to get integer data for summation
            var intVal = function ( i ) {
                return typeof i === 'string' ?
                    i.replace(/[\,]/g, '')*1 :
                    typeof i === 'number' ?
                        i : 0;
            };
 
            // Total over all pages
            total = api
                .column( 8 )
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );
 
            // Total over this page
            pageTotal = api
                .column( 8, { page: 'current'} )
                .data()
                .reduce( function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0 );
 
            // Update footer
            $(api.column(8).footer()).html(pageTotal+'<br>'+total);
        }
  });

$("#dept_id").change(function(event) {
  var dd = $("#dept_id").val();
  deduction_table.clear();
  if(dd!='')
  { 
    $("#deduction").val('');
    $("#deduction").removeAttr('disabled');
    $("#date").removeAttr('disabled');
  }
  else
  {
    $("#deduction").attr('disabled','disabled');
    $("#date").attr('disabled','disabled');
    $("#deduction").val('');
  }
});

$("#deduction").change(function(event) {
   var type = $("#deduction").val();
   var dept_id = $("#dept_id").val();
   var date = $("#date").val();
   var typename = $("#deduction option:selected").text(); 
  if(type!='')
  {
    jQuery.ajax({
    type:"GET",
    dataType:'json',
    url:"getdeduction",
    data:{dept_id:dept_id,type:type,date:date},    // multiple data sent using ajax
    success: function(data)
    { 
      if(data != '0'){
      var dname = $("#deduction option:selected").text();
      $("#blankth").html(dname);
      deduction_table.clear();  
      for(var i=0; i<data.length; i++)
      { var employee_id = data[i]['employee_id'];
        var name = data[i]['name'];
        var father = data[i]['father'];
        var cnic = data[i]['cnic'];
        var dob = data[i]['dob'];
        var department = data[i]['department'];
        var designation = data[i]['designation'];
        var deduction = data[i]['deduction'];
        var month = data[i]['month'];
        var year = data[i]['year'];

        deduction_table.row.add([employee_id,department,name,father,designation,dob,cnic,month+'-'+year,deduction]).draw();

      }
    }
    else{alert('record no found');}

    }
  });
  }
  else
  {
    alert('Please Select Type');
  }

});
////////////////////////////// cash roll /////////////////////////////////

$("#cash_dept_id").change(function(event) {
  var cash_dept = $('#cash_dept_id').val();
  var cashdate =$('#cashrolldate').val();
  if (cash_dept && cashdate !='')
  {
    jQuery.ajax({
    type:"GET",
    dataType:'json',
    url:"getcashroll",
    data:{cash_dept:cash_dept,cashdate:cashdate},    // multiple data sent using ajax
    success: function(data)
    { 
      if(data != '0'){
      var _srno =0;
      var cashroll_data = [];
      var total_net_salary = 0;
      for(var i=0; i<data.length; i++)
      { _srno++;
        var employee_id = data[i]['employee_id'];
        var name = data[i]['name'];
        var father = data[i]['father'];
        var cnic = data[i]['cnic'];
        var dob = data[i]['dob'];
        var designation = data[i]['designation'];
        var net_salary = data[i]['net_salary'];
        var month = data[i]['month'];
        var year = data[i]['year'];
        var company = data[i]['company'];
        var p_day = data[i]['p_day'];
        var srno__ = '<div style="background-color:#3c8dbc;color:white;">S.No: '+_srno+'</div>';
        cashroll_data.push('<tr><td>'+srno__+'<br><p style="text-align:center; ">'+employee_id+'</p></td>'+
          '<td>'+name+'/'+father+'<br><b>Des: </b>'+designation+'<br><b>Cnic: </b>'+cnic+'</td>'+
          '<td>'+p_day+'</td>'+
          '<td>'+net_salary+'</td><td style="height: 70px;"></td></tr>');
        total_net_salary = total_net_salary + parseInt(net_salary.replace (/,/g, ""));
        
        console.log(total_net_salary);
      }
      $('#company_name').html('<b>'+company+'</b>');
      $('#cashroll_title').html('<b>CASH ROLL FOR THE '+month.toUpperCase()+' '+ year.toUpperCase()+'</b>');
      $('#cashroll_table tbody').html(cashroll_data);
      $('#cashroll_table tfoot').html('<tr><td style="text-align:center;"><b>'+_srno+' '+' Employee(s)</b></td>'+
        '<td></td><td><b>Total Amount:</b></td><td>'+total_net_salary.toLocaleString()+'</td></tr>');
      $('#cashroll_table').show('slow/400/fast');
      $('#print_cashroll').removeAttr('disabled');
    }
    else{alert('record no found');}

    }
  });
  }
  else
  {
    alert('Please Select Date and Department');
  }
});



$("#print_cashroll").on("click", function () {
var divContents = $("#cashroll_print_data").html();
  $("#cashroll_print_data").print({    
          stylesheet : "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
            globalStyles: true,
          mediaPrint: false,
          noPrintSelector: ".no-print",
          iframe: true,
          append: null,
          prepend: null,
          manuallyCopyFormValues: true,
          deferred: $.Deferred(),
          timeout: 750,
          title: 'Cash Roll',
          doctype: '<!doctype html>'
    });
});
////////////////////////////// delete_bank /////////////////////////////////
 $(".delete_bank").on('click',function(){
       var con = confirm("Are You Sure!");
        if (con == true) {
         var delete_id = $(this).attr("id");
        jQuery.ajax({
        type:"GET",
        url:"delete_bank",
        data:{delete_id:delete_id},    // multiple data sent using ajax
            success: function (data) {
             window.location.reload();
        }
      });
        }
    });
/////////////////////////////// print_Payroll Grand Summery ////////////////////////////////////////////
$("#print_PGS").on("click", function () {
 $("#Data_PGS").print({    
    stylesheet : "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
        globalStyles: true,
          mediaPrint: false,
          noPrintSelector: ".no-print",
          iframe: true,
          append: null,
          prepend: null,
          manuallyCopyFormValues: true,
          deferred: $.Deferred(),
          timeout: 750,
          title: 'Payroll Grand Summary',
          doctype: '<!doctype html>'
    });
        });
/////////////////////////////////// pf_checkbox Calculate ////////////////////////////
$(document).on('click','#pf_checkbox', function() {
 
 if ($(this).is(':checked')) {
  var basic = parseFloat($("#basic").val()/12);
  var hr = parseFloat($("#hr").val()/12);
  var con = parseFloat($("#con").val()/12);
  var cola = parseFloat($("#cola").val()/12);
  var mob = parseFloat($("#mob").val()/12);
  var overtime = parseFloat($("#overtime").val()/12);
  var a_other1 = parseFloat($("#a_other1").val()/12);
  var a_other2 = parseFloat($("#a_other2").val()/12);
  var total = basic+hr+con+cola+mob+overtime+a_other1+a_other2;

  $("#pf_input").val((total).toFixed(2));
 }else
 {
  $("#pf_input").val(0);
 }

});
//////////////////////////////////// eobi_checkbox //////////////////////////////
$(document).on('click', '#eobi_checkbox', function(event) {
  if ($(this).is(':checked')) {
  $("#eobi").val(300);
  }
  else{$("#eobi").val(0)}
});
////////////////////////// BANK ADVICE //////////////////////////////////
function convertNumberToWords(amount) {
    var words = new Array();
    words[0] = '';
    words[1] = 'One';
    words[2] = 'Two';
    words[3] = 'Three';
    words[4] = 'Four';
    words[5] = 'Five';
    words[6] = 'Six';
    words[7] = 'Seven';
    words[8] = 'Eight';
    words[9] = 'Nine';
    words[10] = 'Ten';
    words[11] = 'Eleven';
    words[12] = 'Twelve';
    words[13] = 'Thirteen';
    words[14] = 'Fourteen';
    words[15] = 'Fifteen';
    words[16] = 'Sixteen';
    words[17] = 'Seventeen';
    words[18] = 'Eighteen';
    words[19] = 'Nineteen';
    words[20] = 'Twenty';
    words[30] = 'Thirty';
    words[40] = 'Forty';
    words[50] = 'Fifty';
    words[60] = 'Sixty';
    words[70] = 'Seventy';
    words[80] = 'Eighty';
    words[90] = 'Ninety';
    amount = amount.toString();
    var atemp = amount.split(".");
    var number = atemp[0].split(",").join("");
    var n_length = number.length;
    var words_string = "";
    if (n_length <= 9) {
        var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
        var received_n_array = new Array();
        for (var i = 0; i < n_length; i++) {
            received_n_array[i] = number.substr(i, 1);
        }
        for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
            n_array[i] = received_n_array[j];
        }
        for (var i = 0, j = 1; i < 9; i++, j++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                if (n_array[i] == 1) {
                    n_array[j] = 10 + parseInt(n_array[j]);
                    n_array[i] = 0;
                }
            }
        }
        value = "";
        for (var i = 0; i < 9; i++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                value = n_array[i] * 10;
            } else {
                value = n_array[i];
            }
            if (value != 0) {
                words_string += words[value] + " ";
            }
            if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Crores ";
            }
            if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Lakhs ";
            }
            if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Thousand ";
            }
            if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
                words_string += "Hundred and ";
            } else if (i == 6 && value != 0) {
                words_string += "Hundred ";
            }
        }
        words_string = words_string.split("  ").join(" ");
    }
    return words_string;
}
$('#bank_id').change(function(event) {
  var bank_id = $('#bank_id').val();
  var bank_advice_date = $("#bank_advice_date").val();
  if (bank_advice_date && bank_id!='')
  {
    jQuery.ajax({
    type:"GET",
    dataType:'json',
    url:"getbankadvice",
    data:{bank_id:bank_id,bank_advice_date:bank_advice_date},    // multiple data sent using ajax
    success: function(data)
    {
       if(data != '0'){
        var bank_advice_table = [];
        var total_net_salary = 0;
        var _Date = 0;
      for(var i=0; i<data.length; i++)
      { 
        var bankac = data[i]['bankac'];
        var bankadd = data[i]['bankadd'];
        var bank = data[i]['bank'];
        var _Date = data[i]['Date'];
      
        var employee_id = data[i]['employee_id'];
        var name = data[i]['name'];
        var father = data[i]['father'];
        var account = data[i]['account'];
        var net_salary = data[i]['net_salary'];
        var month = data[i]['month'];
        var year = data[i]['year'];
        var company = data[i]['company'];
        
        bank_advice_table.push('<tr><td>'+employee_id+'</td>'+
          '<td>'+name+'/'+father+'</td>'+
          '<td>'+account+'</td>'+
          '<td>'+net_salary+'</td></tr>');
        total_net_salary = total_net_salary + parseInt(net_salary.replace (/,/g, ""));
    } 
      $('#bank_detail').html('The Chief Manager,<br>'+bank+'<br>'+bankadd);
      $("#_date").html('Dated: <b><u>'+_Date+'</u></b>');
      $("#bank_message").html('Sir,<br>Please Debit our A/c # '+bankac+' for Rs: '+ total_net_salary.toFixed(2)+'/= <br><b><u>'+convertNumberToWords(total_net_salary)+' Ruppes Only</u></b> <br> and Credit the under mentioned employees Account.<br><u><b>A.A. Joyland<b></u>');
      $('#bankadvice_table tbody').html(bank_advice_table);
      $('#bankadvice_table tfoot').html('<tr><td></td><td></td><td><b>Total Amount:</b></td><td>'+total_net_salary.toLocaleString()+'</td></tr>');
      $('#print_bankadivce').removeAttr('disabled');
      $('#_regerd').html('<br>Thanking You.<br>'+company+'.<br><br><br>Sign Authority');
      $('#bankadvice_print_data').show('slow/400/fast');
    }   
    

    else{alert('record no found');}

    }
  }); 
  }
  else{alert('Please Select Date & Bank')}
});
$("#print_bankadivce").on("click", function () {
  $("#bankadvice_print_data").print({    
          stylesheet : "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
          globalStyles: false,
          mediaPrint: false,
          noPrintSelector: ".no-print",
          append: null,
          prepend: null,
          manuallyCopyFormValues: false,
          deferred: $.Deferred(),
          timeout: 750,
          doctype: '<!doctype html>'
    });
});
///////////////////////////////////// ledger_emp ////////////////////////////////////
$(".ledger_emp").change(function(event) {

  var ledg_dept = $('#loan_sensation_dept').val();
  var ledg_emp = $('#loan_sen_emp').val();
   if (ledg_dept && ledg_emp!='')
  {
    jQuery.ajax({
    type:"GET",
    dataType:'json',
    url:"ledger_emp_loan",
    data:{ledg_emp:ledg_emp,ledg_dept:ledg_dept},    // multiple data sent using ajax
    success: function(data)
    {
      if(data!=''){  
      $('#ledger_loan_id  option').remove();
      $("#ledger_loan_id").removeAttr('disabled');
      $('#ledger_loan_id').append('<option></option>');
      for(var i=0;i<data.length;i++){
          var loan_id = data[i]['loan_id'];
          var loan = data[i]['loan'];
          $('#ledger_loan_id').append('<option value = "'+loan_id+'">'+loan+'</option>');
        }
      }
      else{alert('Loan not found');}
    }
  });

  }else{$("#ledger_loan_id").attr('disabled','disabled');}  

});
$('#ledger_loan_id').change(function(event) {
  var ledg_dept = $('#loan_sensation_dept').val();
  var ledg_emp = $('#loan_sen_emp').val();
  var loan_id = $('#ledger_loan_id').val();
  $('#ledger_div').show('slow/400/fast');
   if (ledg_dept && ledg_emp && loan_id !='')
  {
    jQuery.ajax({
    type:"GET",
    dataType:'json',
    url:"ledger_loan_trans",
    data:{ledg_emp:ledg_emp,ledg_dept:ledg_dept,loan_id:loan_id},    // multiple data sent using ajax
    success: function(data)
    {
      var table_data=[];
      var balance = 0;

      if(data!=''){  
    
      for(var i=0;i<data.length;i++){
          
          var tid = data[i]['tid'];
          var tdate = data[i]['tdate'];
          var total_amount = data[i]['total_amount'];
          var installment = data[i]['installment'];
          var amount = data[i]['amount'];
        if(i==0){
           table_data.push('<tr><td></td>'+
          '<td></td><td></td>'+
          '<td><b>'+total_amount+'</b></td></tr>');
        }
         table_data.push('<tr><td>'+tid+'</td>'+
          '<td>'+tdate+'</td><td>'+amount+'</td>'+
            '<td></td></tr>');
        balance = parseInt(balance) + parseInt(amount);
        }
         $('#ledger_table tbody').html(table_data);
         $('#ledger_table tfoot').html('<tr><td></td>'+
          '<td></td><td><b>Balance</b></td>'+
          '<td style="text-align:left;"><b>'+(total_amount-balance)+'</b></td></tr>');
      }
      else{alert('Loan not found');}
    }

  });

  }else{alert('Please Select Loan Type');}
});
///////////////////////////////// loan_ledger_print ///////////////////
$('#loan_ledger_print').on('click', function(event) {
 $("#loan_ledger_data").print({    
          stylesheet : "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
          globalStyles: false,
          mediaPrint: false,
          noPrintSelector: ".no-print",
          append: null,
          prepend: null,
          manuallyCopyFormValues: false,
          deferred: $.Deferred(),
          timeout: 750,
          doctype: '<!doctype html>'
    });
});
///////////////////////////////// home work classs ///////////////////////////////////////
$("#hw_class_id").change(function(event) {
  if ($(this).val() != '') {
    $("#hw_title").removeAttr('disabled');
     $("#save_button").removeAttr('disabled');
  }
  else
  {
    $("#hw_title").attr('disabled','disabled');
    $("#save_button").attr('disabled','disabled');
    alert("Please Select Class");
  }
});

////////////////////////////// delete_bank /////////////////////////////////
 $(".hw_delete").on('click',function(){
       var con = confirm("Are You Sure For Delete !");
        if (con == true) {
         var delete_id = $(this).attr("id");
        jQuery.ajax({
        type:"GET",
        url:"hw_delete",
        data:{delete_id:delete_id},    // multiple data sent using ajax
            success: function (data) {
             window.location.reload();
        }
      });
        }
    });
 ///////////////////////////////// ntf ///////////////////////////////////////

 $('.ntf').change(function(event) {
   event.preventDefault();
  var radio = $(this).val();
  switch (radio)
  { 
    case 'all': 
    $("#only_class").hide('slow/400/fast');
    $("#only_student").hide('slow/400/fast');
    $('#class_opt').attr('disabled','disabled');
    $('#only_stu_class_id').attr('disabled','disabled');
    break;
    case 'class': 
    $("#only_class").show('slow/400/fast');
    $("#only_student").hide('slow/400/fast');
    $('#class_opt').removeAttr('disabled');
    $('#only_stu_class_id').attr('disabled','disabled');  
    break;    
    case 'student': 
     $("#only_class").hide('slow/400/fast');
     $("#only_student").show('slow/400/fast');
     $('#only_stu_class_id').removeAttr('disabled');
     $('#class_opt').attr('disabled','disabled');  
    break;    
    default:
  }
 
 });

 /////////////////////////////////////////////////////////////////////////////

 $('#only_stu_class_id').change(function(){
  var classname = $('#only_stu_class_id').val();
  if(classname!=''){
  $('#only_stu_id').removeAttr('disabled');
   var url =   window.location.origin;
  jQuery.ajax({
        type:"GET",
        url:url+"/class_students",
        dataType:'json',
        data:{classname:classname},    // multiple data sent using ajax
            success: function (data) {
                $('#only_stu_id option').remove();
                $('#only_stu_id').append('<option></option>');
                for(var i=0;i<data.length;i++)
               {
                    var name = data[i]['name'];
                    var studid = data[i]['studid'];
                    var father = data[i]['father'];
            $('#only_stu_id').append('<option value = "'+studid+'">'+ name +' '+father+'</option>');
                }
              $('.date').removeAttr('disabled');
            
              }
      });
  }
  else if(classname ==''){
    $('#only_stu_id').attr('disabled','disabled');
  }
});

$('#only_stu_id').change(function(){
  var studid = $('#only_stu_id').val(); 
  var classname = $('#only_stu_class_id').val();
  var url =   window.location.origin;
  jQuery.ajax({
        type:"GET",
        url: url + "/student_details",
        dataType:'json',
        data:{classname:classname,studid:studid},    // multiple data sent using ajax
            success: function (data) {
                
                for(var i=0;i<data.length;i++)
               {
                   var name = data[i]['name'];
                   var studid = data[i]['studid'];
                   var father = data[i]['father'];
                   var dob = data[i]['dob'];
                   var cnic = data[i]['cnic'];
                   var contact_no = data[i]['contact_no'];
                   stu_email_address = data[i]['stu_email_address'];
                   var img = data[i]['image_name'];

                   var image ='/images/student/'+ img +'.jpg'; 
                   $('#studdetail tbody')
                   .html('<tr><td><img class="img-thumbnail" style="height:100px;width:120px;"src ='+image+'></td><td>'+name+
                    '</td><td>'+father+'</td><td>'+dob+'</td><td>'+contact_no+'</td></tr>');
                  // var image ='/saas/uploads/'+ img +'.jpg';
                  // $('#stname').html('Stud Id :'+' '+ studid +'<br>'+'Name :' +' '+ name +'<br>'+'Fahter :' +' '+ father+'<br>'
                  //   +'DOB :' +' '+ dob+'<br>'+'CNIC :' +' '+ cnic+'<br>'+ 'Contact :' +' '+ contact_no);                  
                  // // $('#stfather').html('Fahter :' +' '+ father);
                  // // $('#dob').html('DOB :' +' '+ dob);
                  // // $('#cnic').html('CNIC :' +' '+ cnic);
                  // // $('#contact').html('Contact :' +' '+ contact_no);
                  // $('#studpic').html('<img class="img-thumbnail" style="height:130px;" src ='+image+'>');
                }
              //$('.date').removeAttr('disabled');
              $('#stdata').slideDown(1000);
              }
      });
 });

//////////////////////////////////////////////////////////////////////////////////////

////////////////////////////// delete_bank /////////////////////////////////
 $(".ntf_delete").on('click',function(){
       var con = confirm("Are You Sure For Delete !");
        if (con == true) {
         var delete_id = $(this).attr("id");
         var block_id = $(this).attr("data-id");
        jQuery.ajax({
        type:"GET",
        url:"ntf_delete",
        data:{delete_id:delete_id,block_id:block_id},    // multiple data sent using ajax
            success: function (data) {
             window.location.reload();
        }
      });
        }
    });

/////////////////////////////////////////////////////////////////////////////////

$(document).on('change', '#hw_students', function(event) {
  event.preventDefault();
  var stud_id = $(this).val();
  if(stud_id != "") {
    jQuery.ajax({
    type:"GET",
    url:"student_hw",
    data:{stud_id:stud_id},    // multiple data sent using ajax
    success: function (data){
      if (data!=0){
        $("#select_stud").hide();  
        $("#record_not_found").hide('slow/400/fast');
        $("#timeline_hw").show('slow/400/fast');
        $("#timeline_hw").html(data);
      }
      if(data == 0)
      { $("#timeline_hw").hide('slow/400/fast');
        $("#record_not_found").show('slow/400/fast');
        $("#select_stud").hide();
      }
    }
    });
  }
});

////////////////////////////// parents_attend /////////////////////////////////////

$("#advance_option").click(function(event) {
  $("#advance_option_div").show('slow/600/fast');
});
$("#close_advance").click(function(event) {
  $("#advance_option_div").hide('slow/600/fast');
});

$("#pstudents").change(function(event) {
  
  if ($("#pstudents").val() !='')
  {   
    var pstudents = $("#pstudents").val();
    var data = pstudents.split("/");
  
    var stud = data[0];
    var cls = data[1];
    var sess = data[2];
    var client = data[3];
    jQuery.ajax({
      type:"GET",
      url:"current_month",
      data:{stud:stud,cls:cls,sess:sess,client:client},    // multiple data sent using ajax
      success: function (data){
        if(data !=''){
          $("#parent_table tbody").html(data);
          $("#parent_attend_table").show('slow/400/fast');
        }
        else
        {
          alert("Record rot found");
        }
      }
    });
  }
});


$("#parents_attend").click(function(event) {
  var pstudents = $("#pstudents").val();
  var pfrom = $("#parent_from").val();
  var pto = $("#parent_to").val();
  
  var data = pstudents.split("/");
  
  var stud = data[0];
  var cls = data[1];
  var sess = data[2];
  var client = data[3];
  if(pfrom && pto != "") {
    jQuery.ajax({
    type:"GET",
    url:"parent_attend",
    data:{stud:stud,cls:cls,sess:sess,client:client,pfrom:pfrom,pto:pto},    // multiple data sent using ajax
    success: function (data){
      if(data !=''){
        $("#parent_table tbody").html(data);
        $("#parent_attend_table").show('slow/600/fast');
      }
      else
      {
        alert("Record rot found");
      }
    }
    });
  }
  else
  {
    alert("Please Select From & To Date !")
  }

});
//////////////////////////// eMob_attend //////////////////////////////////////

   MobdataTable = $("#mob_emp_attendance").DataTable({
    iDisplayLength:31,
    responsive: true,
    dom: '<"clear">tip',
    bAutoWidth: false,
    ordering: false,
    aoColumns : [
      { "sWidth": "1%"},
      { "sWidth": "5%"},
      { "sWidth": "5%"},
      { "sWidth": "5%"},
      { "sWidth": "5%"}
    ]
  });

$("#eMob_attend").change(function(event) {
  
  var check = "defualt";
  var eMob_data = $('#eMob_attend').val();
  var data = eMob_data.split("/");
  var employeeid = data[0];
  var dept_id = data[1];

   jQuery.ajax({
    type:"GET",
    dataType:'json',
    url:"mob_emp_attend",
    data:{deptid:dept_id,employeeid:employeeid,check},    // multiple data sent using ajax
    success: function(data)
    { 
      MobdataTable.clear();  
      var h = 0;
      var m = 0;
      var leave= 0;
      var sunday=0;
      var overtime = 0;
      var absents = 0;
      var presents = 0;
      var late_hours= 0;
      var late_minutes= 0;
      var IN_hours = 0;
      var IN_minutes= 0;
      var total_late_hours = 0;
      var total_late_mints = 0;
      for(var i=0; i<data.length; i++) {
        var shift          = data[i]['shift'];
        var shift_in_time  = data[i]['shift_in_time'];
        var shift_out_time = data[i]['shift_out_time'];
        
        var in_start       = data[i]['in_start'];
        var in_end         = data[i]['in_end'];
        var out_start      = data[i]['out_start']; 
        var out_end        = data[i]['out_end'];
        
        var DAY            = data[i]['day'];
        var day = DAY.toUpperCase();
        var date           = data[i]['date'];
        var timein         = data[i]['timein'];
        var timeout        = data[i]['timeout'];
        var allow_late     = data[i]['allow_late'];
        var totaltime      = data[i]['totaltime'];
        var hour           = data[i]['hour'];
        var minutes        = data[i]['minutes'];
        var is_leave       = data[i]['is_leave'];
        var leave_desc       = data[i]['desc'];

      
            h = h+parseInt(hour);     // total hours
            m = m+parseInt(minutes);  //   total minutes
            var totalmints = m % 60;   // get TOTAL MINUTE MOD
            var remainMinutes = m - totalmints;  /// get hour minutes
            var gethours = remainMinutes/60   
            var totalhours = h+gethours;   ///  GET TOTAL HOURS
            
          if(day=='SUN' && timein!='' && timeout!=''){   // check overtime
            var status = '<img style="height:20px;width:20px;" src="http://localhost/larasaas/public/attimage/sun.jpg"/>';
            MobdataTable.row.add([status,day+', '+date,timein,timeout,totaltime]).draw();
          }   // check overtime

          if(allow_late<timein && day!='SUN' && timein!='' && timeout!='' && timein!=timeout && timeout!=timein){
              
                 var Timein = timein.split(':');
                 IN_hours  = IN_hours + parseInt(Timein[0]);
                 IN_minutes  = IN_minutes + parseInt(Timein[1]);
                 total_late_mints = IN_minutes % 60;   // get TOTAL MINUTE MOD
                 var lateremainMinutes = IN_minutes-total_late_mints;  /// get hour minutes
                 total_late_hours = lateremainMinutes/60  
              presents++; 
              var status = '<img style="height:20px;width:20px;" src="http://localhost/larasaas/public/attimage/lat.jpg"/>';
              MobdataTable.row.add([status,day+', '+date,timein,timeout,totaltime]).draw();  
          }   // check late 

            var presentmark=0;
          if(allow_late<timein && day!='SUN' && timein!='' && timeout!='' && timein==timeout){ 
                
                if (timein >= in_start && timein <= in_end) {
                  presentmark=1;
                 var Timein = timein.split(':');
                 IN_hours  = IN_hours + parseInt(Timein[0]);
                 IN_minutes  = IN_minutes + parseInt(Timein[1]);
                 total_late_mints = IN_minutes % 60;   // get TOTAL MINUTE MOD
                 var lateremainMinutes = IN_minutes-total_late_mints;  /// get hour minutes
                 total_late_hours = lateremainMinutes/60  
                 //presents++;
              absents++; 
              var status = '<img style="height:20px;width:20px;" src="http://localhost/larasaas/public/attimage/abs.jpg" />';
              MobdataTable.row.add([status,day+', '+date,timein,'-',totaltime]).draw(); 
            }

             if (timein>=out_start && timein<=out_end) {
                 presentmark=1;
              var status = '<img style="height:20px;width:20px;" src="http://localhost/larasaas/public/attimage/abs.jpg" />';
              MobdataTable.row.add([status,day+', '+date,date,'-',timeout,totaltime]).draw(); 
            }
            if (presentmark==0) {
              absents++;
              var status = '<img style="height:20px;width:20px;" src="http://localhost/larasaas/public/attimage/abs.jpg" />';
              MobdataTable.row.add([status,day+', '+date,'-',timeout,totaltime]).draw(); 
            }
          }   // check late2  

          if (timein=='' && timeout=='') {
            if(day=='SUN'){
            sunday++;
          var status = '<img style="height:20px;width:20px;" src="http://localhost/larasaas/public/attimage/sun.jpg" />';
            MobdataTable.row.add([status,day+', '+date,day,day,day]).draw();
          }
          if(day!='SUN')
          {
            if(is_leave!='')
            {
             var status = '<img style="height:20px;width:20px;" src="http://localhost/larasaas/public/attimage/blue.jpg" />';
            var leave_d = '<a data-toggle="tooltip" title= "'+leave_desc+'">L.ID : '+is_leave+'</a>';
            MobdataTable.row.add([status,day+', '+date,leave_d,'L','L']).draw();
            }
            if(is_leave==''){
             var status = '<img style="height:20px;width:20px;" src="http://localhost/larasaas/public/attimage/abs.jpg" />';
            MobdataTable.row.add([status,day+', '+date,'A','A','A']).draw();
            }
          } 
        }   // check absent and sunday

        if(day!='SUN' && timein!='' && timeout!='' && allow_late>timein && timein!=timeout && timeout!=timein){
      
        var status = '<img style="height:20px;width:20px;" src="http://localhost/larasaas/public/attimage/pre.jpg" />';
        MobdataTable.row.add([status,day+', '+date,timein,timeout,totaltime]).draw();
        }
        if(day!='SUN' && timein!='' && timeout!='' && allow_late>timein && timein==timeout){
   
        var status = '<img style="height:20px;width:20px;" src="http://localhost/larasaas/public/attimage/pre.jpg" />';
        MobdataTable.row.add([status,day+', '+date,timein,'-',totaltime]).draw();
        }
   
      }
    } 
    });
});
////////////////////////////////// Emp_attend //////////////////////////////////////
$("#Emp_attend").click(function(event) {
  
  var check = "search";
  var eMob_data = $('#eMob_attend').val();
  var data = eMob_data.split("/");
  var employeeid = data[0];
  var dept_id = data[1];
  var efrom = $("#Emp_from").val();
  var eto = $("#Emp_to").val();

  var d = new Date(efrom);
  var months = new Array();
  months[0] = "Jan";
  months[1] = "Feb";
  months[2] = "Mar";
  months[3] = "Apr";
  months[4] = "May";
  months[5] = "Jun";
  months[6] = "Jul";
  months[7] = "Aug";
  months[8] = "Sep";
  months[9] = "Oct";
  months[10] = "Nov";
  months[11] = "Dec";
  var _month = months[d.getMonth()];

   jQuery.ajax({
    type:"GET",
    dataType:'json',
    url:"mob_emp_attend",
    data:{deptid:dept_id,employeeid:employeeid,efrom:efrom,eto:eto,check},    // multiple data sent using ajax
    success: function(data)
    { 
     
      MobdataTable.clear();  
      var h = 0;
      var m = 0;
      var leave= 0;
      var sunday=0;
      var overtime = 0;
      var absents = 0;
      var presents = 0;
      var late_hours= 0;
      var late_minutes= 0;
      var IN_hours = 0;
      var IN_minutes= 0;
      var total_late_hours = 0;
      var total_late_mints = 0;
      for(var i=0; i<data.length; i++) {
        var shift          = data[i]['shift'];
        var shift_in_time  = data[i]['shift_in_time'];
        var shift_out_time = data[i]['shift_out_time'];
        
        var in_start       = data[i]['in_start'];
        var in_end         = data[i]['in_end'];
        var out_start      = data[i]['out_start']; 
        var out_end        = data[i]['out_end'];
        
        var DAY            = data[i]['day'];
        var day = DAY.toUpperCase();
        var date           = data[i]['date'];
        var timein         = data[i]['timein'];
        var timeout        = data[i]['timeout'];
        var allow_late     = data[i]['allow_late'];
        var totaltime      = data[i]['totaltime'];
        var hour           = data[i]['hour'];
        var minutes        = data[i]['minutes'];
        var is_leave       = data[i]['is_leave'];
        var leave_desc       = data[i]['desc'];
        var month       = data[i]['month'];
      
            h = h+parseInt(hour);     // total hours
            m = m+parseInt(minutes);  //   total minutes
            var totalmints = m % 60;   // get TOTAL MINUTE MOD
            var remainMinutes = m - totalmints;  /// get hour minutes
            var gethours = remainMinutes/60   
            var totalhours = h+gethours;   ///  GET TOTAL HOURS

//////////////////////////// Change Month /////////////////////////////////////

            if (_month != month ) {
              var change_month = '<span class="label label-info" style="font-size:12px;">'+month.toUpperCase()+'</span>';
              MobdataTable.row.add([change_month,'','','','']).draw();
            }
            _month = month;  

//////////////////////////// Change Month /////////////////////////////////////

          if(day=='SUN' && timein!='' && timeout!=''){   // check overtime
            var status = '<img style="height:20px;width:20px;" src="http://localhost/larasaas/public/attimage/sun.jpg"/>';
            MobdataTable.row.add([status,day+', '+date,timein,timeout,totaltime]).draw();
          }   // check overtime

          if(allow_late<timein && day!='SUN' && timein!='' && timeout!='' && timein!=timeout && timeout!=timein){
              
                 var Timein = timein.split(':');
                 IN_hours  = IN_hours + parseInt(Timein[0]);
                 IN_minutes  = IN_minutes + parseInt(Timein[1]);
                 total_late_mints = IN_minutes % 60;   // get TOTAL MINUTE MOD
                 var lateremainMinutes = IN_minutes-total_late_mints;  /// get hour minutes
                 total_late_hours = lateremainMinutes/60  
              presents++; 
              var status = '<img style="height:20px;width:20px;" src="http://localhost/larasaas/public/attimage/lat.jpg"/>';
              MobdataTable.row.add([status,day+', '+date,timein,timeout,totaltime]).draw();  
          }   // check late 

            var presentmark=0;
          if(allow_late<timein && day!='SUN' && timein!='' && timeout!='' && timein==timeout){ 
                
                if (timein >= in_start && timein <= in_end) {
                  presentmark=1;
                 var Timein = timein.split(':');
                 IN_hours  = IN_hours + parseInt(Timein[0]);
                 IN_minutes  = IN_minutes + parseInt(Timein[1]);
                 total_late_mints = IN_minutes % 60;   // get TOTAL MINUTE MOD
                 var lateremainMinutes = IN_minutes-total_late_mints;  /// get hour minutes
                 total_late_hours = lateremainMinutes/60  
                 //presents++;
              absents++; 
              var status = '<img style="height:20px;width:20px;" src="http://localhost/larasaas/public/attimage/abs.jpg" />';
              MobdataTable.row.add([status,day+', '+date,timein,'-',totaltime]).draw(); 
            }

             if (timein>=out_start && timein<=out_end) {
                 presentmark=1;
              var status = '<img style="height:20px;width:20px;" src="http://localhost/larasaas/public/attimage/abs.jpg" />';
              MobdataTable.row.add([status,day+', '+date,date,'-',timeout,totaltime]).draw(); 
            }
            if (presentmark==0) {
              absents++;
              var status = '<img style="height:20px;width:20px;" src="http://localhost/larasaas/public/attimage/abs.jpg" />';
              MobdataTable.row.add([status,day+', '+date,'-',timeout,totaltime]).draw(); 
            }
          }   // check late2  

          if (timein=='' && timeout=='') {
            if(day=='SUN'){
            sunday++;
          var status = '<img style="height:20px;width:20px;" src="http://localhost/larasaas/public/attimage/sun.jpg" />';
            MobdataTable.row.add([status,day+', '+date,day,day,day]).draw();
          }
          if(day!='SUN')
          {
            if(is_leave!='')
            {
             var status = '<img style="height:20px;width:20px;" src="http://localhost/larasaas/public/attimage/blue.jpg" />';
            var leave_d = '<a data-toggle="tooltip" title= "'+leave_desc+'">L.ID : '+is_leave+'</a>';
            MobdataTable.row.add([status,day+', '+date,leave_d,'L','L']).draw();
            }
            if(is_leave==''){
             var status = '<img style="height:20px;width:20px;" src="http://localhost/larasaas/public/attimage/abs.jpg" />';
            MobdataTable.row.add([status,day+', '+date,'A','A','A']).draw();
            }
          } 
        }   // check absent and sunday

        if(day!='SUN' && timein!='' && timeout!='' && allow_late>timein && timein!=timeout && timeout!=timein){
      
        var status = '<img style="height:20px;width:20px;" src="http://localhost/larasaas/public/attimage/pre.jpg" />';
        MobdataTable.row.add([status,day+', '+date,timein,timeout,totaltime]).draw();
        }
        if(day!='SUN' && timein!='' && timeout!='' && allow_late>timein && timein==timeout){
   
        var status = '<img style="height:20px;width:20px;" src="http://localhost/larasaas/public/attimage/pre.jpg" />';
        MobdataTable.row.add([status,day+', '+date,timein,'-',totaltime]).draw();
        }
   
      }
    } 
    });
});
///////////////////////////////// Emp_attend /////////////////////////////////////////
// //////////////////////// delete_group /////////////////////////////////
$(".delete_group").on('click',function(){
       var con = confirm("Are You Sure!");
        if (con == true) {
          var delete_group = $(this).attr("id");
          jQuery.ajax({
          type:"GET",
          url:"delete_group",
          data:{delete_group:delete_group},    // multiple data sent using ajax
            success: function (data) {
             window.location.reload();
        }
      });
        }
    });

$(".delete_client").on('click',function(){
       var con = confirm("Are You Sure!");
        if (con == true) {
          var delete_client = $(this).attr("id");
          jQuery.ajax({
          type:"GET",
          url:"delete_client",
          data:{delete_client:delete_client},    // multiple data sent using ajax
            success: function (data) {
             window.location.reload();
        }
      });
        }
    });
//////////////////////////////////client_active///////////////////////////////////////
$(document).on('change', '.client_active', function(event) {
  event.preventDefault();
  var client_id = $(this).val();
  var group_id = $(this).attr('id');
  jQuery.ajax({
          type:"GET",
          url:"client_active",
          data:{client_id:client_id,group_id:group_id},    // multiple data sent using ajax
            success: function (data) {
             console.log('Client Active Successfully');
        }
      });
});

//////////////////  school_profile_active //////////////////////

$(document).on('change', '.school_profile_active', function(event) {
  event.preventDefault();
  var client_id = $(this).val();
  var group_id = $(this).attr('id');
  jQuery.ajax({
          type:"GET",
          url:"school_profile_active",
          data:{client_id:client_id,group_id:group_id},    // multiple data sent using ajax
            success: function (data) {
             console.log('School Profile Active Successfully');
        }
      });
});
//////////////////////////////////////////////////////////////////

$(".delete_profile_school").on('click',function(){
  var con = confirm("Are You Sure!");
  if (con == true) {
    var delete_id = $(this).attr("id");
    jQuery.ajax({
      type:"GET",
      url:"delete_profile_school",
      data:{delete_id:delete_id},    // multiple data sent using ajax
      success: function (data) {
        window.location.reload();
      }
    });
  }
});
//////////////////////////////////////////////////////////////////////
$(".delete_progress_des").on('click',function(){
  var con = confirm("Are You Sure!");
  if (con == true) {
    var delete_id = $(this).attr("id");
    jQuery.ajax({
      type:"GET",
      url:"delete_progress_des",
      data:{delete_id:delete_id},    // multiple data sent using ajax
      success: function (data) {
        window.location.reload();
      }
    });
  }
});
//////////////////////////////////////////////////////////////////

$('#status_class').change(function(){
  var classname = $('#status_class').val();
  if(classname!=''){
  $('#status_stud_id').removeAttr('disabled');
  jQuery.ajax({
        type:"GET",
        url:"class_students",
        dataType:'json',
        data:{classname:classname},    // multiple data sent using ajax
            success: function (data) {
                $('#status_stud_id option').remove();
                $('#status_stud_id').append('<option></option>');
                for(var i=0;i<data.length;i++)
               {
                    var name = data[i]['name'];
                    var studid = data[i]['studid'];
                    var father = data[i]['father'];
            $('#status_stud_id').append('<option value = "'+studid+'">'+ name +' '+father+'</option>');
                }
              $('#PS_student').show('slow/400/fast');
              $('#status_table').show('slow/400/fast');
            
              }
      });
  }
  else if(classname ==''){
    $('#status_stud_id').attr('disabled','disabled');
    $('#PS_student').hide('slow/400/fast');
    $('#status_table').hide('slow/400/fast');
  }
});

//////////////////////////////////////////////////////////////////////////

$(".delete_status").on('click',function(){
  var con = confirm("Are You Sure!");
  if (con == true) {
    var delete_id = $(this).attr("id");
    jQuery.ajax({
      type:"GET",
      url:"delete_status",
      data:{delete_id:delete_id},    // multiple data sent using ajax
      success: function (data) {
        window.location.reload();
      }
    });
  }
});
////////////////////////////////  progress_month //////////////////
$("#progress_month").change(function(){
  var month = $("#progress_month").val();
  jQuery.ajax({
    type:"GET",
    url:"get_month_progress",
    data:{month:month},    // multiple data sent using ajax
    success: function (data) {

      if(data !=''){
      $("#progress_not_found").hide('slow/400/fast');
      $("#parent_progress_post").html(data);
      $("#parent_progress_post").show('slow/400/fast');
      
      }
      if(data ==''){
        $("#parent_progress_post").hide('slow/400/fast');
        $("#progress_not_found").show('slow/400/fast');
      }
    }
  });
});



});