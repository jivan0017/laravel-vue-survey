<?php

namespace App\Http\Controllers\Survey;

use App\Http\Controllers\Controller;
use App\Models\Survey;
use App\Http\Requests\StoreSurveyRequest;
use App\Http\Requests\UpdateSurveyRequest;
use Illuminate\Http\Request;
use App\Http\Resources\SurveyResource;
use Illuminate\Support\Facades\Storage;

class SurveyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $user = $request->user();

        return SurveyResource(Survey::where('user_id', $user->id)->paginate());
    }


    public function uploadImage(Request $request) {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $idEntity = null;
        $idEntity = $request->idEntity;

        $file = $request->file('image');
        $extension = $file->extension();
        $imageName = time() . $file->getClientOriginalName();

        $imageNameFinal = time() . str($idEntity) . '.' . $extension;
        $filePath = 'surveys/'. $idEntity. '/' .$imageName;

        $result = Storage::disk('s3')->put($filePath, file_get_contents($file), 'public');
        $path = Storage::disk('s3')->url($result);

        $survey = Survey::find($idEntity);
        $survey->image = $filePath;
        $resUpdate = $survey->save();

        return response()->json([
            'status' => true,
            'filePath' => $filePath,
            'imageName' => $imageName,
            'result' => $result,
            '$extension' => $extension,
            'idEntity' => $idEntity,
            'url' => $path
        ]);

        // if($request->hasfile('image'))
        // {
        //     $file = $request->file('image');
        //     $imageName=time().$file->getClientOriginalName();
        //     $filePath = 'surveys/' . $imageName;
        //     $result = Storage::disk('s3')->put($filePath, file_get_contents($file));
        //     return response($result, 204);
        // } else {
        //     return response()->json([
        //         'status' => true
        //     ]);
        // }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreSurveyRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSurveyRequest $request)
    {
        try {
            //code...
            $data = $request->validated();
            $survey = Survey::create($data);

            // S3
            // $file = $request->file('image');
            // $imageName=$data['image'];
            // $test_str_pos = substr($file, strpos($file, ',') + 1);


            // $folder = "surveys";
            // $image_path = Storage::disk('s3')->put(
            //     $folder, $request->image, 'public'
            // );

            return new SurveyResource($survey);
        } catch (\Exception $ex) {
            //throw $th;
            return $ex;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Survey  $survey
     * @return \Illuminate\Http\Response
     */
    public function show(Survey $survey, Request $request)
    {
        //
        $user = $request->user();

        if ($user->id !== $survey->user_id) {
            return abort(403, 'Unauthorized action.');
        }

        return new SurveyResource($survey);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSurveyRequest  $request
     * @param  \App\Models\Survey  $survey
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSurveyRequest $request, Survey $survey)
    {
        //
        $survey->update($request->validated());

        return new SurveyResource($survey);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Survey  $survey
     * @return \Illuminate\Http\Response
     */
    public function destroy(Survey $survey, Request $requst)
    {
        //
        $user = $request->user();

        if ($user->id !== $survey->user_id) {
            return abort(403, 'Unauthorized action.');
        }

        $survey->delete();

        return response('', 204);
    }
}
