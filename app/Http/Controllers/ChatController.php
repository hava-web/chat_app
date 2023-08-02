<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class ChatController extends Controller
{
     /**
     * Show the confirm password view.
     */
    public function index(): Response
    {
        return Inertia::render('Chat/Chat');
    }
}
