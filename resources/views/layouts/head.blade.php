<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  
  <title>@yield('title')</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta name="csrf-token" content="{{ csrf_token() }}" />
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <link rel="stylesheet" href="{{asset('assets/bootstrap/css/bootstrap.min.css')}}">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
   <link rel="stylesheet" href="{{asset('assets/plugins/daterangepicker/daterangepicker-bs3.css')}}">


   <link rel="stylesheet" href="https://cdn.datatables.net/1.10.15/css/jquery.dataTables.min.css">
   <link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.3.1/css/buttons.dataTables.min.css">

   <!-- <link rel="stylesheet" href="{{asset('assets/plugins/datatables/jquery.dataTables.min.css')}}">
   <link rel="stylesheet" href="{{asset('assets/plugins/datatables/buttons.dataTables.min.css')}}"> -->

  <link rel="stylesheet" href="{{asset('assets/plugins/datepicker/datepicker3.css')}}">
   <link rel="stylesheet" href="{{asset('assets/plugins/timepicker/bootstrap-timepicker.min.css')}}">
   <link rel="stylesheet" href="{{asset('assets/dist/css/jquery-ui.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/dist/css/bootstrap-select.css')}}">
   <link rel="stylesheet" href="{{asset('assets/dist/css/print.css')}}">
  <link rel="stylesheet" href="{{asset('assets/plugins/datatables/dataTables.bootstrap.css')}}">
   <link rel="stylesheet" href="{{asset('assets/plugins/iCheck/all.css')}}">
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
  <link rel="stylesheet" href="{{asset('assets/dist/css/AdminLTE.min.css')}}">
  <link rel="stylesheet" href="{{asset('assets/dist/css/skins/_all-skins.min.css')}}">
 <link rel="stylesheet" href="{{asset('assets/plugins/iCheck/square/blue.css')}}">
  <link rel="stylesheet" href="{{asset('assets/plugins/iCheck/all.css')}}">
  <link rel="stylesheet" href="{{asset('assets/plugins/select2/select2.min.css')}}">
  <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
  <link rel="stylesheet" href="{{asset('css/custom.css')}}">
  
  <!-- Theme style -->

</head>