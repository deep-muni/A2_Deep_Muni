# A2_Deep_Muni
Individual Repository for course CSCI 5709 Assignment 2 [Group 24]

# Assignment 2

* Date Created: 06 Jun 2020
* Last Modification Date: 14 Jun 2020

## Author

* Deep Muni (dp778309@dal.ca)

## Project Description

We are going to develop a grocery shopping web application where a customer can purchase groceries online, and our organization will deliver the ordered products to the customers.

## Links

* Live Link	    
https://a2webdev.herokuapp.com/

* GitHub Link
https://github.com/deep-muni94/A2_Deep_Muni

## Pages Created

* Landing Page/Home Page

https://a2webdev.herokuapp.com/

* User Registration 

https://a2webdev.herokuapp.com/register

* View & Update Profile 

https://a2webdev.herokuapp.com/profile

* Results Page 

https://a2webdev.herokuapp.com/result

## Front-End Frameworks/Technology

As a part of tutorial 1 our group had submitted a document stating the technologies we will be using for project and assignment work. For Front-End framework we have decided to use React JS. [1]

For styling purpose, I have decided to apply my own CSS styling. To make the pages responsive I have written a media query. I have made the pages responsive till 400px in width.

The application is tested and works on Google Chrome and MS Edge browsers.

## Justification

* Color Scheme
The website contains 2 major colors, light shade of blue (#0073b1) and white color (#ffffff). These colors are chosen as they are light colors and do not strain the eyes when looked upon.

* Design
I have used simple and aesthetic design where in the page contains headers, navigation bar, footers and individual sections to showcase the content.

* Framework
The React JS framework provides various features such as Components. Components can be reused (in my case Navigation Bar) do reduce the amount of code. Also JSX helps to manipulate DOM with an ease. It provides a feeling that we are writing pure HTML to handle all the things.

## Navigation

* The user will first land on landing page using URL (https://a2webdev.herokuapp.com/). From landing page, the user can navigate to Register Page and Profile Page using the links provided.

* To go to results page, the user must enter a query string in search box and press on search icon. This will take the user to results page.

* The navigations links are provided in the navigation bar and footer which are present on all the pages.

* To go back to home page, user can click on the logo in navigation bar or select Home link.

* When user is able to successfully click on register button, it will provide an alert that the user has been register.

* All the links expect, home page, register page, profile page and result page are disabled.

## Validations

* Search Box

There is a search bar for user to search a product. The field will alert the user if they proceed with search with empty string in search box.

* Register Form

The register form is validated for all the fields, i.e., User Name, First Name, Last Name, Date of Birth, Password and Confirm Password. 
User Name, First Name & Last Name are required fields and length must be between 4 and 21.

Date of Birth is required field.

Password and Confirm Password are required fields and password and confirm password should match.
For the password, I have created a password policy. The password must contain one lowercase, one uppercase, one numeric and one special character. Also the password must be atleast 8 characters long.

* Update Profile

The register form is validated for all the fields, i.e., First Name, Last Name and Date of Birth.
User Name, First Name & Last Name are required fields and length must be between 4 and 21.

## Images and Icon and Font used

* I have created the logo for the website using the FreeLogoDesign tool. [2]
* For social media Icons and Edit icon I have used a font Awesome API. [3]
* The images used in the home page carousel are taken from Big Basket. [4] 
* The placeholder image for the grocery is created using the DummyImage tool. [5]
* Any other images on the website are taken from Icon Monster. [6]
* Font of headings of the sections on home page is Pacifico. [7]

## Code Reference

The code used for auto-suggestion is referred from the Tutorial 3. [8] [9]

## Built With

* [Node](https://nodejs.org/en/docs/) - server
* [ReactJS](https://reactjs.org/docs/getting-started.html) - front end framework
* [Create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) - provides boilerplate code

## Checking on Local machine

* Clone the repository https://github.com/deep-muni94/A2_Deep_Muni
* Command: npm install
* Command: npm start
* In Web-Browser: http://localhost:5000

## Deployment

* I have deployed the application on Heroku which is integrated with the GitHub account.
* I have created a node server which runs the build of react application. This was taught to us in Tutorial 2. [10]

## Acknowledgment

* For syntax reference for React JS, I have used an official documentation of React JS. [11]
* I have been referring YouTube Channel Codevolution [12] from Tutorial 2 to understand how React JS works.

## Reference

[1] Group 24 => Tutorial 1

[2] "FreeLogoDesign", Editor.freelogodesign.org, 2020. [Online]. Available: https://editor.freelogodesign.org/. [Accessed: 09- Jun- 2020]

[3] Cdnjs.cloudflare.com, 2020. [Online]. Available: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css. [Accessed: 09- Jun- 2020]

[4] "Online Grocery Shopping and Online Supermarket in India - bigbasket", Bigbasket.com, 2020. [Online]. Available: https://www.bigbasket.com/. [Accessed: 09- Jun- 2020]

[5] "Dynamic Dummy Image Generator - DummyImage.com", Dummyimage.com, 2020. [Online]. Available: https://dummyimage.com/. [Accessed: 09- Jun- 2020]

[6] "iconmonstr - Free simple icons for your next project", Iconmonstr.com, 2020. [Online]. Available: https://iconmonstr.com/. [Accessed: 09- Jun- 2020]

[7] "Google Fonts", Google Fonts, 2020. [Online]. Available: https://fonts.google.com/specimen/Pacifico?sidebar.open&selection.family=Pacifico#standard-styles. [Accessed: 09- Jun- 2020]

[8] [Online]. Available: https://github.com/deep-muni94/Tutorial_Group_24/tree/Tutorial3. [Accessed: 09- Jun- 2020]

[9] "Panopto", Panopto, 2020. [Online]. Available: https://dal.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=574dba23-976e-4b9a-939b-abc000e30ba8&start=undefined. [Accessed: 09- Jun- 2020]

[10] [Online]. Available: https://github.com/deep-muni94/Tutorial_Group_24/tree/Tutorial2. [Accessed: 09- Jun- 2020]

[11] "Getting Started – React", Reactjs.org, 2020. [Online]. Available: https://reactjs.org/docs/getting-started.html. [Accessed: 10- Jun- 2020]

[12] "ReactJS Tutorial for Beginners - YouTube", YouTube, 2020. [Online]. Available: https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3. [Accessed: 07- Jun- 2020]
