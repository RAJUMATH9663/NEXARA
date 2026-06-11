from django.urls import path
from .views import BlogListView, BlogDetailView, BlogCreateView

urlpatterns = [
    path('', BlogListView.as_view(), name='blog-list'),
    path('create/', BlogCreateView.as_view(), name='blog-create'),
    path('<slug:slug>/', BlogDetailView.as_view(), name='blog-detail'),
]
