from django.db import models
from django.contrib.auth.hashers import PBKDF2PasswordHasher, MD5PasswordHasher
from argon2 import PasswordHasher
from passlib.hash import scrypt
from hashlib import pbkdf2_hmac

class User(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.CharField(max_length=30)
    password = models.CharField(max_length=200)


class Message(models.Model):
    name = models.CharField(max_length=30)
    email = models.CharField(max_length=30)
    content = models.TextField()

# h = scrypt.hash("password")
# print()

