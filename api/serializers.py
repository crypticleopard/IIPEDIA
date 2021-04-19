from rest_framework import serializers
from .models import Book,Review,Community
from django.contrib.auth.models import User

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model=Book
        fields=('__all__')

class CreateReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model=Review
        fields=['main']

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=('username','password','email','first_name','last_name')

class GetReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model=Review
        fields=('__all__')

class GetCommunitySerializer(serializers.ModelSerializer):
    class Meta:
        model=Community
        fields=('__all__')

class CreateCommunitySerializer(serializers.ModelSerializer):
    class Meta:
        model=Community
        fields=['main']