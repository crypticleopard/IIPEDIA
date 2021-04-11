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

class BookDetailView(APIView):
    lookup_url_kwarg='id'

    def get(self,request,format=None):
        id=request.GET.get(self.lookup_url_kwarg)
        if id!=None:
            book=Book.objects.filter(id=id)
            if len(book)>0:
                serializer=BookSerializer(book[0])
                return Response(serializer.data,status=status.HTTP_200_OK)
            return Response({'Book Not Found':'Invalid book code'},status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad request':'id parameter not found in the request'},status=status.HTTP_400_BAD_REQUEST)