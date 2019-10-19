@extends('layouts.master')

@section('title')
Update Address
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
        Choose Location & Update
        <small>Preview</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Update Address</li>
      </ol>
</section>
@section('content')
<section class="content">

<div class="row">      
    <div class="col-md-12" style=" background-color: white;">
        <form class="form-horizontal">
              <div class="box-body">
                <div class="form-group">
                  <label for="inputEmail3" class="control-label">Description</label>
                  <div class="input-group input-group-sm" style="max-width: 40%;margin-top: 11px;">
                <input type="text" class="form-control" id="description" value="{{$location->description}}">
                <input type="hidden" class="form-control" value="{{$location->id}}" id="add_id">
                <input type="hidden" class="form-control" id="LAT">
                <input type="hidden" class="form-control" id="LNG">
                    <span class="input-group-btn">
                      <a href="#" id="update_map" class="btn btn-info btn-flat">Update</a>
                    </span>
              </div>
                </div>
              </div>
            </form>

        <div id="map3" style="width: 100%;height: 450px;"></div>

    </div>
</div>

</section>
@endsection
@endsection
@section('script')
<script src="{{asset('js/edit_address.js')}}"></script>
@endsection
