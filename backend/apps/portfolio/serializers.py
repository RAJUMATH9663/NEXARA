from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    tech = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = [
            'id', 'title', 'category', 'description', 
            'tech_stack', 'tech', 'image', 'image_url', 
            'demo', 'github', 'color', 'created_at'
        ]
        read_only_fields = ['id', 'created_at', 'tech']

    def get_tech(self, obj):
        if obj.tech_stack:
            return [t.strip() for t in obj.tech_stack.split(',') if t.strip()]
        return []
