from rest_framework.serializers import ModelSerializer
from .models import Note
from django.contrib.auth.models import User


class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'


class UserRegistrationSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'email')  # Add other fields as needed
        extra_kwargs = {'password': {'write_only': True}}