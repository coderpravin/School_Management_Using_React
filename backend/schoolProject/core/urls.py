from django.urls import path
from . import views

urlpatterns = [
    path('', views.schoolList, name='school-list'),
    path('<int:pk>/', views.deleteSchool, name='school-delete'),
    path('edit/<int:pk>/', views.editSchool, name='school-edit'),
    path('add/', views.AddSchool, name='school-add'),
    
]
