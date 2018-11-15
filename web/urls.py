from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('careers/', views.careers, name='careers'),
    path('contact/', views.contact, name='contact')
]