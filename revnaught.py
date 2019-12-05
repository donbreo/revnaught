import json
import requests

#funtion to format the data from list to dict
def fmat2dict(y):
    return {y[0]:y[1:len(y)]}

##this function accepts the stock code, 
##requests the data and 
##outputs a 2D list of data.
def req2dict(str1):
    response = requests.get('https://www.quandl.com/api/v3/datasets/BSE/'+str1+'.json')
    rawdata = json.loads(response.text)
    return rawdata['dataset']['data']

## converts a list to dictionary
## first element of the list element is the key
def list2dict(list1):
    initd={}
    for i in range(len(list1)):
        initd.update(fmat2dict(list1[i]))
    return initd