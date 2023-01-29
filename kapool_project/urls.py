# kapool_project/urls.py

from django.contrib import admin
from django.urls import path, include
from .views import index

urlpatterns = [
    path('', index),
    path('admin/', admin.site.urls),
    path('api/v1/', include('api.urls')),
]