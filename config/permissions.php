<?php

return [
    'admin' => [
        'AdminController@index',
        'CategoriesController@index',
        'CategoriesController@create',
        'CategoriesController@edit',
        'CategoriesController@destroy',
        'CategoriesController@update',
        'CategoriesController@store',
    ],

    'editor' => [
        'AdminController@index',
        'CategoriesController@index',
        'CategoriesController@create',
        'CategoriesController@edit',
        'CategoriesController@destroy',
        'CategoriesController@update',
        'CategoriesController@store',
    ]
];