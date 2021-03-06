# IIPEDIA
This project is specially designed for Indian Institute of Petroleum and Energy(IIPE). It's intended purpose is to serve as a modern library management software with some social media add ons. It is a web application made by keeping all modern development practices in mind. Backend of the application is made on django and frontend is developed using reactjs.

![img](https://github.com/crypticleopard/IIPEDIA/blob/master/assets/First.png)

<br/>

## User Interface and Frontend
User interface of the application is developed using Reactjs and material-ui,axios and react router dom has been used for providing assistance. Whole application is fully functional and mobile responsive.
<br/>

As soon as a user visits the website for the first time he is prompted to sign in or sign up.
<br/>

![img](https://github.com/crypticleopard/IIPEDIA/blob/master/assets/Loginpg.png)
![img](https://github.com/crypticleopard/IIPEDIA/blob/master/assets/Registerpg.png)
<br/>

Authentication is done is using token authentication. As soon as user signs in a token is being generated for the user for that particular session which is being stored in the local storage so that user dosen't have to login every time he visits the website.<br/>
Homepage consists of 2 parts News component and Books section.<br/>
News component is basically a automated image carousel which contains all the current news of the college.
<br/>

![img](https://github.com/crypticleopard/IIPEDIA/blob/master/assets/Newscomp.png)<br/>
Books section is the list of all books present in the library.<br/><br/>
![img](https://github.com/crypticleopard/IIPEDIA/blob/master/assets/Firstb1.png)
![img](https://github.com/crypticleopard/IIPEDIA/blob/master/assets/Firstb2.png)
<br/>

A search bar is being given for the user so it is easy to navigate between books for him.
<br/>

![img](https://github.com/crypticleopard/IIPEDIA/blob/master/assets/searchpg.png)
<br/>

Each book card in the list contains information about the current availability in library,for which year it is recommended ,teachers who have recommended it,etc. 
As soon as you click on a book card you are directed to that particular book's page. Each book's page contain basic information about the book and a review section which contains reviews from all other users. on this page you can post review, check for book's availability and get personalized feedback for that particular book.
<br/>

![img](https://github.com/crypticleopard/IIPEDIA/blob/master/assets/bookpg1.png)
![img](https://github.com/crypticleopard/IIPEDIA/blob/master/assets/bookpg2.png)
<br/>

There is also a Community section in the app where each person can post something and all other users can see that. It can be said as a simplified twitter rip-off.
![img](https://github.com/crypticleopard/IIPEDIA/blob/master/assets/Communitypg.png)
<br/>

About section is just a static webpage containing information about the college.<br/>

Website is highly responsive and has been made keeping user friendliness in mind.<br/>

![img](https://github.com/crypticleopard/IIPEDIA/blob/master/assets/Responsive.png)

## Backend and API generation

Whole backend of iipedia is developed using django and rest framework.<br/>
The database is designed using django models.
![img](https://github.com/crypticleopard/IIPEDIA/blob/master/assets/djangoadmin.png)<br/>
Schema of the database is as follows.
![img](https://github.com/crypticleopard/IIPEDIA/blob/master/assets/databasemap.png)<br/>
