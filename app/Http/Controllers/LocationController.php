<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Location;

class LocationController extends Controller
{
    public function store(Request $request)
    {
        $request->validate(['description' => 'required|string|max:255']);
        Location::create(['description' => $request->description]);
        return redirect()->back();
    }

    public function update(Request $request, $id)
    {
        $Location = Location::find($id);
        $Location->update($request->input());
        return redirect()->back();
    }

    public function delete($id)
    {
        $location = Location::find($id);
        $location->delete();
        return redirect()->back();
    }

    public function index()
    {
        return Inertia::render('locations/locations', [
            'locations' => Location::whereNull('deleted_at')->get(),
        ]);
    }


}
