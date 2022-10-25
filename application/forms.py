from django.contrib.auth.forms import UserCreationForm
from .models import Customer
from django.forms import ModelForm

class CreateUserForm(UserCreationForm):

    

    class Meta:
        model = Customer
        fields = ['username', 'email', 'password1', 'password2', 'interest1', 'interest2', 'interest3']