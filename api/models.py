from django.db import models
from django.core.validators import validate_email
from phonenumber_field.modelfields import PhoneNumberField

class Message(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField(validators=[validate_email])
    content = models.TextField

    def __str__(self):
        return self.name
    
class Kind(models.Model):
    type = models.CharField(max_length=100)
    quantity = models.IntegerField(min_value=0)
    name = models.CharField(max_length=150)
    phone = PhoneNumberField(blank=False)
    email = models.EmailField(validators=[validate_email])

    def __str__(self):
        return self.name