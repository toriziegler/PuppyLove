## Aug 19, 2022

We as a group work on this day to be able to create the docker-compose file. It was easy because we all five were looking through it and talking and fixing bugs about it. I didn't type anything but still I think I help the group to be able to bring the containers up. We created the databases for our projects too.

## Aug 22, 2022
Today we as group worked on creating the models we are going to use for the MVP of the project. It was easy as we've been doing this for many projects. We wanted to figure out how to use the "phone number field" for our model, but we weren't sure how to do so. We just kept the normal way we do it and we eventually figure how to use it. Also, we implemented the ImageField which at this point let us upload an image and see it locally on our database and django admin, but we will have to figure it out on how to do it dynamic so everyone can see it.

## Aug 23, 2022
* After talking with Daniel we understood that Cloudinary wouldn't be useful. We are going to try to implement AWS for our project.

We started to test our models in the django admin and figure out we were having some conflix. We decided to use ForeingKeys from some properties of the models and be able to connect them. 

* blockers:
  - how to make the states to populate for all of our users as a dropdown? we figure out that there was a django model field that help us with that but apparently it was turn down. Then, we saw that for a previous project we had the data coming from a json file so that might be the way we need to go if we want the states to be a dropdown.

## August 24, 2022

On this day I worked in:

I worked in typing the views, urls and fixing the models for the project. I work as a the writer of all of the changes we made on this day of the backend. Having Victoria and Norton to walk with me and help me debug was crucial to have it all the views we could knock today. We tested on insomnia and they were working fine, the only we now need to do is fix the update view for the dogs and create a view to specific get one, update it and delete. Shouldn’t be much of an issue.

## August 25, 2022

On this day I worked in:

Today I worked with Taylor. We figure it out that it would be a better idea to have the owners(accounts) in its own microservice and connect them to the dogs by the polling system. It is still a headache and we are approaching the end of the day and we still have a lot of things to try it to work. Moving the models, views, urls, setting up [settings.py](http://settings.py) file, the docker images, the [dockerfile.dev](http://dockerfile.dev), the [poller.py](http://poller.py) file and the overall structure of how to move the microservice is still giving us issue. I worked as a driver today and working with Taylor makes it a lot easier to understand, he knows to explain almost all the questions that I have and is good at planning to get solutions. We are not still working on the microservice yet but trying to set it up, hopefully we can knock this out and focus to work on that on monday.

## August 29, 2022
we found an issue with our docker compose file so we all as group started debugging and eventually fixing it with the help of instructors.

## August 30, 2022

Today I started to work with Norton and Stephen  struggling with the authentication. We don't know what method to use to connect it to the backend. There's a bunch from what I read, but some of them are just outdated. Will have to figure out what to use in order to be able to connect accounts effectively to the owners.

## August 31, 2022

We worked today in mergin stuff to the main. I didn't actually have too much to push to main because I was working as a navigator last days, so I just was patiently waiting while trying to help somehow my partners. I figured out I needed to do something to start feeling myself more productive, so I went into another breakout room to start trying to figure out which method to use to work on the authentication backend and frontend. I found a youtube video which felt very easy to follow along and just started to type things on the files we already got in our project. It was somehow outdated, so it wasn't as easy as I thought in the first place so I will keep working on that tomorrow.

## September 01, 2022

So when I was trying to follow the tutorial I was watching on youtube, issues started to come through and it was very dificul to figure it out with all the other stuff we had previously pass to the react pages. Backend authentication was working nicely as it should, but couldn't figure out a way to connect it propertly to the frontend. So I decided to push my broken code to a branch, create a new branch and delete all the stuff and files in the frontend that I wouldn't have to use right now so I could only focus in the frontend. I'll have to keep working on this tomorrow

## September 02, 2022

Today I worked in trying to connect the auth backend to the frontend and the frontened auth itself. I got through a new step, was able to create a private route for my tokens succesfully, but for some reason my AuthContext.js wasn't fully working. It was giving me issues while trying to use the fetch method and while using "history" and "redirect". After doing some research in StackOverflow, I figure out on this things were outdated and quickly was able to fix all of that. Also, I had to install some nmp jwt-decode to the project, and I was trying to do it through the requirements.txt but after asking Neil, he told me that the Javascript libraries go in the package.json and the requirements is for Python. That's a new one. I fixed some issues but others kept popping up. I think I'll have to work on this on the weekend.

## September 05, 2022

Today is our day off, but I had to finish authentitication today. Not that I had to, but wanted to have something to show to my group tomorrow. And finally after all the struggle and things to change, I was able to have all the Authentitication stuff working, and being able to create content for each specific user. Such an amazing feeling. I pushed to my dev branch and will show to the rest of the group how it works.

## September 06, 2022

So today I showed my group how the auth stuff worked. I worked with Stephen on trying to connect the files I had in my own branch into the main and into the actual files we want to render in our frontend, because I just did basic ones to show if the frontend was polling propertly from the backend. We figured out that as I change a lot of files, the better way would be manually merging, so I deleted the whole project and pull from gitlab. It came with an issue that I didn't know how to fix. We were debugging it and couldn't find an answer until almost attendance when Andrew came out to solve my help ticket and helped me figure out I was missing the .env file that we weren't pushing to gitlab. We Will have to work in the manual merging tomorrow but at least I know another issue I could run while pulling from git.

## September 07, 2022

Today I spent almost all day working with stephen to be able to merge our auth stuff into main. The thing is that login/logout was working propertly, but wasn't giving the correct token so. And I figure out today that eventually we would want to sign up too, so I'll have to take a look on fixing the login to grab the tokens and eventually figure a way with this jwt to work.

## September 08, 2022

So we figure out that the login was working propertly and started working in the signup backend with Norton. We ran into a bunch of docker crashes but eventually talking with Daniel he made me figure out a way to be able to manage the Django User model. A quick fix was made into our settings and we were set to mess with things around. We help taylor find the las bug that was hindering the AWS from taking in pictures from users (or rather he found it within the first min of walking the rest of us through what he was doing, so we could help him find the bug).

## September 09, 2022

Now today we were trying to implement the sign up backend into the frontend but it wasn't working. There was an issue about auth=group does not exist. After some research, we eventually figure out it was a migrations problems and this is because as we are now using docker and postgres, they ran automatically the migrations once the container is up. The container was always going out getting break because it wasn't catching the migrations for the new user. We will have to spend time figuring out this tomorrow.

## September 12, 2022

So today finally find out that the auth migrations (the migrations for the user model) weren't coming through because Daniel told me they have to be part of the first migrations. So with Andy's help, we made it to go through the Dockerfile auth as the first migration and it fixed. Now we could manage the user as we wanted. Finishing the day, we are able to login/logout, signing up from the backend and Django rest frameworks but still, not figuring out the frontend. I have to spend more time into that. 

## September 13, 2022

Today I spent almost all day doing research on how to implement the sign up into our project. unfortunately, the tutorial I was following was outdated and it wasn't rendering as supossed in the frontend. I'm wondering if I have to change to not use DRF (Django RestFrameworks) and start using something else. I took a look with the group to work using the authentitication cookbook but there wasn't a clear path there. So nevermind, I hope I get it to work this days because the due date is coming and I think this is a clear blocker for the MVP.

## September 14, 2022

So I try every way possible to don't delete the code I had for login/logout and signining up because it was working, but eventually I realized that it would take me a lot of time that we didn't have to be able to figure things out. I spent today almost all day doing research and helping my peers with other things of the project, but when the afternoon came I started again working in authentitication in another branch. I started almost from the scratch following a youtube tutorial that again, was using DRF. From what I read, this is pretty straight forward way to get the tokens. So I stayed all night working on this without literally sleeping and it worked! it worked without using our files, but still, it worked with docker so implementing it to the project shouldn't be that much of an issue. We are now using the Django standard User Model without making any changes to it. Using DefaultRouter from DRF that basically work as FastAPIs but from Django. It is amazing we should learn more about it. You do a simple view where you pass your variables, put it in the URLS and in the DRF you can manage your database to be able to create, get, put and delete your objects. I was impressed. Now, we can login/logout, signup and being redirect to the page! I want to show this to the group, finally I got this to work, now is time to implement it to our project!

## September 15, 2022

So today I spent almost all day with the group trying to connect the stuff I worked in about Authentitication with our real project. Of course, merging issues happened. We then decided to start manually merging and after a couple of ours, authentication is now working in some of our dev branch! Tomorrow we will have to focus on bringing it to the main branch as it is fully connected to one of our branches. Now, we will have to figure out a way that it only renders for people logged in. I wanted to end the day with making some unit tests but I spent almost an hour trying to create them for users and dogs and I wasn't able for some reason it isn't getting the IDs of the objects. I'll have to try again tomorrow.

## September 16, 2022

Today I started the day working again on Unit Tests and I was able to create a unit test for getting the users and creating them. It is working, I spent the day trying to implement private routes for the pages in our project but I wasn't able. Sad because the group decided to not use authentication in case it gave issues once deployed, as we suffer to be able to deploy our page without it, now adding it could potentially break it. No regrets, but whatever. I spent the rest of the day with the group implementing merges to main and preparing ourselves for the due time.


