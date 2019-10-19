<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Register</title>
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
        <p class="login-box-msg"><b>Register</b> to start your session</p>
          <form method="POST" action="{{ route('register') }}">
                        @csrf

                        <div class="form-group row">
                            <!-- <label for="name" class="col-md-11 col-form-label text-md-right">{{ __('Name') }}</label> -->

                            <div class="col-md-11">
                                <input style="margin-left: 15px;" id="name" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" placeholder="Name" name="name" value="{{ old('name') }}" required autofocus>
                                <span class="glyphicon glyphicon-user form-control-feedback"></span>
                                @if ($errors->has('name'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                           <!--  <label for="email" class="col-md-11 col-form-label text-md-right">{{ __('E-Mail Address') }}</label> -->

                            <div class="col-md-11">
                                <input id="email" style="margin-left: 15px;" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" placeholder="Email" required>
                                <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                                @if ($errors->has('email'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <!-- <label for="password" class="col-md-11 col-form-label text-md-right">{{ __('Password') }}</label> -->

                            <div class="col-md-11">
                                <input id="password" style="margin-left: 15px;" placeholder="Password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>
                                <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                                @if ($errors->has('password'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <!-- <label for="password-confirm" class="col-md-11 col-form-label text-md-right">{{ __('Confirm Password') }}</label> -->

                            <div class="col-md-11">
                                <input id="password-confirm" style="margin-left: 15px;" placeholder="Confirm Password" type="password" class="form-control" name="password_confirmation" required>
                                <span class="glyphicon glyphicon-retweet form-control-feedback"></span>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div style="margin-left: 15px;" class="col-md-11 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Register') }}
                                </button> or

                                <a href="{{ url('login') }}">
                                    {{ __('Log In') }}
                                </a>

                            </div>

                        </div>

                    </form>
                    
        <!-- /.social-auth-links -->
      </div>
      <!-- /.login-box-body -->
    </div>
    </body>
  </html>