from django.urls import path
from .views import BookView,BookDetailView,UserLogin,CreateUser

urlpatterns = [
    path('bookview',BookView.as_view()),
    path('bookdetailview',BookDetailView.as_view()),
    path('userlogin',UserLogin.as_view()),
    path('createuser',CreateUser.as_view())
]
