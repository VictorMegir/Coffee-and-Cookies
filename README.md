# Coffe and Cookies
## A website with coffee and cookies.
This websites allows the user to browse over a selection of coffees and cookies.
The user can click on the name of any item on the menu to see an image of the item, as well as a short description.
Finally the user can make an order for any number of items by inputing their name and address.

### Backend
The backend of this application provides an endpoint for getting the item information from the database for all the items displayed on the menu.
The backend also provides an endpoint that creates an order object with the user's information and stores it in the database.
These endpoints were set up using <a href='https://expressjs.com/'>Expres.js</a>

### Database
For the database, I used a free cluster of <a href='https://www.mongodb.com/2'>MongoDB</a>. For accessing and working with the database I used the Node.js library <a href='https://mongoosejs.com/'>mongoose</a>.

### Frontend
The frontend of this application consists of four main components. The landing page, the menu (one for coffee and one for cookies), the form that the uses fills out to make an order and a pop-up window that shows an image and the description of any item.
The forntend was made with <a href='https://reactjs.org/'>React</a>, using the hooks interface.

### Deployment
This application was deployed using <a href='https://www.heroku.com/'>Heroku</a> and <a href='https://git-scm.com/'>Git</a>.

### Credits
This website is inspired by <a href='https://www.salushiexpress.co.za/'>Salushu Express</a>.
