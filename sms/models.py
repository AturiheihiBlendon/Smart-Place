from django.db import models
import requests
import os
from dotenv import load_dotenv

load_dotenv()  # take environment variables from .env.

# Create your models here.

API_KEY = os.getenv('API_KEY')

class Outbox(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=10, blank=True, null=True)
    statusCode = models.IntegerField()
    phone = models.CharField(max_length=15)
    text = models.CharField(max_length=255)
    messageId = models.CharField(max_length=100)

    class Meta:
        ordering = ('-date',)
        verbose_name = ("Outbox")
        verbose_name_plural = ("Outbox")

    def __str__(self):
        return '{0}-{1}-{2}'.format(self.messageId, self.status, self.text[:10])  # noqa: E501

    @staticmethod
    def send(phone_number, message):
        url = 'https://api.africastalking.com/version1/messaging?username=Mysite'
        headers = {'ApiKey': API_KEY,
                   'Content-Type': 'application/x-www-form-urlencoded',
                   'Accept': 'application/json'}
        body = {'username': 'Mysite',
                # 'from': settings.AT_FROM_VALUE,
                'message': message,
                'to': phone_number}
        response = requests.post(url=url, headers=headers, data=body)
        data = response.json().get('SMSMessageData').get('Recipients')[0]
        Outbox_object = Outbox(status=data['status'],
                               statusCode=data['statusCode'],
                               phone=data['number'],
                               text=message,
                               messageId=data['messageId'])
        Outbox_object.save()
