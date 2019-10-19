@extends('layouts.master')

@section('title')
Addresses List
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
       Addresses List
        <small>Preview</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Addresses List</li>
      </ol>
</section>
@section('content')
<section class="content">

<div class="row">      
    <div class="col-md-12" style=" background-color: white;">
      <div class="col-md-5">
        <div class="table-responsive">
          <table class="table" id="address_list"> 
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <!-- <th scope="col">Latitude</th>
                <th scope="col">Longitude</th> -->
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
           <?php $srno =0; ?>  
            @foreach($location_list as $location)
          <?php $srno++;?>
            <tr>
              <td>{{$srno}}</td>
              <td>{{$location->description}}</td>
              <!-- <td>{{$location->lat}}</td>
              <td>{{$location->lng}}</td> -->
              <td>  
                  @if($location->location_status == 1)
                    <a href="#" class="label label-success">Active</a>
                  @endif
                  @if($location->location_status == 0)
                    <span class="label label-danger">Disabled</span>
                  @endif
              </td>
              <td>
                <select class="form-control actions" id="{{$location->id}}" style="width: 100px;">
                  <option selected="" disabled="">Select</option>
                  @if($location->location_status == 0)
                  <option>Active</option>
                  @endif
                  @if($location->location_status == 1)
                  <option>Disabled</option>
                  @endif

                  <option>Edit</option>
                  <option>Delete</option>
                </select>
              </td>
            </tr>
            @endforeach
            </tbody>
          </table>
        </div>
        </div>
        <div class="col-md-7">
    
          <div id="map2" style="width: 100%;height:550px;"></div>

        </div>
      </div>
</div>

</section>
@endsection
@endsection

@section('script')
<script src="{{asset('js/address_list.js')}}"></script>
@endsection