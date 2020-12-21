from urllib import request
from datetime import date
# from tabulate import tabulate

today = date.today()
day_number = today.day
print(day_number)
baseUrl = 'https://byabbe.se/on-this-day/12/21/births.json'
endpointBirth = 'births.json'
endpointDeath = 'deaths.json'
endpointEvent = 'events.json'

# prompt user for response
days = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th',
 '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th',
 '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th',
 '29th', '30th', '31st']
the_day = days[the_date]


print('Happy December!')
userResponse = input('What type of event? (Birth/Death/Event)')
print(userResponse)


parsedResponse = endpointDeath
if userResponse in ['birth','births','birthday']:
  parsedResponse = endpointBirth
  pass
elif userResponse in ['death', 'deaths', 'funerals']:
  parsedResponse = endpointDeath
  pass
else:
  parsedResponse = endpointEvent
  pass
print(parsedResponse)
requestUrl = '{baseUrl}/12/{day_number}/{parsedResponse}'.format(baseUrl,today,parsedResponse)

print(requestUrl)

response = request(requestUrl);
print(response)

# 403 for some reason? why is a mystery
