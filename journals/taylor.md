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
      
## Sep 6, 2022 

today i started working on the photo upload from react to S3 database. I was able to get past the issues I was having by making the .env variables start with REACT_APP_. 
since i was not doing this before, the variables were all showing up as undefined. 

## Sep 7, 2022

Today I was able to complete the react to s3 AWS photo bucket pipeline. I ran into a few errors along the way but was able to get it working following the amazon docs @ https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/http-400-bad-request.html. Now that We are able to upload photos and authorization is set up, we have two main issues ahead of us. 

  - showing data in profiles: how will we get each USER's information to connect to their Owner profile and Dog profile? This is something we will need to plan out as a team
  - connecting pictures to profiles: Now that we can upload photos, how can we save each user's information to a unique bucket folder? This will allow users to only have access to their particular photos which would be the most useful for a real world type application. 

  ## Sep 8, 2022

  my internet cut out at 2PM so i had to take the passenger's seat today and helped stephen and Nicolas & Norton try to figure out the user authentication portion of the project. This is very important for us to get figured out because it is how we will connect all the information on the accounts. 

  ## sep 9, 2022

  today, yet again, I was working on getting the pictures to fully function. We have nearly the whole portion of it working now but just need to connect it. 

    - we can upload direct from React to s3 bucket
    - we can upload from django admin - leaving id for image in the database

    - now the question is how can we make this work where we can dynamically pull these photos in. 

    - my thoughts on this: i should look into how i can do this using boto3 since that is what we are using to upload to s3 from django. Thank would make the upload from react seem kinda pointless for the moment. 

    - !! look into how we can dynamically make folders in the bucket for each user. This would make it so we could do a componentDidMount and bring in all the photos that the user has. Then we would be able to filter on the page based on which one we should show. 

## Sept 12, 2022

  Today I was able, with Andrew and Victoria's help, set the foldername in S3 to be unique to each user. This allows for each user to only be able to access their own photos. Tomorrow, Victoria and I will begin to figure out how to pull these images down from S3 and into our profiles

  I am going to being writing the unit tests for POSTs tonight as well

## Sept 13, 2022

  Today I worked with Nico, Stephen, and Norton to get our authentication up and working on the front end. There was an issue with migrations that was not letting us to proceed. The error we were getting was related to auth_user. We were able to fix the issue in the following way:
    we adjusted the accounts_microservice/Dockerfile.dev CMD command to first include 'python manage.py migrate auth.' ensuring that this happened before any other migrations allowed us to correct the issue that the user models were facing in the backend. apparently the Django User model does not play well with postgres and it must be the first migration or it will not work correctly. 

  Victoria got a lot done on connecting the front end and the back end today. I feel like I would like to be doing more of that type of work right now but the authorization if by far the most important, currently. I need to help the team get this done as fast as possible so that we have time to implement the user model in the front-end back-end connections. 

  -- after hours --
  i was able to fix the issue i was having when trying to run tests for the accounts microservice using
  python manage.py test accounts ... this was not working
  error:    i was getting the auth-contrib error we were seeing before
  solution:    i created a blank folder in the accounts file with __init__.py for migrations
              i removed the migrate auth that we put in above from the Dockerfile.dev

## Sept 14, 2022

  Today Victoria and I focused on getting the pictures to load in our JS file for the dog profile creation. We were able to use some of what we learned from the backend fixing and use that for the front end JSX file. We moved the needed upload pieces from the upload image file and moved it into the dog_info js that victoria had started.

  The main issue for us was understanding how we could get the front end to upload to the same file and the backend uploads to in S3 AWS.

    we were able to do this by passing in the owner and dog ID as props to the Upload file function within our code. 

  We also made some progress on the authentication end that we have been working on for a while. Stephen was able to signup on the front end but is not being provided any token information that we will need to use the front end. 


  ## Sept 15, 2022

  We got Authentication working!!! i also had to rewrite a new unit test because we did away with the old user model when we were rewriting 

  today, we are trying to deploy our project again. we were cut short last night because heroku was having internal problems. we were not able to build deployed containers. It seems to be working this morning so we are going back after it. 

  We need to finish our Authentication stuff today and make it work for us. 