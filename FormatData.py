import requests
response = requests.get('https://www.quandl.com/api/v3/datasets/BSE/BOM533171.json?api_key=qz1RFMDVb5hEQ4qXxnUG')

print response #print http status
print(response.request.body) #print body which is empty
print(response.request.url) #prints the url duh
print(response.content) #prints all the content that is visible in the browser
print(response.text) #de-serializizes json data
rdata = json.loads(response.text) #puts raw json data into variable
data_serialized = json.dumps(data)
