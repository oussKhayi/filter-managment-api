<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('filters', function (Blueprint $table) {
            $table->id();
            $table->string('local_code')->unique();
            $table->string('global_code')->unique();
            $table->string('dimension_form')->nullable();
            $table->json('dimensions')->nullable();
            $table->json('images')->nullable();
            $table->json('other_company_codes')->nullable();
            $table->json('supported_cars')->nullable();
            $table->text('type')->nullable();
            $table->timestamps();
        });
    }
    
    // $table->enum('type', ['fuel filter', 'oil filter', 'air filter', 'cabin filter', 'hydraulic filter']);
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('filters');
    }
};