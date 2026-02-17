from django.urls import path
from . import views

urlpatterns = [
    path('', views.schoolList, name='school-list'),
    
]
