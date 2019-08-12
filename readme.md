# Node oracledb serverless lambda layers sample starter template
This is an starter template for using node-oracledb with serverless framework and lambda layers.
It has precompiled oracle instant client library 12.1 for lambda.
You will need to modify handler.js to add your db creds to make it work.
The sample lambda has a test connection code from node-oracledb example.

If you wish to run this project locally, you have to install oracle instant client 12.1 correctly on your local machine and put node-oracle as dev dependency.

[Update 08/12/2019]:
Updated webpack and babel settings in branch feature/add_webpack. Will be tested and add to the package. 

Complete guide article linked here: 
https://medium.com/@jimdingmac/the-complete-guide-to-use-node-oracledb-on-aws-lambda-using-serverless-framework-and-lambda-layers-52b374d6cfe7
