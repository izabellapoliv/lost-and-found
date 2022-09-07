from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.parsers import MultiPartParser, FormParser

from api.serializers.item import ItemSerializer
from api.models.item import Item
from api.filters.item import ItemFilterSet


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all().order_by('date_found')
    serializer_class = ItemSerializer
    parser_classes = (MultiPartParser, FormParser)

    filter_backends = [DjangoFilterBackend,
                       filters.SearchFilter, filters.OrderingFilter]
    filterset_class = ItemFilterSet

    search_fields = ['title']
    ordering_fields = ['title', 'date_found', 'date_delivered']
