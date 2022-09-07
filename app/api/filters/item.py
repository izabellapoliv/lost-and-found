from django.db import models
from django_filters import FilterSet, CharFilter

from api.models.item import Item
from api.filters.empty_string import EmptyStringFilter


class ItemFilterSet(FilterSet):
    owner__isempty = EmptyStringFilter(field_name='owner')

    class Meta:
        model = Item
        fields = '__all__'
        filter_overrides = {
            models.ImageField: {
                'filter_class': CharFilter,
                'extra': lambda f: {
                    'lookup_expr': 'icontains',
                },
            },
        }
