##Work sample - Application developer


###Assignmnet
Build an awesome weather app that shows the weather at your current  location. 

###Requirements
- Show the weather for your current location
- Use data from http://worksample-api.herokuapp.com
- Easy to use
- Look like a million dollars
- Budget: 8-12 hours


###Assets
You can find some icon assets at [https://github.com/erikflowers/weather-icons](https://github.com/erikflowers/weather-icons) that you can use if you please. You are more than welcome to use other assets that you feel are better fitted for your solution. We do not expect you to be a designer, but since application development on Screen Interaction most often includes visual interfaces we do expect you to to be well aware of your platforms design guidelines and conventions. 

###Expectations 
######User experience
The feature of the app is simple but we expect you to deliver a solution with a high user experience. Imagine this application is to be used by real user with real needs. Maybe your application won’t be as feature-full as many other applications on the market, but at least make it interesting, fun and intuitive to use. We appreciate solutions that exceed our expectations.

######Code
We expect that the code is of high quality and under source control. Expect the solution to be continuously worked on by other developers and should therefore be easy to understand, adjust and extend. True beauty starts on the inside!

###Delivery
Make your work on a branch of master. When you are done, please make a pull request and add screen interaction as reviewer. If you have any comments on your solution you can add that in the description of the pull request.

#Good luck!


# API DOCS 
*to use: append url-param key=API-KEY*

### Available Endpoints and Documentation
- /weather (http://openweathermap.org/current)
- /forecast (http://openweathermap.org/forecast5)
- /forecast/daily (http://openweathermap.org/forecast16)
​

We always respond in JSON and metrics
We also don’t support these features of the openweathermap API:

- Bulk downloading
- Search Accuracy (like/accuracy)
- Limitation of result
- Units format
- Multilingual support
- Callback functions for javascript.
​
### You can use these parameters
#### By city name:
?q={city name},{country code}
?q={city name}
city name and country code divided by comma, use ISO 3166 country codes
​
#### By city id:
?id={id}
List of city ID city.list.json.gz can be downloaded here http://bulk.openweathermap.org/sample/
​
#### By geographic coordinates:
?lat={lat}&lon={lon}
coordinates of the location of your interest
​
#### By Zip Code
?zip={zip code},{country code}