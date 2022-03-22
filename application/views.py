from django.shortcuts import render, redirect

# Create your views here.

def test_page(request):
    
    return render(request, "index.html")

def sign_in(request):

    return render(request, 'sign-in.html')

def sign_up(request):

    return render(request, 'sign-up.html')
