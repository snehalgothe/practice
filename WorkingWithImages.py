#!/usr/bin/python
#import PIL imaging library that provides a python interpreter with image editing capabilities
from PIL import Image
#open the particular image from the path
#place the code in the try block as it may raise an io excception when the image cannot be found or opened
def open1():
	try:
		#an object of Image type is returned and stored in the img variable
		img= Image.open('/home/snehal/Pictures/p1.jpeg')
		width, height=img.size
		return img
	except IOError:
		print("error")

#Retrieve size of the image
def retrieve():
	try:
			img=open1()
			print(img.width)
			print(img.height)
	except IOError:
			print("error")

#Resize the image(width and height)
def resize():
	try:
		img=open1()
		new_width=int(input())
		new_height=int(input())
	
		img=img.resize((new_width,new_height), Image.ANTIALIAS)
	
	#save the changes made to the image
		img.save('/home/snehal/Pictures/pic.jpg')
	except IOError:
		print("error")

#Rotating the image
def rotate():
		try:
			img=open1()
			img=img.rotate(int(input()))
			img.save('/home/snehal/Pictures/pic1.jpg')
		except IOError:
			print("error")
			
#crop an image
def crop():
	try:
		img=open1()
		area=(0, 0, int(img.width/2), int(img.height/2))
		img=img.crop(area)
		img.save('/home/snehal/Pictures/pic.jpg')
	except IOError:
		print("error")
#paste one image on top of another
def paste1():
	try:
		img=Image.open('/home/snehal/Pictures/pic.jpg')
		img2=Image.open('/home/snehal/Pictures/p1.jpeg')
		img.paste(img2,int(input(' ',' '))
		img.save('/home/snehal/Pictures/pic3.jpg')
	except IOError:
		print("error")
#convert an image into histogram
def histogram():
	try:
		img=open1()
		print(img.histogram())
	except IOError:
		print("error")


if __name__== '__main__':
	paste1()
		