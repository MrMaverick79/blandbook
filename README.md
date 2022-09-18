# Read Me

- 18/Sep/2022

<img src="https://res.cloudinary.com/huanyuli/image/upload/v1663511861/blandBook/Screen_Shot_2022-09-18_at_11.55.11_pm_n5p7md.png">


I rewrite the structure, now using `./components/Homepage.jsx` as the home page, but still keep the originial `App.js` code.

The `Homepage.jsx` will use `state` to store `current user`, `search results`, `chat room` etc. information to easily shared with other components.

 - `current user` infomation gets from the component `./components/CurrentUserInfo.jsx`
 - `search results` infomation gets from the component `./components/SearchForm.jsx`   
    *(Just search template at this stage, need to discuss what we need to do here)*
- `chat room` infomation gets from the component `./components/ChatRoom.jsx`   
    *(need to discuss how to use `ChatroomShow` component)*

