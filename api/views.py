from .models import Book,Review,Community
from .serializers import BookSerializer,CreateUserSerializer,CreateReviewSerializer,GetReviewSerializer,GetCommunitySerializer,CreateCommunitySerializer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User


class BookView(APIView):

    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self,request,format=None):
        b = Book.objects.all()
        serializer = BookSerializer(b,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

class BookDetailView(APIView):
    lookup_url_kwarg='id'
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self,request,format=None):
        id=request.GET.get(self.lookup_url_kwarg)
        if id!=None:
            book=Book.objects.filter(id=id)
            if len(book)>0:
                serializer=BookSerializer(book[0])
                return Response(serializer.data,status=status.HTTP_200_OK)
            return Response({'Book Not Found':'Invalid book code'},status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad request':'id parameter not found in the request'},status=status.HTTP_400_BAD_REQUEST)

class UserLogin(APIView):

    def post(self,request,format=None):
            username=request.data.get('username')
            password=request.data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                tokens=Token.objects.filter(user=user)
                if  len(tokens)>0: 
                    return Response({'token':tokens[0].key},status=status.HTTP_200_OK)
                token = Token.objects.create(user=user)
                return Response({'token':token.key},status=status.HTTP_201_CREATED)
            return Response({'Not found':'user does not exist'},status=status.HTTP_404_NOT_FOUND)

class CreateUser(APIView):
    serializer_class=CreateUserSerializer

    def post(self,request,format=None):
        serializer=self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
            username=serializer.data.get('username')
            password=serializer.data.get('password')
            email=serializer.data.get('email')
            first_name=serializer.data.get('first_name')
            last_name=serializer.data.get('last_name')
            new_user = User.objects.create_user(username, email, password,first_name=first_name,last_name=last_name)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

class CreateReview(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class=CreateReviewSerializer

    def post(self,request,format=None):
        serializer=self.serializer_class(data=request.data)
        id=request.GET.get('id')
        key=request.GET.get('key')
        if serializer.is_valid(raise_exception=True):
            main=serializer.data.get('main')
            try:
                book=Book.objects.get(id=id)
            except:
                return Response({'Book Not Found':'Invalid book code'},status=status.HTTP_404_NOT_FOUND)
            try:
                token=Token.objects.get(key=key)
            except:
                return Response({'Not found':'user does not exist'},status=status.HTTP_404_NOT_FOUND)
            review=Review(main=main,book=book,user=token.user)
            review.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

class GetReviews(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self,request,format=None):
        id=request.GET.get('id')
        try:
            book=Book.objects.get(id=id)
        except:
            return Response({'Book Not Found':'Invalid book code'},status=status.HTTP_404_NOT_FOUND)
        reviews=book.review_set.all()
        serializer=GetReviewSerializer(reviews,many=True)
        data=serializer.data
        j=0
        for i in reviews:
            date = i.time.strftime("%d %B, %Y")
            data[j]['username']=i.user.username
            data[j]['first_name']=i.user.first_name
            data[j]['last_name']=i.user.last_name
            data[j]['date']=date
            j+=1
        return Response(data,status=status.HTTP_200_OK)

class CreateCommunityPost(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self,request,format=None):
        key=request.GET.get('key')
        serializer=CreateCommunitySerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            main=serializer.data.get('main')
            try:
                token=Token.objects.get(key=key)
            except:
                return Response({'Not found':'user does not exist'},status=status.HTTP_404_NOT_FOUND)
            community=Community(main=main,user=token.user)
            community.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

class GetCommunityPosts(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self,request,format=None):
        tweets=Community.objects.all()
        serializer = GetCommunitySerializer(tweets,many=True)
        data=serializer.data
        j=0
        for i in tweets:
            date = i.time.strftime("%d %B, %Y")
            data[j]['username']=i.user.username
            data[j]['first_name']=i.user.first_name
            data[j]['last_name']=i.user.last_name
            data[j]['date']=date
            j+=1
        return Response(data,status=status.HTTP_200_OK)
            
class Searchbooks(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    
    def get(self,request,format=None):
        query=request.GET.get('query')
        books=[]
        try:
            b=Book.objects.get(name__icontains=query)
            books.append(b)
        except:
            pass
        try:
            b=Book.objects.get(author__icontains=query)
            books.append(b)
        except:
            pass
        serializer=BookSerializer(books,many=True)
        if (len(books)<=0):
            return Response({'No results Found':'No books'},status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.data,status=status.HTTP_200_OK)

