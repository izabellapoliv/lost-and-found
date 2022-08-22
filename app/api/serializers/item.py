from rest_framework import serializers
from api.models.item import Item

class ItemSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = Item
        fields = '__all__'
