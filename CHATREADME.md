Fold this into the main readme once merge completed

# Welcome to Blandbook! 

## A lightweight social media platform using React and Ruby on Rails

**Authors**:

- Huanyu Daniel Li (github link)
- Lei Huawen (github link)
- Brendan Tuckerman (github link)

A project as part of the General Assembly Software Intensive

**Overview**:

Blandbook is a social media platofrm that pulls together many of the features of sites like Facebook, Instagram, and Reddit. It allows users to set up an account, log in and see posts made by themsleves and other members of the platform. 


**Features**:



**Tech Stack**:

Front-end: React, CSS

Back-End: Ruby on Rails, PostgreSQL, ActiveRecord






## Chat function 



Thanks to Jennifer Ingram for [this](https://javascript.plainenglish.io/integrating-actioncable-with-react-9f946b61556e)  tutorial which was a huge help.

This part of the README aims to explain the chat function, which uses Rails' [ActionCable](https://guides.rubyonrails.org/action_cable_overview.html) --which replaces HTTP requests with WebSocket intergration

Gems: 
 - 'rack-cors' (to avoid CORS errors )
 
NPM Packages:
 - 'axios' (needed elsewhere, but also used for HTTP requests)
 - 'actioncable' (to form the connection with ActionCable in the back end)

# Backend

We added the following route in our Rails routes file, which created a URL which we could use to form the connection between front and back-end:

![Mount example](../planning/mount.png)


Because we are not using HTTP requests, we instead need to create a channenl (app-->channels-->chatroom_channel). This channel allows the front-end (known as a consumer) to subscribe to channels in the back end. This allows us to transmit the infomration in as many of our chatrooms as needed. In the example below, we see that the channel controller uses `stream_for` and `broadcast_to` within the ActionCable class.

![chatroom_channel](../planning/chatroom_channel.png)


