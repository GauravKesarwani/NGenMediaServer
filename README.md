** General Notes

Next Gen is an web and mobile application to organize all your personal media wherever you
keep it, so you can enjoy it on any device.

NextGen follows a client server architecture to achieve this. The server is written in
javascript and runs on top of nodejs platform with the media server running on your home
computer, you can stream movies, music and photos to any phone, tablet or other computer.
The media server does the rendering of the files and captures meta data about the media from
online moviedb api. Once the server captures the meta data information, it stores that
information on backend in mongodb. Client(web or mobile interfaces) which would connect
to media server will be able to stream media from the server and present media information
to the user in an appealing format. 


Key Implementation Features : Cross-Browser, Cross-Device compatible, Localization


Technology Stack Used : 
1) Front End - HTML5, Javascript, JQuery, CSS, AJAX, Bootstrap 3.3
2) Back End - NodeJS, Web server - Express Framework
3) Database - MongoDB

Deployed on heroku @  https://aqueous-refuge-4595.herokuapp.com/

:END:

** Server Start Instructions:


