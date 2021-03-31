from .models import Book
from .serializers import BookSerializer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

class BookView(APIView):

    def get(self,request,format=None):
        b = Book.objects.all()
        serializer = BookSerializer(b,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)