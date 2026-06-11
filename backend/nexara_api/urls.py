from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    # JWT Auth
    path('api/auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # App APIs
    path('api/contacts/', include('apps.contacts.urls')),
    path('api/blog/', include('apps.blog.urls')),
    path('api/portfolio/', include('apps.portfolio.urls')),
    path('api/auth/', include('apps.auth_users.urls')),
    path('api/newsletter/', include('apps.newsletter.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
