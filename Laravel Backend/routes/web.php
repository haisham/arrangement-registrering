<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/api', function () {
    return view('welcome');
});

Route::get('/api/events', 'EventController@getAllEvents');
Route::post('/api/register-user', 'EventController@registerUser');
Route::get('/api/registrations-overview/{eventid}', 'EventController@registrationsOverview');


