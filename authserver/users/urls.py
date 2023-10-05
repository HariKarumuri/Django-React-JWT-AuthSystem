from django.urls import path
from . import views
from .views import MyTokenObtainPairView , RegisterUserAPIView
from rest_framework_simplejwt.views import (
    
    TokenRefreshView,
)

urlpatterns = [
    path('',views.getRoutes),
    path('notes/', views.getNotes),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterUserAPIView.as_view(), name='register-user'),
]
