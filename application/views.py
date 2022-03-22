from django.shortcuts import render, redirect

# Create your views here.

def test_page(request):
    
    return render(request, "index.html")
