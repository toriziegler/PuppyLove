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