# Node oracledb serverless lambda layers sample starter template
This is an starter template for using node-oracledb with serverless framework and lambda layers.
It has precompiled oracle instant client library 12.1 for lambda.
You will need to modify handler.js to add your db creds to make it work.
The sample lambda has a test connection code that will help you test your connection once you correctly configured connection info.

To initalize the code, please run `npm install` once you created your project using this template. 

To deploy after adding your dbconfig, make sure you have your AWS cred set up and then run `sls deploy`.

If you wish to run this project locally, you have to install oracle instant client 12.1 correctly on your local machine and put node-oracle as dev dependency. Please refer to the official oracle client installation guide here: https://oracle.github.io/node-oracledb/INSTALL.html#quickstart

[Update 08/12/2019]:
Updated webpack and babel settings for those who need webpack and babel. Also added serverless-offline and serverless-webpack module to help you package and run this offline. After you put correct configs for your db, you can run using `sls offline start`. If you don't want to use babel or webpack, just remove the webpack and babel files and settings, it will still work like a charm. 

[Update 01/07/2020]:
Updated nodejs version to 10.x as AWS no longer support 8.x. Also removed this repo as a template because of the github template size limit. Please download or clone directly. 

Complete guide article linked here: 
https://medium.com/@jimmdd/the-complete-guide-to-use-node-oracledb-on-aws-lambda-using-serverless-framework-and-lambda-layers-52b374d6cfe7