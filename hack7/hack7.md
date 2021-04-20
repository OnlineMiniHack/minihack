# Task

The theme for MiniHack 7 is Space.  The task this month is to create a space travel booking system.  

You've just joined a company that specialises in booking space flights for tourists.  Your task is to create a system that allows your customers to book a space flight.

## API Woes

Unfortunately, the API system is not very good, and only allows you to query for a specific date, returning a flag to say whether that date is available or not.  Worse, the API availability check crashes at a rate of 1 in 5 calls.

If you call the book method without having the correct date, that will crash, too.

## EndPoints and Samples

https://minihackspace.azurewebsites.net/booking
https://minihackspace.azurewebsites.net/booking/2021-05-02

https://minihackspace.azurewebsites.net/availability
https://minihackspace.azurewebsites.net/availability/2021-05-01


# Suggestions

The following are some suggestions to give a feel for the sort of thing you might attempt (remember time is limited and some of these may take considerably more time than you have available):

* A simple console app that calls the booking system based on a text based menu.
* A web site that displays a calendar and allows to to book a place based on availability.
* A machine learning alorithm that calls the API multiple times and tries to predict when the available slots are and then books them.
* An IoT device that tries to book the flight based on a gesture.
* An Azure logic app that tries to book a flight based on a Tweet.



# Resources

[Open Game Art - open source music and graphics](https://opengameart.org/)

[Unsplash - open source images](https://unsplash.com/)

[Giphy - animated gifs](https://giphy.com/)


## IoT

https://www.tinkercad.com/

https://azure-samples.github.io/raspberry-pi-web-simulator/

https://azure-samples.github.io/iot-devkit-web-simulator/

https://makecode.microbit.org/
