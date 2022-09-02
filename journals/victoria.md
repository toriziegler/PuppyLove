# September 1, 2022
Today I worked on:

* .gitlab-ci.yml
* flake8
* pipeline failures

    I was finally able to get my lint test to run! I ran flake8 and fixed all of the errors in both of our microservices and got the pipeline to run successfully! I am now trying to get the monolith back end test running but have run into a few errors. First I needed to adjust our settings file aws keys to get methods because it was not pulling the information from .env, I saw this was a common error online and was able to resolve the issue by changing them. I ran into another error that my database was improperly configured in my settings, I resolved this by setting the default as my postgres database and added dj_database_url.config(default='postgres://user:pass@localhost/dbname'). Another error occurred for an operational error - connection refused, I fixed the docker compose database url's for both of the microservices now that I have the Heroku postgres database set up. Tests passed for linting and for monolith microservice.

# August 31, 2022
Today I worked on:

* .gitlab-ci.yml
* Heroku deployment
* Team merging
* Admin CSS

    I realized our gitlab was under my name only rather than the group name. I got the gitlab project transferred to our group pawfessional programmers so we could use the correct URL for deployment. I continued building the deployment portion of the ci file and Heroku. We were able to resolve our merging issues as a group! Andrew assisted us in getting our admin css to reload the Django css by using the python manage.py collectstatic command within both microservice containers and adding a forward slash in the settings for the static url so it is "/static/". I created test folders for each microservice and a unit test for testing the monolith views.

# August 30, 2022
Today I worked on:

* .gitlab-ci.yml
* monolith poller
* postgres

    Continued work on CI file now that docker-compose is functioning correctly. Paused production for now because we do not have unit tests created and our back end is not complete for me to add the correct paths. I will continue working on CI once we complete back end and are ready to move on to front end. I worked with Taylor and Stephen to get the poller.py functioning, there was a ModuleNotFound error "No Module named 'puppylove.settings'" which we had set at the top of the poller. We were able to fix this by adjusting the docker-compose for the poller, the context was using the incorrect path and the AWS information needed to be added as well. Taylor and I realized that our project is currently working locally on our computers with db.sqlite3 and we need to convert everything to use postgres instead. That will be the focus of our research and programming tomorrow.

# August 29, 2022
Today I worked on:

* docker-compose.yaml
* .gitlab-ci.yml
* .flake8
* puppylove_rest/views.py

    Researching how to get my data.json information into postgres database rather than the sqlite3 db. I continued working on the CI/CD. The group worked together to fix our docker-compose file, I realized while creating the CI that some of our information was put in incorrectly, Taylor also noticed this while creating the poller. We ended up needing to move our poll directory outside of the monolith/api directory, instead now it is monolith/poll. We had some app names incorrectly input in our docker compose. We had to comment out our poller and our api service in the docker compose and work through each service starting with the monolith to make sure all directories and variables were correct. Once our docker-compose file was fixed we ran into issues starting the poller in Docker because the paths were now incorrect because we changed our directory paths. Norton and I also worked together to ensure the view functions were coded correctly, all views for dogs, owners, and states were confirmed to be working as expected. 

# August 25, 2022
Today I worked on:

* data.json - states data
* .gitlab-ci.yml

    We are experiencing a bug with our Django admin page, it is not loading the correct css and appears to just be showing with HTML format. We had a bug in our settings.py file that ended up being a missing comma between the last two items. We decided we need to alter our code to have an Accounts microservice and remove the Owner model from puppy love rest. We will then link the users to dogs that way we can use authentication services. I worked on getting a states dropdown list working with the data.json file json dictionary of states and their abbreviations. I tied the data from my data.json file to be usable to anyone using the command `python manage.py loaddata puppylove/data.json` I also worked on implementing CI/CD in our docker-compose file. 

# August 24, 2022
Today I worked on:

* puppylove_rest/views.py
* data.json - states data

    Creating GET, POST, PUT, and DELETE views with Nicolas and Norton. We were able to get it fully functioning for Dogs, and will need to work on Owners and States tomorrow. We had issues with CSRF verification with POST methods and placed the decorator for csrf_exempt so we could get our views functioning normally. We tried adding CSRF Allowed Origins, altering the allowed hosts, and adding the CSRF Cookies into settings.py, however none of these options removed the error hence the decorator. I tried to create a data.json file with all of the states and their abbreviations with preset id's so it is easier to call to later in our project and constant for anyone using the code, it is not fully functioning at the moment because I need to figure out how to tie it in with our actual models but it is on its way. 

# August 22, 2022
Today I worked on:

* puppylove_rest/models.py
* project strategy

    The team collaborated on creating our models to reinforce ubiquitous language throughout the project once we move on to paired or solo programming. While working on models we ran into an unknown territory - image file uploads for our website users. Through lots of research through docs, stackoverflow, and youtube videos we were able to determine we needed to install Pillow and use ImageField in our Django model. At the present time we have coded for the ability to upload an image as a user that is stored in the database under the path name to where it is stored in a media directory. This strategy for image storage is not practical in the real world sense if our website was to become widely popular. It would need to be updated to store images to the cloud to free up space within our program, however at this point in time the directory within our code actually saves money not having to pay for cloud space. One other problem we ran into was creating the phone number field in Django, for now we have it set as a TextField but in the future we would like to implement a specific format for user input so all phone numbers appear the same in the database.

# August 19, 2022
Today I worked on:

* project strategy

    The team collaborated on setting up our MVP and stretch goals. For now our MVP includes a profile page for dogs to include their information and a search page to show the profiles of other dogs within the user's dog's state. We updated our Excalidraw group notes and discussed ubiquitous language for our project and the microservices we will implement.  We created our docker-compose file.