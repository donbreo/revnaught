import requests
response = requests.get('https://www.quandl.com/api/v3/datasets/BSE/BOM533171.json?api_key=qz1RFMDVb5hEQ4qXxnUG')
response.request.body
print response #print http status
print(response.request.body)
print(response.request.url)
print(response.content)
print(response.text)
