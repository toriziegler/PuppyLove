## Aug 19, 2022

Today, I worked on:

* Building the docker-compose.yaml file

The team all worked together to build out the docker-compose
file. We ran into many questions and errors along the way

#Create-User postgres-data# - for the postgres database. 
 ERROR: syntax error at or near -
 we were able to rename this to "postgresdata" without the - and it worked that way. We were not following naming conventions.

## Aug 22, 2022

* trying to understand Django picture_field

the team today did some research to try and glean how we could use django's picture field to allow users to upload their own photos. 

This seems to be a bit more involved then we first though. We currently have the images saving locally but are looking into cloud based storages where we can call a URL and have images stored on the cloud rather than needing to store them locally on a hard drive. (they wouldn't show up for anyone else this way)

Things to look into more ( PILLOW & Cloudinary )
  these two services seem to be able to work with django to store photos in the cloud for our use. This would allow all users to see photos uploads and we could filter from there. 

## Aug 23, 2022

* understanding that Cloudinary will not be useful to us once we deploy
* study on AWS and how we can use this service for our media and documentation

At the beginning of the day I though we would be able to use Cloudinary but that turned out not to be the case. I created a view and a template to test this out to see if it was a viable solution. When the rest of the group pulled my code from gitlab they were not able to see the same picture data that I had in my volume because volumes are not committed along with other data. 

This makes sense. As Danial put it, media and file date is extremely large and can mess up databases when they are put into them. Because of this, we will need to make dummy data for the data we are able to hard code and have that auto-run on start-up. Any persisting data, like pictures, will need to be stored on a service such as AWS 

## Aug 24, 2022

Today we were able to set the correct permissions for AWS bucket to make it public. This allowed us all to upload photos. We currently are able to use a form and the admin to add these photos to the bucket. We do not have the React set up to handle the uploading of photos but are getting closer to that. We are able to display photos using react. 

one issue we are trying to think through is, "how do we ensure we are filtering the correct photo from the one uploaded."
  - We can attach the photos to both the user and the dog item and filter this way

  - the dynamic way would be to save the file name as a uuid or something and use that to become the file name. Then use that to call that item. 


## Aug 25, 2022 (Friday)

Today I changed gears. We realized that the Owner should be it's own Microservice, similar to how the inventory and sales departments were implemented. I spent most of today with Nicholas trying to get a new docker-compose to work correctly.

once that was able to run we ran through all the code that contained that information in the monolith and moved it to the new Django project for our accounts microservice. We will try to implement a poller next week so we can get the monolith up and running again with the information accurately pulling from the accounts microservice. We had to comment out a bunch of code in order to get monolith back to a good state. We will be able to test our code this way for the poller but uncommenting what we need will be hard. 


## Aug 29, 2022

Today I was charged with completing the accounts microservice and fixing error in our docker compose yaml file. We were able to get the yaml file to where it needed to be but we still are having issues with the poller

## Aug 30, 2022

today we fixed issues with the poller but are still having issues with our backend server connecting to our django project. We spent most of the day researching how to connect postgres. This still does not seem to be working as the migrations are not happening. More will be needed on this tomorrow. 

## Aug 31, 2022

was able to connect to the postgres database by putting this command in the dockerfile.dev... ran >>> python manage.py migrate --run-syncdb

## Sep 1, 2022

Today was pretty good. Victoria was working on CI CD while Nico and Norton tried to tackle authentication using DjangoREST. Stephen and I started working on connecting the front end to the back-end. 

We were able to set up the owner-information page to successfully submit new members to the backend. I was also able to fix the polling issue that we were having so we could make dog objects in the django admin using the ownerVO. I am feeling good going into friday that we will be able to finish our MVP in time. We are planning to meet for a few hours over the long weekend to get some more work done. 

## Sep 2, 2022

victoria was able to deploy our website! awesome news. Looks like we have to change the paths in settings for our default database location when we deploy. This change will only be made on our deployed branch. 

I was able to help the team with a few errors today. 

I have a feeling there will be more errors to come. I need to work on these parts moving forward. 
      - fix the upload photo link on the front end.
      