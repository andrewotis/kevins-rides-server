<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\PickupLocation;

class PickupLocationController extends Controller
{
    public function store(Request $request)
    {
        $request->validate(['description' => 'required|string|max:255']);
        PickupLocation::create(['description' => $request->description]);
        return redirect()->back();
    }

    public function update(Request $request, $id)
    {
        $pickupLocation = PickupLocation::find($id);
        $pickupLocation->update($request->input());
        return redirect()->back();
    }

    public function delete($id)
    {
        $location = PickupLocation::find($id);
        $location->delete();
        return redirect()->back();
    }

    public function index()
    {
        return Inertia::render('pickup-locations/pickup-locations', [
            'locations' => PickupLocation::whereNull('deleted_at')->get(),
        ]);
    }


}
