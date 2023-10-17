# Phone Contacts Application Documentation

This is a Phone Contacts application developed using the MERN stack (MongoDB, Express.js, React.js with Typescript, Node.js) with Elasticsearch integration for advanced search capabilities. The application allows users to perform CRUD (Create, Read, Update, Delete) operations on contacts and includes a search feature for efficient data retrieval.

## Features

- **Create:** Add new contacts with fields including Surname, Name, Phone Number, Geodata (latitude, longitude), Address, and Additional Information.
- **Read:** View the list of saved contacts with their details.
- **Update:** Edit existing contacts information.
- **Delete:** Remove contacts from the database.
- **Search:** Utilize Elasticsearch for full-text search on alphanumerical fields and exact match of phone numbers.

## Technologies Used

- **Frontend:** React.js with Typescript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ODM
- **Search Engine:** Elasticsearch

## Prerequisites

- Node.js installed
- MongoDB server running
- Elasticsearch server running (Kibana to create indexes)

## Start Elasticsearch and Kibana using Docker Compose:

```
docker-compose -f /path/to/file_elastic_kibana_latest.yml up
```

This command will pull the Elasticsearch and Kibana images from the official Docker Hub repository and run them on specific ports as defined in the docker-compose.yml file.
