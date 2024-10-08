from rest_framework import serializers
from api.models import Message, Kind, Money, Member, Resource
# from django.contrib.auth.hashers import make_password

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ['name', 'email', 'content']

class KindSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kind
        fields = ['type', 'quantity', 'name', 'phone', 'email']

class MoneySerializer(serializers.ModelSerializer):
    class Meta:
        model = Money
        fields = ['currency', 'amount', 'phone', 'name', 'email']

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ['name', 'phone', 'email']

class ResourceSerializer(serializers.ModelSerializer):
    model = Resource
    fields = ['file', 'description']