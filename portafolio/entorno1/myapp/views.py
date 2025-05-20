# from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
	return HttpResponse("index page")

def numero(request, id):
	print(type(id)) 
	return HttpResponse("<h1>tu numero es %s</h1>"% id )

def hello(request, username):
	print(username)
	return HttpResponse("<h1>hello %s</h1> "% username)

def about(request):
	return HttpResponse("about hermoso")