from django.db import models

# Create your models here.

class project(models.Model):
	name = models.CharField(max_length=200)



class Task(models.Model):
	title = models.CharField(max_length=300)
	description = models.TextField(max_length=1000)
	project = models.ForeignKey(project, on_delete=models.CASCADE)



