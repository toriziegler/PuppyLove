# September 6, 2022

What we today?

- Met with team
- Did our morning Scrum meeting
- Not the best day. Victoria and I tried tying in the back in with the front end that Stephen created on react, but we were getting a strange error, "[eslint] Failed to load plugin 'jsx-a11y' declared in 'package.json » eslint-config-react-app': /app/node_modules/language-subtag-registry/data/json/registry.json: Unexpected end of JSON input". and we spent the majority of the day trying to figure it out. It turns out that one of my files was corrupted, and I had to delete the project on my pc, and download it off Gitlab. Victoria and I also found that we were working on old code trying to figure out how to get the states information to show on the sign-up page, but stephen had already handled it. So tomorrow we will make sure everyone has up to date code as soon as we begin.

Potential blockers?

1.

# September 2, 2022

What we today?

- Met with team
- Did our morning Scrum meeting
- Today was a lot of merging issues, but we got it all sorted out. Then we split I worked with Nicholas on figuring out the the authentication, which took the rest of the time before Mandatory Fun.

Potential blockers?

1.

# September 1, 2022

What we today?

- Met with team
- Did our morning Scrum meeting
- We made a lot of progress. We finally got to the bottom of the ID error we were getting when we created the owners. Taylor finished off the poller, and Victoria has gotten most of the deployment stuff off the ground. It seems like we just need to finish tying up the back end to the front end and the the unit testing and we may be able to deploy sometime next week.

Potential blockers?

1.

# August 31, 2022

What we today?

- Met with team
- Did our morning Scrum meeting
- It was a rough rest of the day trying to figure out all the merging conflicts.
- we figured out the issue with the models that was hindering us from adding phone numbers. We needed to change the small integer field to a big integer field. However after fixing this Taylor and I had a data base error that took the rest of the day to figure out.

Potential blockers?

1.

# August 30, 2022

What we today?

- Met with team
- Did our morning Scrum meeting
- We started strong. We thought we all knew what needed to be done, but as we began everything started to fall apart today.
  -Nicolas, Stephen, and myself were struggling with the authentication. We have the react pages made, but we do not know how to connect them to the backend. However, that doesn't really matter because the backend is not done because the Dogs views are connected to the owner view, which was removed to make accounts it's own microservice with a poller to fine other local owners. We also are having trouble putting together the data base to hold all the state data that we need to create a user. We may need to think of a work around to needing the states data .

Potential blockers?

1. everything mentioned above

# August 29, 2022

What we today?

- Met with team
- Did our morning Scrum meeting
- I found the bugs in the Views and now all the methods are functioning
- We worked as a group to fix up our yaml file and our docker dev file, because our initial attempt was wrong. Thanks to the help of our instructors we were able to fix it and now our main blocker is done.

Potential blockers?

1. We have been putting off all our merges since we have been working on different things. We decided to just start making our own working branches and will piece the project together later on.

# August 25, 2022

What we today?

- Met with team
- I worked with Stephen a little on the front end React for the login pages.
- I tried to finish up the Owner views, how ever we all seem to be running into issues

Potential blockers?

1. The over views are mostly functional, but for some reason the PUT method is not updating the data despite giving a 200 code. Also I can no longer create an owner from insomnia.
2. They teams seems be hitting a wall, but everyone is in good spirits. I like these guys.

# August 24, 2022

What we today?

- Met with team
- we grouped programmed together in groups of two and three. I worked with Victoria and Nicolas
- We Got through the bug fixes we needed to move forward.
  -I added the rest of the request methods for the dog Views. Our next goal is to get all 50 states and their abbreviations to the data base so we don't have to manually enter the states every time we create an owner.

Potential blockers?

1. Strange bug was found at the end of the day were we have to comment of certain part of the setting to get the browser to function, but also it seems to be affecting the admin page for our site in the browser.

# August 23, 2022

What we today?

- Met with team
- we grouped programmed together in groups of two and three. I worked with Victoria and Nicolas
- We began setting up the Views however we ran into several issues, merge conflicts, and debate on how to move further with the mvp
  -Danial gave us feed back on our MVP and the over all project. We then began to make changes and use his advice to move forward.

Potential blockers?

1. Issues getting the docker containers to start due to minor areas in several places.

# August 22, 2022

What we today?

- Met with team
- we grouped programmed together to get the models done. I drove while the others Navigated
- Tried to figure out a solution to to upload images to our project from our project

Potential blockers?

1. debate weather we need mySQl, or MongoDB to store pictures

# August 19, 2022

Today I worked on:

- Met with team
- fleshed out our ideas a little more
- decided on a possible framework
- separated out our MVP from our stretch goals

# August 18, 2022

Today I worked on:
-Met with team - Victoria Ziegler - Taylor Panning - Stephen Ho - Nicolas Asparria

- Created team name
- Created team on gitlab
- Created necessary slack channels with instructors and cohort leads
- Collaborated on ideas for the project, made the excala draw

# August 29, 2022

What we today?

- Met with team
- Did our morning Scrum meeting
- We started strong. We thought we all knew what needed to be done, but as we began everything started to fall apart today.
  -Nicolas, Stephen, and myself were struggling with the authentication. We have the react pages made, but we do not know how to connect them to the backend. However, that doesn't really matter because the backend is not done because the Dogs views are connected to the owner view, which was removed to make accounts it's own microservice with a poller to fine other local owners. We also are having trouble putting together the data base to hold all the state data that we need to create a user. We may need to think of a work around to needing the states data .

Potential blockers?

1. everything mentioned above

# August 29, 2022

What we today?

- Met with team
- Did our morning Scrum meeting
- I found the bugs in the Views and now all the methods are functioning
- We worked as a group to fix up our yaml file and our docker dev file, because our initial attempt was wrong. Thanks to the help of our instructors we were able to fix it and now our main blocker is done.

Potential blockers?

1. We have been putting off all our merges since we have been working on different things. We decided to just start making our own working branches and will piece the project together later on.

# August 25, 2022

What we today?

- Met with team
- I worked with Stephen a little on the front end React for the login pages.
- I tried to finish up the Owner views, how ever we all seem to be running into issues

Potential blockers?

1. The over views are mostly functional, but for some reason the PUT method is not updating the data despite giving a 200 code. Also I can no longer create an owner from insomnia.
2. They teams seems be hitting a wall, but everyone is in good spirits. I like these guys.

# August 24, 2022

What we today?

- Met with team
- we grouped programmed together in groups of two and three. I worked with Victoria and Nicolas
- We Got through the bug fixes we needed to move forward.
  -I added the rest of the request methods for the dog Views. Our next goal is to get all 50 states and their abbreviations to the data base so we don't have to manually enter the states every time we create an owner.

Potential blockers?

1. Strange bug was found at the end of the day were we have to comment of certain part of the setting to get the browser to function, but also it seems to be affecting the admin page for our site in the browser.

# August 23, 2022

What we today?

- Met with team
- we grouped programmed together in groups of two and three. I worked with Victoria and Nicolas
- We began setting up the Views however we ran into several issues, merge conflicts, and debate on how to move further with the mvp
  -Danial gave us feed back on our MVP and the over all project. We then began to make changes and use his advice to move forward.

Potential blockers?

1. Issues getting the docker containers to start due to minor areas in several places.

# August 22, 2022

What we today?

- Met with team
- we grouped programmed together to get the models done. I drove while the others Navigated
- Tried to figure out a solution to to upload images to our project from our project

Potential blockers?

1. debate weather we need mySQl, or MongoDB to store pictures

# August 19, 2022

Today I worked on:

- Met with team
- fleshed out our ideas a little more
- decided on a possible framework
- separated out our MVP from our stretch goals

# August 18, 2022

Today I worked on:
-Met with team - Victoria Ziegler - Taylor Panning - Stephen Ho - Nicolas Asparria

- Created team name
- Created team on gitlab
- Created necessary slack channels with instructors and cohort leads
- Collaborated on ideas for the project, made the excala draw
