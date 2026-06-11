from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import NewsletterSubscriber
from .serializers import NewsletterSerializer

class NewsletterSubscribeView(generics.CreateAPIView):
    queryset = NewsletterSubscriber.objects.all()
    serializer_class = NewsletterSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        email = request.data.get('email')
        if NewsletterSubscriber.objects.filter(email=email).exists():
            return Response({'message': 'Already subscribed!'}, status=status.HTTP_200_OK)
        return super().create(request, *args, **kwargs)
