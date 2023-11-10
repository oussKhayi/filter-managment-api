<?php

namespace App\Http\Controllers;

use App\Models\Filter;
use App\Models\User;
use FFI;
use Illuminate\Http\Request;

class FilterController extends Controller
{
    public function index(){
        $filters = Filter::all();
        return response()->json([
            'filters'=>$filters
        ],200);
    }
    public function show($id){
        $filter = Filter::find($id);
        return response()->json([
            'filter'=>$filter
        ],200);
    }


    public function store(Request $request)
{
    // Validate the request data
    // $request->validate([
    //     'local_code' => 'required|unique:filters',
    //     'global_code' => 'required|unique:filters',
    //     'dimension_form' => 'required',
    //     // Add validation rules for other fields as needed
    // ]);

    // Create a new filter with the request data
    // $filter = Filter::create($request->all());

    $filter = new Filter();
    $filter->local_code = $request->input('local_code');
    $filter->global_code = $request->input('global_code');
    $filter->dimension_form = $request->input('dimension_form');
    $filter->dimensions = $request->input('dimensions');
    $filter->images = $request->input('images');
    $filter->other_company_codes = $request->input('other_company_codes');
    $filter->supported_cars = $request->input('supported_cars');
    $filter->type = $request->input('type');
    // Set other fields individually

    $filter->save();
    // Optionally, you can return the created filter as a response
    return response()->json($filter, 201);
}


    
    public function update(Request $request, $id){
    // Validate the request data
    $request->validate([
        'local_code' => 'required|unique:filters,local_code,' . $id,
        'global_code' => 'required|unique:filters,global_code,' . $id,
        'dimension_form' => 'required',
    ]);
    $user = User::find($id);
    if (!$user) {
        return response()->json(['error' => 'User not found'], 404);
    }

        // Update the user with the new data
        $user->update($request->all());

        // Optionally, you can return the updated user as a response
        return response()->json($user);
    }

}