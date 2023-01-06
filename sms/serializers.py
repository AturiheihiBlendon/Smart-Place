from .models import Outbox
from rest_framework import serializers


class OutboxSerializer(serializers.ModelSerializer):
    class Meta:
        model = Outbox
        fields = '__all__'

