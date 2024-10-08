from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from api.models import Message, Money, Kind, Member
from .serializers import KindSerializer, MemberSerializer, MoneySerializer, MessageSerializer, ResourceSerializer

@api_view(['POST'])
def create_kind(request):
    serializer = KindSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def kind_list(request):
    kind = Kind.objects.all()
    serializer = KindSerializer(kind, many=True)
    return Response(serializer.data)

@api_view(['GET', 'PUT', 'DELETE'])
def kind_detail(request, pk):
    try:
        kind = Kind.objects.get(pk=pk)
    except Kind.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = KindSerializer(kind)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = KindSerializer(kind, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        kind.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
@api_view(['POST'])
def upload(request):
    serializer = ResourceSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)