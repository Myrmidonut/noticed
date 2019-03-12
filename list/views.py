from django.shortcuts import render
from django.http import HttpResponse

def index(request):
  data = "Hello World."

  return render(request, "list/index.html", {"data": data})