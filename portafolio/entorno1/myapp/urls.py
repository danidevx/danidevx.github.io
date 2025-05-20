from django.urls import path
from . import views

urlpatterns = [
	path('', views.index),
    path('about/', views.about),
    path('hella/<int:id>', views.numero),
    path('hello/<str:username>', views.hello),

]