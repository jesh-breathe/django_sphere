from django.urls import path
from api.views import kind_list, create_kind, kind_detail, upload

urlpatterns = [
    path('kind/', kind_list, name='kind_list'),
    path('kind/create/', create_kind, name='create_kind'),
    path('kind/<int:pk>', kind_detail, name='kind_detail'),
    path('kind/upload', upload, name='upload'),
]