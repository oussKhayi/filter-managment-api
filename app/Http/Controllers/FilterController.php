<?php

namespace App\Http\Controllers;

use App\Models\Filter;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PhpParser\Node\Stmt\TryCatch;

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

public function update(Request $request, $id)
{
    $filter = Filter::find($id);
    if(is_null($filter)){
        return response()->json([
            'message'=>"Filter doesn't exist!"
        ],404);
    }else{
        DB::beginTransaction();
        Try{
                    // Validate the request data
                    $request->validate([
                        'local_code' => 'required|unique:filters',
                        'global_code' => 'required|unique:filters',
                        'dimension_form' => 'required',
                        'type' => 'required',
                        // 
                        'dimensions' => 'nullable',
                        'images' => 'nullable',
                        'other_company_codes' => 'nullable',
                        'supported_cars' => 'nullable',
                        // Add validation rules for other fields as needed
                    ]);
                    // Set each field individually
                    // $filter->local_code = $request('local_code');
                    // $filter->global_code = $request('global_code');
                    // $filter->dimension_form = $request('dimension_form');
                    // $filter->type = $request('type');

                    
                    $filter->local_code = $request->input('local_code');
                    $filter->global_code = $request->input('global_code');
                    $filter->dimension_form = $request->input('dimension_form');
                    $filter->type = $request->input('type');

                    // 
                    // $filter->dimensions = $request('dimensions');
                    // $filter->images = $request->;
                    // $filter->other_company_codes = $request('other_company_codes');
                    // $filter->supported_cars = $request('supported_cars');
                    $filter->save();
                    DB::commit();
        }catch(\Exception $err){
            DB::rollBack();
            $filter=null;
        }
        if(is_null($filter)){
            return response()->json([
                'status'=>0,
                'message'=>"Internal server error!",
                'error_message'=>$err->getMessage()
            ],500);
        }else{
            
            return response()->json([
                'status'=>0,
                'message'=>"Filter updated successfully!"
            ],200);
        }
    }

    
    // try{

    //     if ($filter) {
    //                 // Validate the request data
    //         $request->validate([
    //             'local_code' => 'required|unique:filters',
    //             'global_code' => 'required|unique:filters',
    //             'dimension_form' => 'required',                
    //             'type' => 'required',
    //             // 
    //             'dimensions' => 'nullable',
    //             'images' => 'nullable',
    //             'other_company_codes' => 'nullable',
    //             'supported_cars' => 'nullable',
    //             // Add validation rules for other fields as needed
    //         ]);
    //         // Set each field individually
    //         $filter->local_code = $request('local_code');
    //         $filter->global_code = $request('global_code');
    //         $filter->dimension_form = $request('dimension_form');
    //         $filter->type = $request('type');
    //         // 
    //         // $filter->dimensions = $request('dimensions');
    //         // $filter->images = $request->;
    //         // $filter->other_company_codes = $request('other_company_codes');
    //         // $filter->supported_cars = $request('supported_cars');

    //         // Save the changes
    //         $filter->save();
    //         DB::commit();

    //         // Optionally, you can return the updated filter as a response
    //         // return response()->json($filter);
    //         return response()->json([
    //             'message'=>"Filter successfully updated"
    //     ],200);
    //     }else{
    //         return response()->json(['error' => 'Filter not found'], 400);
            
    //     }
        
        
    // }catch(\Exception $e){
    //     return response()->json([
    //         'message'=>"Something went wrong!"
    //     ],500);
    // }

    
}

    
    // public function update(Request $request, $id){
    //     // Validate the request data
    //     $request->validate([
    //         'local_code' => 'required|unique:filters,local_code,' . $id,
    //         'global_code' => 'required|unique:filters,global_code,' . $id,
    //         'dimension_form' => 'required',
    //     ]);
    
    //     $filter = Filter::find($id);

    //     if (!$filter) {
    //         return response()->json(['error' => 'Filter not found'], 404);
    //     }

    //     // Update the Filter with the new data
    //     $filter->update($request->all());

    //     // Optionally, you can return the updated Filter as a response
    //     return response()->json($filter);
    // }

}