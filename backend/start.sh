#!/bin/bash

php artisan queue:listen &
php artisan serve --host=0.0.0.0
