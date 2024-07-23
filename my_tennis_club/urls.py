from django.contrib import admin
from django.urls import path, include  # Correct import for include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('members.urls')),  
]
