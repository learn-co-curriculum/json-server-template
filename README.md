# Introduction
This is the json server for FarmFolio. To set it up in a development environment follow the steps below. 


# Setting up

## 1. Clone the repository

```
git@github.com:NB-Kamoni/FarmFolio-Backend.git

```

## 2. Install the dependencies 

```
npm install

```

## 3. Start the development server

```
npm run dev

```

use CTRL + C to stop the server

## 3. Reset the data
Since this server is for testing and prototyping, you can reset the data to its initial state.. In future this backend will be migrated to a more secure and scalabele DB. 

Feel free to reset the data to its initial state through:

```
npm run seed

```

Incase you add a new endpoint (a new key and its array), Please update the initial state of the data in seeds.json