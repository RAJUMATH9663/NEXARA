from rest_framework import serializers
from .models import BlogPost

class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ['id', 'title', 'slug', 'excerpt', 'content', 'category', 'author', 'image_url', 'read_time', 'created_at']
        read_only_fields = ['id', 'slug', 'created_at']
