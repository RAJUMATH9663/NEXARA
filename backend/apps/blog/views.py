from rest_framework import generics, permissions
from .models import BlogPost
from .serializers import BlogPostSerializer

class BlogListView(generics.ListAPIView):
    serializer_class = BlogPostSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        qs = BlogPost.objects.filter(is_published=True)
        category = self.request.query_params.get('category')
        if category:
            qs = qs.filter(category=category)
        return qs

class BlogDetailView(generics.RetrieveAPIView):
    queryset = BlogPost.objects.filter(is_published=True)
    serializer_class = BlogPostSerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = 'slug'

class BlogCreateView(generics.CreateAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer
    permission_classes = [permissions.IsAdminUser]
