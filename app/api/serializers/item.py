from rest_framework import serializers
from api.models.item import Item


class ItemSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.ReadOnlyField()
    picture = serializers.ImageField(required=False)

    class Meta:
        model = Item
        fields = '__all__'
