from django.shortcuts import render, redirect
from .forms import CreateUserForm
from django.contrib import messages
from django.contrib.auth import logout, login, authenticate
from django.contrib.auth.forms import UserCreationForm


# Create your views here.

def test_page(request):
    
    return render(request, "index.html")

def sign_in(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password = password)
        if user is not None:
            login(request, user)
            return redirect("home")
        else:
            messages.info(request, "Username or Password is incorrect")

    return render(request, 'sign-in.html')

def sign_up(request):
    form=CreateUserForm()
    if request.method == "POST":
        form = CreateUserForm(request.POST)
        if form.is_valid():
            user = form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, "Created " + username)
            return redirect('signin')
    context = {'form':form}

    return render(request, 'sign-up.html', context)

def logoutUser(request):
	logout(request)
	return redirect('home')
