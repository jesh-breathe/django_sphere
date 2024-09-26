from django.db import models
from django.core.validators import validate_email, MinValueValidator
from phonenumber_field.modelfields import PhoneNumberField

# Message Table
class Message(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField(validators=[validate_email])
    content = models.TextField

    def __str__(self):
        return self.name
    
#Kind Table
class Kind(models.Model):
    type = models.CharField(max_length=100)
    quantity = models.IntegerField(validators=[MinValueValidator(1)])
    name = models.CharField(max_length=50)
    phone = PhoneNumberField(region=None,max_length=20,blank=False,null=False)
    email = models.EmailField(validators=[validate_email])

    def __str__(self):
        return self.name

#Money Table
class Money(models.Model):
    currency = models.CharField(max_length=5)
    amount = models.IntegerField(validators=[MinValueValidator(1)])
    phone = PhoneNumberField(region=None,max_length=20,blank=False,null=False)
    name = models.CharField(max_length=50)
    email = models.EmailField(validators=[validate_email])

#Membership Table
class Member(models.Model):
    name = models.CharField(max_length=100)
    phone = PhoneNumberField(region=None, max_length=20, blank=False, null=False)
    email = models.EmailField(validators=[validate_email])

    def __str__(self):
        return self.name