from django.db import models

class User(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.CharField(max_length=30)
    password = models.CharField(max_length=500)

    def __str__(self):
        return self.first_name, self.last_name

class Message(models.Model):
    name = models.CharField(max_length=30)
    email = models.CharField(max_length=30)
    content = models.TextField()

    def __str__(self):
        return self.name
