import requests

r=requests.get("https://jsonplaceholder.typicode.com/posts/1/comments")

jsonobjectstring=r.json()
#print(r.text)
#print(jsonobjectstring)
print(r.status_code)
#objArr=jsonobjectstring
for i in range(0,5):
	obj1=jsonobjectstring[i]
	print("Name:",obj1["name"])
	print("Email:",obj1["email"])
	print("\n")
