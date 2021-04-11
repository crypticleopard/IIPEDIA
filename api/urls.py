from django.urls import path
from .views import BookView,BookDetailView

urlpatterns = [
    path('bookview',BookView.as_view()),
    path('bookdetailview',BookDetailView.as_view()),
]
