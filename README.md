# Event registration interface
using Angular4/PHP-Laravel 

Server requirement:
PHP 7
Laravel min. 5.3<br/>
Nodejs CLI <br/>
NPM CLI<br/>

<h1>Setup API Server:</h1>
Laravel PHP framework<br/>
<b>Installation instructions:</b><br/>
Clone directory "Laravel backend" onto the server, 
update config/database.php with database authentication info<br/>
Run following commands using artisan console<br/>
php artisan migrate (this will create tables required in db)<br/>
php artisan clear-compiled<br/> 
composer dump-autoload<br/>
php artisan optimize<br/>
<br/>


<h1>Frontend (Angular 4):</h1>
<b>Installation instructions:</b><br/>
in nodejs cli run: 
npm install<br/>
ng serve

Nodejs CLI version 6.5.0 or up
Angular CLI 


<h1>Backend structure</h1>
Routes are defined in Laravel Backend/routes/web.php<br/>
Controller is defined in Laravel Backend/app/Http/Controllers/EventController.php<br/>
CORS middlewere was added in Laravel Backend/app/Http/Middleware/Cors.php, For security reason remove this in production env.
<h2>API calls</h2>
GET /api/events  (will retrieve all available events)<br/>
POST /api/register-user (register user for event, post parameter includes fullname, email, tel.nummer, eventid)<br/>
GET /api/registrations-overview/{eventid} (will fetch all users registered for the requested eventid)<br/>

<h1>Frontend app structure</h1>
App Component : Angular Frontend/src/app/app.component.ts<br/>
Services are added in Angular Frontend/src/app/services/event.service.ts<br/>
Component for registering user for event can be found in : Angular Frontend/src/app/register-user/<br/>
Component for getting registeration overview for an event can be found in : Angular Frontend/src/app/registeration-overview/<br/>


<a href="http://35.162.97.188/frontend/" target=_blank><b>Live demo</b></a>
