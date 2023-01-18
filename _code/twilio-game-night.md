---
layout: code
title:  Twilio Game Night
date: 2021-01-10
---

Last year, my brother and I concocted an elaborate plan for my Dad's 60th birthday: create a murder mystery night to rival all murder mystery nights which could provide entertainment to all thirty members of our extended family. Leave it to the two of us to blow this thing way out of proportion. 

A few sync up meetings, a bunch of professional character drawings, a handful of real life props, more than a dozen character skill checks, and a dedicated Python server and Twilio gateway later and we ended up with something fantastic. It was a fun project and something I may open source someday soon. 

Players walked around a pre-arranged home with clue cards hidden and placed around an estate. These cards have four digit event codes which provided the player with a basic description of the scene. User's could then either roll a real die at the event location or let the computer automatically roll for them. Based on the roll of the user and a predefined modifier which they handpicked via strengths and weaknesses before playing, players can receive a variety of responses which give tips on other characters in the game, point out critical evidence, or lead to other event codes with more information. There is also some somewhat complex endgame gates set in place which determine the outcome of the game based on the player's decisions throughout the night.

At it's core, it's a Flask application with a static website and several API endpoints. It's operates off of a CSV of prompts which are loaded into memory for fast lookup. I leverage Flask sessions to manage the character throughout their experience.

It was a really fun project and a fun little hack that I really enjoyed.

{% include game-night.html %}