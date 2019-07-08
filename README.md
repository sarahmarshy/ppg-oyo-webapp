## Installation

### Clone repo

``` bash
# clone the repo
$ git clone https://github.com/coreui/coreui-free-bootstrap-admin-template.git my-project

# go into app's directory
$ cd my-project

# install app's dependencies
$ npm install
```

## Usage

``` bash
# serve with hot reload at localhost:3000.
$ npm run serve

# build for production with minification
$ npm run build
```

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
free-bootstrap-admin-template/
├── build/
├── src/
│   ├── css/
│   ├── img/
│   ├── js/
│   ├── scss/
│   ├── vendors/
│   ├── ...
│   ├── index.html
│   └── ...
└── package.json
```

## CSV File Upload Mechanics

Dropzonejs is used in the frontend to allow users to drag and drop or select through their computer's file explorer a CSV file to submit for upload. Select the `Submit Data` field on the webpage's navigation bar and select your file. Once uploaded, the file is stored, parsed, and uploaded to Treasure Data. The server can then run jobs to pre-calculate the desired statistics for a range of time slots/locations and cache them on the server for display by the frontend.
