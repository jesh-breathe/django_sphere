from rest_framework.decorators import api_view
from rest_framework import status
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from api.models import Message, Money, Kind, Member
from api.serializers import KindSerializer, MemberSerializer, MoneySerializer, MessageSerializer

@api_view(['POST'])
def create_kind(request):
    data = JSONParser().parse(request)
    serializer = KindSerializer(data=data)
    if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_202_ACCEPTED)
    return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def kind_list(request):
    if request.method == 'GET':
        kind = Kind.objects.all()
        serializer = KindSerializer(kind, many=True)
        return JsonResponse(serializer.data, safe=False)
    return HttpResponse(status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def kind_detail(request, pk):
    try:
        kind = Kind.objects.get(pk=pk)
    except Kind.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = KindSerializer(kind)
        return JsonResponse(serializer.data)
    
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = KindSerializer(kind, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        kind.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)