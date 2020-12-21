from datetime import date
from tabulate import tabulate

today = date.today()
the_date = today.strftime("%d")

baseUrl = 'https://byabbe.se/on-this-day/december/'
endpointBirth = 'births.json'
endpointDeath = 'deaths.json'
endpointEvent = 'events.json'

# prompt user for response
print("")
userResponse = input('What type of event? (Birth/Death/Event)').lower();
parsedResponse = ''
if userResponse=='birth':
  parsedResponse = endpointBirth
  pass
elif userResponse=='death':
  parsedResponse = endpointDeath
  pass
else:
  parsedResponse = endpointEvent
  pass
requestUrl = f'{baseUrl}/{today}/{parsedResponse}'
