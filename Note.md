# Notes

## Automated Test why?
-Humanly impossible test suuits
-Regression Tests
-Efficiency in time
## Disadvantages
-Biased Tests
-Experienced tester
-UAT
-time
-specific Tests


## Lab session
Follow these steps:
+install node
```sh
npm install node
```
+create folder
```sh
mkdir <folder_name>
```
+initialize node
```sh
npm init -y
```
+install Jest
```sh
npm i -D jest
```
+in the package.json file update the "scripts" section like this
```sh
"scripts": {
    "test": "jest",
    "test:coverage": "jest --coverage"
  },
```
+Run the test to see if it's working
```sh
npm run
```
or
```sh
run npm test:coverage
```