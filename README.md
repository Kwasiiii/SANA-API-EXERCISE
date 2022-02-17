# SANA-API-EXERCISE -KWASI

## Brief
We need to build a create customer API endpoint based on the following tables and constraints.

Tables:
|Customer| Bank Acc |Contact| Tag
|--|--|--|--|
| id  |  id|id|id|
| name   |accNo|contactName|tagName|
| email   |sortCode|email|tagCode|
| phoneNo   ||phoneNo|

Constraints:
|Customer|Has Many|Contacts|
|--|--|--|
|Customer|Has One|BankAccount|
|Customer|Has Many|Tags|
|Contact|Has Many|Tags|
|BankAccount|Has Many|Tags|

## Technology Used and Installs
Tech Used:

 - Node
 - TypeScript
 - Express
 - Typeorm
 - PostgreSQL
 - Docker
## To Run

    git clone https://github.com/Kwasiiii/SANA-API-EXERCISE
    cd SANA-API-EXERCIS
    npm run tsc
    node ./build/server.js

## Endpoints 

After the server is up and running use http://localhost:3000/ with the following endpoint:

 - api/users/ (to retrieve all users/customers)
 - api/bankaccounts/ (To retrieve all bank accounts)
 - api/contacts/ (To retrieve all contacts)
 - api/tags/ (To retrieve all tags)
