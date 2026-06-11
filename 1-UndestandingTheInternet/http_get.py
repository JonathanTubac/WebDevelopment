import requests as r

PI = 3.1416

response = r.get("https://prendan-el-server.online/jonathan/Lab4/api/videogames")
response.raise_for_status()
data = response.json()

print(data)