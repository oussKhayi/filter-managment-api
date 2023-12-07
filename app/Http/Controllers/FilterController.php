<?php

namespace App\Http\Controllers;

use App\Models\Filter;
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
    public function paginationFilters(Request $request){
        $filters = Filter::query()->paginate(2);
        return response()->json([
            'filters'=>$filters
        ],200);
    }
    
    public function show($id)
    {
        $filter = Filter::find($id);
    
        if (is_null($filter)) {
            return response()->json([
                'message' => "Filter doesn't exist!"
            ], 404);
        } else {
            return response()->json([
                'filter' => $filter,
                'message' => "Filter found successfully!"
            ], 200);
        }
    }    


    public function store(Request $request)
{


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
                        'dimensions' => 'nullable',
                        'images' => 'nullable',
                        'other_company_codes' => 'nullable',
                        'supported_cars' => 'nullable',
                        
                    ]);
                    
                    
                    $filter->local_code = $request->input('local_code');
                    $filter->global_code = $request->input('global_code');
                    $filter->dimension_form = $request->input('dimension_form');
                    $filter->type = $request->input('type');                
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

    
}


}