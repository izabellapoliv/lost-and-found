from django.db import models

class Item(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    date_found = models.DateField(auto_now_add=True)
    owner = models.CharField(max_length=255, null=True, blank=True)
    date_delivered = models.DateField(null=True, blank=True)
    is_delivered = models.BooleanField(default=False)

    updated_at = models.DateField(auto_now=True)

    def __str__(self):
        return self.title
