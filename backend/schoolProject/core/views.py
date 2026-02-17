from django.shortcuts import render, get_object_or_404
from .models import School
from .serializers import SchoolSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.status import HTTP_404_NOT_FOUND
# Create your views here.

@api_view(["GET"])
def schoolList(request):
    schools = School.objects.all()
    serializer = SchoolSerializer(schools, many=True)
    return Response(serializer.data)

@api_view(["DELETE"])
def deleteSchool(request,pk):
    try:
        school = get_object_or_404(School, pk=pk)
        school.delete()
        return Response({'message' : 'The Record Deleted'})
        
    except School.DoesNotExist: 
        return Response({'message' : 'School not preseny'}, status=HTTP_404_NOT_FOUND)