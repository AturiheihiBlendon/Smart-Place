from .models import Janitor
from rest_framework import serializers

class JanitorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Janitor
        fields = '__all__'