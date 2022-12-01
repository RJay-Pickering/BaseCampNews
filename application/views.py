from django.shortcuts import render, redirect
from .forms import CreateUserForm
from .models import Customer
from django.contrib import messages
from django.contrib.auth import logout, login, authenticate, update_session_auth_hash
from django.contrib.auth.forms import UserCreationForm, PasswordChangeForm
from .decorators import unauthenticated_user
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import Group


# Create your views here.

def new_home_page(request):
    return render(request, "test123.html")

def homeRedirect(request):
    return redirect("home")

def test_page(request):
    if request.user.is_authenticated:
        context={"username": request.user.username}
        with open('application/static/udata.json', 'w') as f:
            f.write("")
            f.close()

        with open('application/static/udata.json', 'a') as f:
            f.write('{"user" : "' + request.user.username + '", "interest1": "' + request.user.interest1 + '", "interest2": "' 
            + request.user.interest2 + '", "interest3" : "' + request.user.interest3 + '" }')
            f.close()
    else:
        context={"username": "guest"}

    return render(request, "index.html", context)

@unauthenticated_user
def sign_in(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        usern = ""
        try:
            usern = Customer.objects.get(email = email)
        except:
            usern = "NaN"
        # messages.info(request, usern)
        cus = authenticate(request, email=email, password=password)
        # messages.info(request, cus)

        if usern != "NaN":
            if cus is not None:
                login(request, cus)
                return redirect("home")
            messages.info(request, "Your Password is incorrect!")
        elif usern == "NaN" and cus is None:
            messages.info(request, "Your Email and Password is incorrect!")
        else:
            messages.info(request, "Your Email is incorrect!")

    return render(request, 'sign-in.html')

@unauthenticated_user
def sign_up(request):
    form = CreateUserForm()
    if request.method == "POST":
        form = CreateUserForm(request.POST)
        if form.is_valid():
            user = form.save()
            username = form.cleaned_data.get('username')
            # messages.success(request, "Created " + username)
            # messages.success(request, "User: " + username + " has been created")
            return redirect('signin')
    context = {'form':form}

    return render(request, 'sign-up.html', context)

def logoutUser(request):
	logout(request)
	return redirect('home')

# def navCovid(request):
#     return render(request, 'nav/covid.html')

# def navDrink(request):
#     return render(request, 'nav/drink.html')

# def navEntertain(request):
#     return render(request, 'nav/entertainment.html')

# def navFood(request):
#     return render(request, 'nav/food.html')

# def navHealth(request):
#     return render(request, 'nav/health.html')

# def navLivestyle(request):
#     return render(request, 'nav/livestyle.html')

# def navShopping(request):
#     return render(request, 'nav/shopping.html')

# def navStocks(request):
#     return render(request, 'nav/stocks.html')

# def navTravel(request):
#     return render(request, 'nav/travel.html')

# def navTrending(request):
#     return render(request, 'nav/trending.html')

# def navWeather(request):
#     return render(request, 'nav/weather.html')

@login_required(login_url='signin')
def settingStyle(request):
    username = request.user.username
    email = request.user.email
    password = request.user.password
    interestOne = request.user.interest1
    interestTwo = request.user.interest2
    interestThree = request.user.interest3
    if request.method == 'POST':
        if 'password_change' in request.POST:
            if request.method == 'POST':
                form = PasswordChangeForm(request.user, request.POST)
                context = {'form':form, "user": username, "email": email, "password":password, "Interest_1": interestOne, "Interest_2": interestTwo, "Interest_3": interestThree}
                if form.is_valid():
                    user = form.save()
                    update_session_auth_hash(request, user)  # Important!
                    messages.success(request, 'Your password was successfully updated!')
                else:
                    messages.error(request, 'Please correct the error below.')
        elif 'username_change' in request.POST:
            user_email = request.user.email
            newusername = request.POST.get('new_username')
            user = Customer.objects.get(email = user_email)
            user.username = newusername
            user.save()
            form = PasswordChangeForm(request.user, request.POST)
            context = {'form':form, "user": username, "email": email, "password":password, "Interest_1": interestOne, "Interest_2": interestTwo, "Interest_3": interestThree}
        elif 'email_change' in request.POST:
            user_email = request.user.email
            newemail = request.POST.get('new_email')
            emails = Customer.objects.get(email = user_email)
            emails.email = newemail
            emails.save()
            form = PasswordChangeForm(request.user, request.POST)
            context = {'form':form, "user": username, "email": email, "password":password, "Interest_1": interestOne, "Interest_2": interestTwo, "Interest_3": interestThree}
        elif 'first_change' in request.POST:
            user_email = request.user.email
            newInterest = request.POST.get('new_first')
            Interest = Customer.objects.get(email = user_email)
            Interest.interest1 = newInterest
            Interest.save()
            form = PasswordChangeForm(request.user, request.POST)
            context = {'form':form, "user": username, "email": email, "password":password, "Interest_1": interestOne, "Interest_2": interestTwo, "Interest_3": interestThree}
        elif 'second_change' in request.POST:
            user_email = request.user.email
            newInterest = request.POST.get('new_second')
            Interest = Customer.objects.get(email = user_email)
            Interest.interest2 = newInterest
            Interest.save()
            form = PasswordChangeForm(request.user, request.POST)
            context = {'form':form, "user": username, "email": email, "password":password, "Interest_1": interestOne, "Interest_2": interestTwo, "Interest_3": interestThree}
        elif 'third_change' in request.POST:
            user_email = request.user.email
            newInterest = request.POST.get('new_third')
            Interest = Customer.objects.get(email = user_email)
            Interest.interest3 = newInterest
            Interest.save()
            form = PasswordChangeForm(request.user, request.POST)
            context = {'form':form, "user": username, "email": email, "password":password, "Interest_1": interestOne, "Interest_2": interestTwo, "Interest_3": interestThree}
    else:
        form = PasswordChangeForm(request.user, request.POST)
        context = {'form':form, "user": username, "email": email, "password":password, "Interest_1": interestOne, "Interest_2": interestTwo, "Interest_3": interestThree}
    return render(request, 'settings.html', context)

@login_required(login_url='signin')
def foryou(request):
    with open('application/static/topics.json', 'w') as topic:
        topic.write('{"the_topic" : "NONE_TYPE_404"}')
        topic.close()
    if request.method == "POST":
        # if 'searchForTopics' in request.POST:
            news_topics = request.POST.get('topics')
            with open('application/static/topics.json', 'w') as topic:
                topic.write('{"the_topic" : "' + news_topics + '"}')
                topic.close()
            return render(request, 'nav/fyp.html', {"topicType": news_topics})
    return render(request, 'nav/fyp.html', {"topicType": "Search"})

# def sport(request):
#     return render(request, 'nav/sports.html')