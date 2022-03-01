# Node oracledb serverless lambda layers sample starter template

**I have updated this template to support Oracle 19 and Node.js 14.x.**

This is an starter template for using node-oracledb with serverless framework and lambda layers. It has precompiled oracle instant client library 19 for lambda on Node.js 14.x.

You will need to modify serverless.yml to add your database credentials to make it work.

The sample lambda has a test connection code that will help you test your connection once you correctly configured connection info.

To initialize the code, please run `npm install` once you created your project using this template.

Additionally, you will need to run the following to install the node dependencies inside of the oracle library lambda layer:

```
cd oraclelib/nodejs

npm install
```

If you wish to run this project locally, you have to install oracle instant client 19 correctly on your local machine and put node-oracle as dev dependency. Please refer to the official oracle client installation guide here: https://oracle.github.io/node-oracledb/INSTALL.html#quickstart

**[Update 03/01/2022]:**
Updated nodejs version to 14.x as AWS no longer supports 10.x and added the appropriate dependencies for the oracle instant client 19.
