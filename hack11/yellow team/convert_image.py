# input the image name via command line
name = input("what is your filename?: ")

arrOfJP = "〇一二三四五六七八九"

def singleIntToJP(myInt):
    return arrOfJP[myInt]

def intToJP(myInt):
    myStr = str(myInt)
    if len(myStr) == 1:
        return singleIntToJP(int(myStr[0]))
    if len(myStr) == 2:
        return singleIntToJP(int(myStr[0])) + "十" + singleIntToJP(int(myStr[1]))
    if len(myStr) == 3:
        return singleIntToJP(int(myStr[0])) + "百" + singleIntToJP(int(myStr[1])) + "十" + singleIntToJP(int(myStr[2]))
    


import pandas as pd
import numpy as np
from PIL import Image
readmode = True
while readmode:
    try:
        img = Image.open(name)
        readmode = False
    except:
        print("can not read", name)
        print("please input your file name again: ")
        name = input("what is your filename?:")
# resize the image
basewidth = 100
wpercent = (basewidth/float(img.size[0]))
hsize = int((float(img.size[1])*float(wpercent)))
img = img.resize((basewidth, hsize), Image.ANTIALIAS)
# convert the image into an array object
# I also convert the image into a pandas DataFrame because I'm going to convert it into an excel file
arr = np.array(img)
arr_container = np.empty((arr.shape[0], arr.shape[1]), dtype=np.str)
df = pd.DataFrame(arr_container)
# convert the R,G,B into hexadecimal
# populate the DataFrame with the hexadecimal value
for l, x in enumerate(arr):
    for m, y in enumerate(x):
        r, g, b = arr[l][m]
        hexval = '%02x%02x%02x' % (r, g, b)
        df[m][l] = (intToJP(r))





# save it! yeay!
save_file_name = input("your excel file name, without '.xlsx' please: ")
df.to_excel(str(save_file_name) + ".xlsx")
print("success!! now colour the file")

