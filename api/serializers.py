from rest_framework import serializers
from .models import Book,Review

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model=Book
        fields=('__all__')

class CreateReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model=Review
        fields=('main')