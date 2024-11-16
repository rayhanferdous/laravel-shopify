<?php

use Illuminate\Support\Facades\Route;

Route::view('{path?}', 'welcome')->where('path', '.*');
// Route::group('', function () {
// });
