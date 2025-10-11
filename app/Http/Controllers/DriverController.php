<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Driver;
use Illuminate\Support\Facades\Hash;

class DriverController extends Controller
{
    public function index()
    {
        return Inertia::render('drivers/drivers', [
            'drivers' => Driver::whereNull('deleted_at')->get(),
        ]);
    }

    public function updatePassword(Request $request, $id)
    {
        $driver = Driver::find($id);
        $driver->password = Hash::make($request->input('password'));
        $driver->save();
        return redirect()->back();
    }

    public function register(Request $request)
    {
        $data = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'phone' => [
                'required',
                'string',
                'max:255',
                'regex:/^\(\d{3}\) \d{3}-\d{4}$/'
            ],
            'password' => 'required|string|max:255',
        ]);

        $data['password'] = Hash::make($request->input('password'));

        Driver::create($data);
        return redirect()->route('drivers.index');


    }

    public function update(Request $request, $id)
    {
        $rider = Driver::find($id);
        $rider->update([
            'first_name' => $request->input('first_name'),
            'last_name' => $request->input('last_name'),
            'email' => $request->input('email'),
            'phone' => $request->input('phone'),
            'active' => $request->input('active'),
        ]);
        return $this->index();
    }

    public function delete($id)
    {
        $driver = Driver::find($id);
        $driver->delete();
        return Inertia::render('drivers/drivers', [
            'drivers' => Driver::whereNull('deleted_at')->get(),
        ]);
    }
}
