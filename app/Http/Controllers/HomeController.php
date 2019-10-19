<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Location;
use Illuminate\Support\Facades\Auth;
use App\User;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('create_address');
    }

    public function check_user()
    {
        echo $guide = Auth::user()->guide;
    }

    public function update_user()
    {
        User::where('id',Auth::user()->id)->update(['guide' => 1]);
    }

    public function get_location()
    {
        $user_id = Auth::user()->id;
        $Location = Location::where('user_id',$user_id)
        ->get()
        ->toJson();
        return $Location;
    }
    public function add_location(Request $req)
    {
        $user_id = Auth::user()->id;
        $Location = Location::insert([
            'user_id'=>$user_id,
            'lat'=>$req->lat,
            'lng'=>$req->lng,
            'description'=>$req->description,
            'location_status'=>'1'
        ]);
        echo 1;
    }
    public function addresses_list()
    {
        $user_id = Auth::user()->id;
        $location_list = Location::where('user_id',$user_id)
        ->get();
        return view('addresses_list',['location_list' => $location_list]);
    }

    public function update_locations(Request $request)
    {
        $add_id = $request->add_id;
        $action = $request->action;

        if ($action == 'Active') {
            
            Location::where('id',$add_id)->update(['location_status' => '1']);
        }
        if ($action == 'Disabled') {
            
            Location::where('id',$add_id)->update(['location_status' => '0']);
        }
        if ($action == 'Delete') {
            
            Location::where('id',$add_id)->delete();
        }

        return $this->get_location();
    }
    public function edit_address($id)
    {
        $location = Location::where('id',$id)->first();
        return view('edit_address',['location' => $location]);
    }

    public function update_address(Request $req)
    {
        $description = $req->description; 
        $lat = $req->lat;
        $lng =  $req->lng;
        $add_id = $req->add_id;

        Location::where('id',$add_id)->update([
            'description' => $description,
            'lat' => $lat,
            'lng' => $lng
        ]);

    }
}
