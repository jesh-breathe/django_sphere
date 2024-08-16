from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='index'),
    path('login/', views._login_, name='login'),
]