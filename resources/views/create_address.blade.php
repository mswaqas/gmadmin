@extends('layouts.master')

@section('title')
Create Address
@stop
@section('header')
@include('layouts.header')
@stop

@section('sidebar')
@include('layouts.sidebar');
@stop
@section('content-wrapper')
<section class="content-header">
      <h1>
        Choose a Location
        <small>Preview</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Choose a Location</li>
      </ol>
</section>
@section('content')
<section class="content">

<div class="row">      
    <div class="col-md-12" style=" background-color: white;">
    
        <div id="map" style="width: 100%;height: 450px;"></div>

    </div>
</div>

</section>

<div class="modal" tabindex="-1" role="dialog" data-keyboard="false" data-backdrop="static">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title"><b>How to Create Location</b></h4>
      </div>
      <div class="modal-body">
       <ul>
          <li>Single click on Map which location you want to choose. After chose the location marker will dropped on map.</li>
          <li>Click on marker then information window will be open and type the description & click on save button.</li>
          <li>If you want to remove marker from map before save then right click on marker it will be removed.</li>
      </ul>
      </div>
      <div class="modal-footer">
        <button type="button" id="got_it" class="btn btn-primary">Got, It</button>
      </div>
    </div>
  </div>
</div>


@endsection
@endsection

