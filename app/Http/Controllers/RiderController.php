<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Rider;
use Illuminate\Support\Facades\Hash;

class RiderController extends Controller
{
    public function index()
    {
        return Inertia::render('riders/riders', [
            'riders' => Rider::whereNull('deleted_at')->get(),
        ]);
    }

    public function updatePassword(Request $request, $id)
    {
        $rider = Rider::find($id);

        $rider->password = Hash::make($request->input('password'));
        $rider->save();
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

        Rider::create($data);
        return redirect()->route('riders.index');


    }

    public function update(Request $request, $id)
    {
        $rider = Rider::find($id);
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
        $rider = Rider::find($id);
        $rider->delete();
        return Inertia::render('riders/riders', [
            'riders' => Rider::whereNull('deleted_at')->get(),
        ]);
    }
}
