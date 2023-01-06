from django.shortcuts import render
from rest_framework.decorators import api_view

from .forms import CreateSms
from .models import Outbox
from rest_framework.response import Response

# Create your views here.

@api_view(['POST'])
def create_sms(request):
    if request.method == 'POST':
        form = CreateSms()
        if request.method == "POST":
            form = CreateSms(request.POST)
            if form.is_valid():
                phone_number = form.cleaned_data.get("phone_number")
                message = form.cleaned_data.get("message")
                Outbox.send(phone_number, message)
                return Response("Sent")
            else:
                return Response("Failed")

