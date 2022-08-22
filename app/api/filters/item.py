from django_filters import FilterSet

from api.models.item import Item
from api.filters.empty_string import EmptyStringFilter

class ItemFilterSet(FilterSet):
    owner__isempty = EmptyStringFilter(field_name='owner')

    class Meta:
        model = Item
        fields = []
