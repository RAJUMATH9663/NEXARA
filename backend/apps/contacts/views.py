from rest_framework import generics, permissions
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from .models import ContactMessage
from .serializers import ContactMessageSerializer

class ContactCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = [permissions.AllowAny]

    def perform_create(self, serializer):
        instance = serializer.save()
        # Send email notification
        try:
            send_mail(
                subject=f'New Contact Form Submission from {instance.name}',
                message=f'Name: {instance.name}\nEmail: {instance.email}\nPhone: {instance.phone}\nCompany: {instance.company}\nService: {instance.service}\n\nMessage:\n{instance.message}',
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.DEFAULT_FROM_EMAIL],
                fail_silently=True,
            )
        except Exception:
            pass

class ContactListView(generics.ListAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = [permissions.IsAdminUser]
