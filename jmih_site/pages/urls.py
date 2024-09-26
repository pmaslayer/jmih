from django.urls import path
from . import views
import django.conf.urls.static
from django.conf.urls.static import static
from django.conf import settings


app_name = 'pages'

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('offices/', views.offices, name='offices'),
    path('partners/', views.partners, name='partners'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
