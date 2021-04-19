from django.urls import path
from .views import BookView,BookDetailView,UserLogin,CreateUser,CreateReview,GetReviews,CreateCommunityPost,GetCommunityPosts,Searchbooks

urlpatterns = [
    path('bookview',BookView.as_view()),
    path('bookdetailview',BookDetailView.as_view()),
    path('userlogin',UserLogin.as_view()),
    path('createuser',CreateUser.as_view()),
    path('createreview',CreateReview.as_view()),
    path('getreviews',GetReviews.as_view()),
    path('getcommunity',GetCommunityPosts.as_view()),
    path('createcommunity',CreateCommunityPost.as_view()),
    path('searchbooks',Searchbooks.as_view())
]
