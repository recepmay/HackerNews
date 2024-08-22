# Hacker News Project

Tech stack

* [Angular CLI](https://github.com/angular/angular-cli) 12.2.0 
* TypeScript 4.3.5
* Node.js v14.17.3

## Running the application

Run `ng serve --host 0.0.0.0 --port 8080` to start the application. \
Navigate to `http://localhost:8080/`

## Running unit tests

Run `ng test` to execute the unit tests. \
This command will run a total of 5 files that include unit tests in the project.

## Further Notes

The project is visualizing the data being received from the following APIs:

Top stories: https://hacker-news.firebaseio.com/v0/topstories.json \
Story item: https://hacker-news.firebaseio.com/v0/item/${id}.json \
User: https://hacker-news.firebaseio.com/v0/user/${id}.json \
API documentation: https://github.com/HackerNews/API

10 random Hacker News story IDs are selected from the API on each refresh. Cards are composed after a few consecutive calls to the other APIs. Story cards are sorted in an ascending order starting from left to right by their score. In order not to use static image for the card background, additional Pixabay API is called. The first word of each story title is being passed as a search parameter. Most of the times the first word is something meaningful and API returns a relevant image to use. In other cases, a cute photo of a puppy is being set as a default image.

Story title, story score, timestamp, author name, author karma score is visible on each card. Read more button redirects user to the details page where the image is positioned on left and story details are expanded on right. If API returns information about the author, that is also represented here. The URL to the actual article is provided at the bottom of this page. Back button redirects user to the main page where the cards are listed.

Project is designed to be mobile friendly and responsive. Mobile version of the project can be seen on devices with screen width smaller than 640px.

A loading indicator is added to inform users with slow connections while fetching the related data for the cards.

## Improvement Points

* Change the scroll bar to match the application styles
* Handle Internationalization and support many languages
* Adjust the CSS class names according to naming convention
* Add color palette to change UI colors and make it dynamic
* Add more font families and make it optional to change
* Add gradient color for story score to emphasize ascending order

## Screenshots 

* Desktop
![image](https://github.com/user-attachments/assets/a76be861-076f-4c8a-bbf8-b65cc17bd5dc)
![image](https://github.com/user-attachments/assets/0e9df88c-8b57-4c70-9968-78c81d0dd6a3)

* Mobile
![image](https://github.com/user-attachments/assets/b090375c-728b-4de5-a4e2-fdb46fed1d69)
![image](https://github.com/user-attachments/assets/5c55a8ea-d486-4427-9140-768a40fbaa20)



