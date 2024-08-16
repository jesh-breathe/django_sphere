from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def home(request):
    return HttpResponse('Home Page')

def _login_(request):
    return HttpResponse('This is login page')
