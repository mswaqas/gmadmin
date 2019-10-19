<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Login</title>
    <!-- Tell the browser to be responsive to screen width -->
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
    <link rel="stylesheet" href="{{asset('assets/dropzone/basic.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/dropzone/dropzone.min.css')}}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
    <link rel="stylesheet" href="{{asset('assets/dist/css/AdminLTE.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/dist/css/skins/_all-skins.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/plugins/iCheck/square/blue.css')}}">
    <link rel="stylesheet" href="{{asset('assets/plugins/iCheck/all.css')}}">
    <link rel="stylesheet" href="{{asset('assets/plugins/select2/select2.min.css')}}">
  </head>
  <body style="background-color: #ecf0f5">
    <div class="login-box">
      <div class="login-logo">
        <a href="#"><b>GM</b>Admin</a>
      </div>
      <!-- /.login-logo -->
      <div class="login-box">
        <p class="login-box-msg">Sign in to start your session</p>
        <form class="form-horizontal" role="form" method="POST" action="{{ url('/login') }}">
          {{ csrf_field() }}
          <div class="form-group has-feedback">
            <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
              
              <div class="col-md-11" style="margin-left: 15px;">
                <input id="email" type="email" placeholder="Email" class="form-control" name="email" value="{{ old('email') }}">
                <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                @if ($errors->has('email'))
                <span class="help-block">
                  <strong>{{ $errors->first('email') }}</strong>
                </span>
                @endif
              </div>
            </div>
            
          </div>
          <div class="form-group has-feedback">
            <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
              
              <div class="col-md-11" style="margin-left: 15px;">
                <input id="password" type="password" placeholder="Password" class="form-control" name="password">
                <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                @if ($errors->has('password'))
                <span class="help-block">
                  <strong>{{ $errors->first('password') }}</strong>
                </span>
                @endif
              </div>
            </div>
            
          </div>
          <div class="row">
            <div class="col-xs-8">
              <div class="checkbox">
                <label>
                  <input type="checkbox" name="remember"> Remember Me
                </label>
              </div>
            </div>
            <!-- /.col -->
            <div class="col-xs-4">
              <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
            </div>

            <!-- /.col -->
          </div>
        </form>
        <!-- /.social-auth-links -->
        <!-- <a href="{{ url('/password/reset') }}">I forgot my password</a><br> -->
        <a href="{{ url('register') }}">Register New Account</a><br>
      </div>
      <!-- /.login-box-body -->
    </div>
    <script>
    $(function () {
    $('input').iCheck({
    checkboxClass: 'icheckbox_square-blue',
    radioClass: 'iradio_square-blue',
    increaseArea: '20%' // optional
    });
    });
    </script>
    </body>
  </html>