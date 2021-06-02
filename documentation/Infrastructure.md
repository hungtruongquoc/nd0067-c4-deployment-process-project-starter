# Architecture

## Front End
Front end is an Angular single page application. Output comprises HTML, Javascript, and CSS 
and the output bundle is hosted on an S3 bucket.

## Back End
A NodeJS web API, using Express Server, connects to a Postgres database. 
The backend is deployed as a public Elastic Beanstalk application. 

## Database
A Postgres RDS instance is provisioned in a VPC of AWS with 2 availability zone us-west-1b and us-west-1c.

## Application Flow
A client (web browser) downloads the front end application hosted on the S3 bucket. 
Users interact with the single page application within the web browser. 
All API requests are directed to the public Elastic Beanstalk application. 
Any data query or manipulation is performed by the backend with a connection to the RDS instance running Postgres.
The app can be accessed at [link to the front end](http://htruong-udagram.s3-website-us-west-1.amazonaws.com/home).
