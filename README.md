# i-reporter   [![Build Status](https://travis-ci.org/TimothyMee/i-reporter.svg?branch=API)](https://travis-ci.org/TimothyMee/i-reporter)    [![Maintainability](https://api.codeclimate.com/v1/badges/9ea2f068b8bda5251ea6/maintainability)](https://codeclimate.com/github/TimothyMee/i-reporter/maintainability)

iReporter enables any/every citizen to bring any form of corruption to the notice of appropriate authorities and the
general public. Users can also report on things that needs government intervention

### Requirements
Node.js is required.

### Installing

- clone the repository
- Run `npm install` to install all dependencies

### Running the tests

To run automated test, simple run 
```
    npm run test
``` 

### Relevant Links
- Heroku App 
    > https://timothy-i-reporter.herokuapp.com/
- gh-pages
    > https://timothymee.github.io/i-reporter
- Pivotal tracker board
    > https://www.pivotaltracker.com/n/projects/2227411

### API Endpoints
- Red Flags:
```
    -GET https://timothy-i-reporter.herokuapp.com/api/v1/red-flags
    -GET https://timothy-i-reporter.herokuapp.com/api/v1/red-flags/{id}
    -POST https://timothy-i-reporter.herokuapp.com/api/v1/red-flags
    -PATCH https://timothy-i-reporter.herokuapp.com/api/v1/red-flags/{id}/location
    -PATCH https://timothy-i-reporter.herokuapp.com/api/v1/red-flags/{id}/comment
    -DELETE https://timothy-i-reporter.herokuapp.com/api/v1/red-flags/{id}
```

- Interventions:
```
    -GET https://timothy-i-reporter.herokuapp.com/api/v1/interventions
    -GET https://timothy-i-reporter.herokuapp.com/api/v1/interventions/{id}
    -POST https://timothy-i-reporter.herokuapp.com/api/v1/intervention
    -PATCH https://timothy-i-reporter.herokuapp.com/api/v1/interventions/{id}/location
    -PATCH https://timothy-i-reporter.herokuapp.com/api/v1/interventions/{id}/comment
    -DELETE https://timothy-i-reporter.herokuapp.com/api/v1/interventions/{id}
```

### Built With

* [Node.js](https://nodejs.org/en/) - A JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Express.js](http://expressjs.com/) - A Node.js framework


### Versioning

Currently at Version 1 (v1). 


### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
