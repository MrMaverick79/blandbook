# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

 <header>
      <h1>Welcome to BlandBook.</h1>

      <% if @current_user.present? %>
        Welcome, <%= @current_user.screen_name %>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <%= link_to 'Logout', login_path, method: 'delete' %>
        &nbsp;&nbsp;&nbsp;&nbsp;

      <% else %>
        <%= link_to 'Login', login_path %>
        &nbsp;&nbsp;&nbsp;&nbsp;

      <% end %>

      <%= link_to 'Home', root_path %>
      &nbsp;&nbsp;&nbsp;&nbsp;

      <%= link_to 'Users', users_path %>
      &nbsp;&nbsp;&nbsp;&nbsp;

      <%= link_to 'Posts', posts_path %>
      &nbsp;&nbsp;&nbsp;&nbsp;

      <%= link_to 'Chatrooms', chatrooms_path %>
      &nbsp;&nbsp;&nbsp;&nbsp;

      <%= link_to 'Comments', comments_path %>
      &nbsp;&nbsp;&nbsp;&nbsp;

      <%= link_to 'Messages', messages_path %>
      &nbsp;&nbsp;&nbsp;&nbsp;

      <%= link_to 'Urls', urls_path %>
      &nbsp;&nbsp;&nbsp;&nbsp;

      <%= link_to 'All Json data together', '/alldata' %>
      &nbsp;&nbsp;&nbsp;&nbsp;
    
    </header>
