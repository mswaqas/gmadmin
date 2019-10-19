<section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="{{asset('assets\dist\img\user2-160x160.jpg')}}" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>{{Auth::user()->name}}</p>
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
      <ul class="sidebar-menu">
        <li class="header">MAIN NAVIGATION</li>
  
        <li><a href="{{url('CreateAddress')}}"><i class="fa fa-circle-o text-red"></i> <span>Create Address</span></a></li>
        <li><a href="{{url('AddressesList')}}"><i class="fa fa-circle-o text-yellow"></i> <span>Addresses List</span></a></li>

      </ul>
    </section>