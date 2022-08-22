# Lost and Found

## Initial setup for the API (only for informational purposes)

After setting up the basic folder structure (root-level files, deployments and requiments.txt), I had to run the following commands to setup the django app:
```
docker compose -f deployments/docker-compose.yml run api django-admin startproject website .
docker compose -f deployments/docker-compose.yml run api python manage.py startapp {microservice, such as api or calculations}
```

To migrate the initial models, the ones that already come built into the Django framework, using SQLite:
```
docker compose -f deployments/docker-compose.yml run api python manage.py migrate
```

And to create a super user to have access to Django's admin interface:
```
docker compose -f deployments/docker-compose.yml run api python manage.py createsuperuser
```

To create the NextJS app, run the following command and then inform the name of the project when asked:
```
npx create-next-app@latest --ts
```

## Useful commands

To create and run new migrations every time you have a new model:
```
docker compose -f deployments/docker-compose.yml run api python manage.py makemigrations
docker compose -f deployments/docker-compose.yml run api python manage.py migrate
```

To install new dependencies to the NextJS app, simply run:
```
docker compose -f deployments/docker-compose.yml run frontend npm i {dependency name, such as tailwindcss}
```

## Terminal commands

To run Makefile, you need to have the make command installed:

```
sudo apt-get install build-essential
```

Then simply run `make install` to initialize the environment (only necessary the first time you're running the app, or after installation requirements change).

To restart the app, run `make restart`.

To view logs, such as error messages, run `make logs`.

To run migration scripts (API only), simply run `make migrate`.

To run automated tests (so far there are none), run the command `make tests`.

## Endpoints

Access http://localhost:5080/admin/ to log into the admin console.

All API endpoints are mapped to http://localhost:5080/api/ while the frontend project is mapped to http://localhost:5300/

Postman is recommended for API testing.

## TODO next

- Finish frontend
    - Fix bug on sidebar height
    - Homepage must be a list all items without an owner
        - ~~Show lost items~~
        - Sort by date found or title
        - Search by title
        - Sidebar menu must be active accordingly
    - ~~Page to insert/edit item~~
    - ~~Set an item as found (must inform the owner and date found, default current date)~~
    - Dark mode toggle
    - Fill numbers on the sidebar correctly
- Allow picture upload (need to create database field)
- Contextual messages on form submit
- Save items to Redis DB rather than SQLite
- Authentication (soon? who knows)
