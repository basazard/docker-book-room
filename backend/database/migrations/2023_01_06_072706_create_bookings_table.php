<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('room_id')->constrained();
            $table->string('title');
            $table->string('slug');
            $table->enum('type', ['Internal', 'External']);
            $table->string('user');
            $table->date('date');
            $table->time('start');
            $table->time('end');
            $table->enum('repetation', ['Never', 'Daily', 'Weekly', 'Monthly']);
            $table->string('description');
            $table->enum('status', ['Pending', 'Active']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bookings');
    }
};
