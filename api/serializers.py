from rest_framework import serializers
from .models import Book,Review
from django.contrib.auth.models import User

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model=Book
        fields=('__all__')

class CreateReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model=Review
        fields=('main')

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=('username','password','email','first_name','last_name')
