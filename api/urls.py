from django.urls import path
from .views import BookView

urlpatterns = [
    path('bookview',BookView.as_view())
]
