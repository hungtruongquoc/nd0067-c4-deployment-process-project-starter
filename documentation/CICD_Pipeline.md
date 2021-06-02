# CI/CD Pipeline

The CI/CD pipeline is configured using Circle CI. The process builds both back end and front end after installing all
necessary dependencies and tools. Once the build artifacts created, the front end app is uploaded to an S3 bucket. Also, 
the back end app is compressed and deployed to an Elastic Beanstalk environment using the Elastic Beanstalk Orb of Circle CI.
