from django.urls import path, include
from rest_framework import routers

from api.views.item import ItemViewSet


router = routers.DefaultRouter()
router.register(r'items', ItemViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('auth/', include('rest_framework.urls', namespace='api_rest_framework'))
]
