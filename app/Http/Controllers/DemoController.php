<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;


class DemoController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Demo');
    }

    public function dash()
    {
        return Inertia::render('Dashboard');
    }

}
