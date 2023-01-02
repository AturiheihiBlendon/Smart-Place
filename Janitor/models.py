from django.db import models

# Create your models here.

class Janitor(models.Model):
    Username = models.CharField(max_length=30)
    Contact = models.CharField(max_length=15)
    Description = models.TextField()
    Location = models.TextField()
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.Username
