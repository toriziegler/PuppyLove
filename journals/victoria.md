# September 16, 2022
Today I worked on:

* Deployment

    Heroku has been fixed and is now created the owner instance with an id in the postgres database. Our accounts microservice was working fully in the morning and we are trying to get the monolith service to work, but the poller is currently down. I fixed the url variables throughout the project to have localhost portions commented out but available for us, and the REACT_APPs uncommented so it is ready for deployment.  

# September 15, 2022
Today I worked on:

* Deployment

    I worked on getting our code fully deployed on heroku. We ran into CORS issue and were not able to pull any data into the website. Andrew and I fixed this by adding the deployment public url to cors allowed origins in both microservice settings.py. We also added all of the heroku domains for each of the apps and pollers and integrated those into the front end urls. Heroku crashed around 9pm and was failing all deploy jobs, giving an error that the login was not working and the postgres data base was not configuring correctly. 

# September 14, 2022
Today I worked on:

* Authentication
* AWS photos

    I worked with Taylor, Stephen, and Nicolas to get the signup page functioning properly. I adjusted the page to handle submission and generate the success message I set up for dog info and owner info pages. Taylor and I got the photos to Taylor had first created a file called "UploadImageToS3.jsx" that had the entire function and return jsx format for submitting photos to AWS and pulling them back down. We pulled the contents of this file and imported them into our DogInfo.js file so that we could submit photos to AWS when creating a dog instance, and simultaneously assign the key to that specific dog instance and owner being created. We got help from Andy when it came to tying in the props and figuring out how to dynamically create the key within while the instance was still being created. 

# September 13, 2022
Today I worked on:

* Form Submissions

    I double checked the owner and dog info pages to make sure the were submitting information correctly now that the models had been updated. I fixed the forms to match the models but noticed they were not submitting correctly because there was a link added to the submit button to reroute to the profile page on submission. This was causing the page to not actually submit the information before rerouting. I then changed the forms so that upon submission they will reload to a page that has the form removed and a success message confirming their information was submitted and telling them what their next steps are. I ran into an error on the owner information page that said "this.state.owners.map() is not a function", I found on stackoverflow that I needed to add "this.state.owners && this.state.owners.map()" to make it work again. The form is now submitting without errors. I then adjusted the background images to not contrast so harshly on each of the pages by lowering the background opacity to 0.9. The group merged our code in together but after merging we are not passing the accounts unit tests and the pipeline is failing. We realized it is because we don't have migrations files in our accounts microservice, we put in a help ticket to resolve this in the morning.

# September 12, 2022
Today I worked on:

* Personal Profile Page
* Updated DogInfo Page

    I recreated our personal profile page to instead show cards now for each of the owner's dog instances. For the time being I have a dropdown menu at the top to choose the dog owner and see their dog profiles. Eventually I want to be able to auto-generate this based on authentication - each owner should be tied to a user. When that user is logged in, the personal profile page will show only their dogs. I also worked with Taylor on how to adjust the AWS S3 bucket path to have a unique name tied to the dog or owner so I am able to call to it in the front end react component. I started updated the doginfo.js file to match our updated dog model, some fields were missing including dropdown menus to choose gender and size of dog. 

# September 9, 2022
Today I worked on:

* List All Dog Profiles Page

    I was able to create a bootstrap card for each dog instance in my database, and created a function so that they are able to wrap in a clean way of three cards to a row. While working on creating new dog instances to make sure the data was being presented correctly, I realized the poller was only pulling one owner instance at a time to the ownervo. My admin page and insomnia were alternating between the two owner instances I had but only showing one at a time. I realized that the poller was not assigning a new id for each new owner instance coming in, so they were just repeatedly overriding each other. I fixed this by adding id=owner["id"] in the objects.update_or_create function. 

# September 8, 2022
Today I worked on:

* Personal Profile Page

    I decided to first try to get the profile page to have an owner drop down menu, then based on the owner you choose a list of their dogs would show. Once I got this fully functioning though I realized I would need to separate the dogs out in a more clear and personalized way so I decided to create bootstrap cards to show the data. However I had trouble conceptualizing how to do this with filtering the owners and decided tomorrow I will try first creating the list all profiles page for all dog bootstrap cards, then try implementing that working code into the personal profile page once authentication is figured out.


# September 7, 2022
Today I worked on:

* DogInfo.js

    Norton and I started to work on the dog info file for react to make sure that the dog instances were being created. I noticed our form was not fully submitting because our back end view requires the dog instance be attached to an owner. To fix this problem I attached a drop down menu onto the dog info form to allow the user to assign an owner to the dog. However in the future we may want to get rid of this feature and automatically assign the new dog to the user signed in and only allow each user to create one owner instance for themselves.

# September 6, 2022
Today I worked on:

* Front-End/Back-End connections

    Norton and I started to work on debugging the owner information page today, however we got stuck for a while on an error with his package-lock.json file. We ended up needing to delete his package-lock file, delete the node_modules folder, and run npm install again. Otherwise, I got the pipeline merge errors fixed for the main branch so everyone was able to pull my deployable product from the weekend. 

# September 2, 2022
Today I worked on:

* Deployment!

    Today the team pushed all recent changed to the main branch and tested out the CI pipeline - all code is up to date, passing unit tests and lint tests. I worked on getting the project fully deployed. I ran into some minor errors while building but was able to get the project fully deployed on heroku today and visit the public url page! 

# September 1, 2022
Today I worked on:

* .gitlab-ci.yml
* flake8
* pipeline failures

    I was finally able to get my lint test to run! I ran flake8 and fixed all of the errors in both of our microservices and got the pipeline to run successfully! I then tried to get the monolith back end test running but ran into a few errors. First I needed to adjust our settings file aws keys to get methods because it was not pulling the information from .env. I saw this was a common error online and was able to resolve the issue by changing them from brackets with variable names to get methods so if the variables returned "None" it would not throw an error. I ran into another error that my database was improperly configured in my settings. I resolved this by setting the default as my postgres database and added dj_database_url.config(default='postgres://user:pass@localhost/dbname'). Another error occurred for an operational error - connection refused, I fixed the docker compose database url's for both of the microservices now that I have the Heroku postgres database set up. Tests passed for linting, accounts, and monolith microservice!

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