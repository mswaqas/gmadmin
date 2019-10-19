<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Auth::routes();
Route::get('/', 'HomeController@index')->name('home');
Route::get('CreateAddress', 'HomeController@index');
Route::post('GetLocations', 'HomeController@get_location');
Route::post('AddLocation', 'HomeController@add_location');
Route::get('AddressesList', 'HomeController@addresses_list');
Route::post('UpdateLocations', 'HomeController@update_locations');
Route::get('AddressEdit/{id}', 'HomeController@edit_address');
Route::post('UpdateAddress', 'HomeController@update_address');
Route::post('CheckUser', 'HomeController@check_user');
Route::post('UpdateUser', 'HomeController@update_user');
