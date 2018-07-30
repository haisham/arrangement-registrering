<?php

namespace App\Http\Controllers;

use App\Events;
use App\User;
use App\Registrations;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;

class EventController extends Controller
{
    private $page_length = 5;

    /*Hent alle arrangementer*/
    public function getAllEvents(){
        $events = Events::paginate($this->page_length);
        return response()->json($events);
    }

    /*Opret bruger i db og evt. tilmelde burger som deltagere i arrangement*/
    public function registerUser(Request $request) {

        $this->validate($request, [
            'email' => 'required|max:100',
        ]);

        
        $existingUser = User::where('email', '=', $request->get('email'))->first(); //tjek hvis bruger allerede er i db

        if ($existingUser === null) {
            $user = new User();
            $user->fullname = $request->get('fullname');
            $user->email = $request->get('email');
            $user->phone = $request->get('phone');
            if ($user->save()) {
                $response = $this->enrollUser($user->id, $request->get('eventid'));
                return $response;
            } else {
                $response = ['success' => 'false', 'msg' => 'fejl ved registering!'];
                return response()->json($response);
            }
            
        } else {
            $response = $this->enrollUser($existingUser->id, $request->get('eventid'));
            return $response;
        }


    }

    public function enrollUser($userId, $eventId) {

        $existingParticipant = Registrations::where('participant_id', '=', $userId)->where('event_id', '=', $eventId)->first(); //tjek hvis bruger allerede deltog i arrangement
        
        //exit();
        if ($existingParticipant === null) {
            $registration = new Registrations();
            $registration->event_id = $eventId;
            $registration->participant_id = $userId;
            if ($registration->save()) {
               $response = ['success' => 'true'];
               return response()->json($response);
            } else {
               $response = ['success' => 'false', 'msg' => 'fejl ved registering!'];
               return response()->json($response);
            }
            
        } else{

            $response = ['success' => 'false', 'msg' => 'bruger er allerede tilmeldt til arrangement!'];
            return response()->json($response);
        }

        
    }

    public function registrationsOverview($eventid) {

        $registrations = Registrations::where('event_id', '=', $eventid)
                         ->leftjoin('users as fn','fn.id', '=', 'registrations.participant_id')->get();
        return response()->json($registrations);


    }

}
