from urllib import request
# from bs4 import BeautifulSoup
from tabulate import tabulate
import re
import json
import pprint
from openpyxl import Workbook
from openpyxl.styles import Font
import os

def replace_all(text, dict):
    for [a,b] in dict:
        text = text.replace(a, b)
    return text

baseUrl = 'https://www.onthisday.com/events/december/'
# Get HTML text from URL
date = "3-Nov"
url = f'https://thesite.com/{date}'
html = request.urlopen(url).read().decode('utf8')

# Pre-process HTML text
mydict = [["&quot;", '"'], ["&#x27;", "'"]]
quotes_replaced = replace_all(html,mydict)

# Get crossword data element from HTML and convert to JSON
crossword_data_regexp = re.compile('data-crossword-data="(\{[^>]+\})"')
crossword_data = crossword_data_regexp.search(quotes_replaced).group(1)
crossdata_as_json = json.loads(crossword_data)

# Print JSON
# pp = pprint.PrettyPrinter(indent=4)
# pp.pprint(crossdata_as_json)

# Get crossword number
cross_num = crossdata_as_json['number']

# Get clue data
headers = ["Clue", "Solution", "ID", "x position", "y position"]
table = []
for i in crossdata_as_json['entries']:
    table.append([
        i['clue'].strip(),
        i['solution'],
        i['id'],
        i['position']['x'],
        i['position']['y']
        ])

# Create new workbook
workbook = Workbook()
sheet = workbook.active
sheet.title = "clues"
# Append header row
sheet.append(headers)
bold_font = Font(color='00FF0000', italic=True)
for cell in sheet["1:1"]:
    cell.font = bold_font
# Append clue data
for row in table:
    sheet.append(row)
sheet.column_dimensions['A'].width = 100
sheet.column_dimensions['B'].width = 25
sheet.column_dimensions['C'].width = 15
sheet.column_dimensions['D'].width = 15
sheet.column_dimensions['E'].width = 15
sheet.freeze_panes = "A2"
# Save workbook
currentdir = os.path.dirname(__file__)
foldername = "excel"
filename = f'guardian_crossword_{cross_num}.xlsx'
workbook.save(filename=os.path.join(currentdir, foldername, filename))

print()
print(f'Finished. File "{filename}" was successfully created.')
print()
