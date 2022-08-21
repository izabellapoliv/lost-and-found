from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend

from api.serializers.item import ItemSerializer
from api.models.item import Item

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all().order_by('date_found')
    serializer_class = ItemSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['title']
