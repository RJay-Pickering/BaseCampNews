from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, UserManager
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from .managers import CustomerManager

# # Create your models here.
# class Category(models.Model):
#     name = models.CharField(default=None, blank=True, null=True)


class Customer(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=128)
    email = models.EmailField(unique=True, default='')
    password1 = models.CharField(max_length=120)
    password2 = models.CharField(max_length=120)
    interest1 = models.CharField(max_length=50)
    interest2 = models.CharField(max_length=50)
    interest3 = models.CharField(max_length=50)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomerManager()

    def __str__(self):
        return self.email