from django.shortcuts import render
from .models import Janitor
from rest_framework import viewsets
from .serializers import JanitorSerializer

# Create your views here.

class JanitorViewset(viewsets.ModelViewSet):
    serializer_class = JanitorSerializer

    queryset = Janitor.objects.all()
