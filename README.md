<div align="center">
  <img style="width: 30%;" src="./README_Files/BCN.jpg" alt="Base Camp News">  
  
  # **BASE CAMP NEWS**

  ## **DESCRIPTION**
  "Base Camp News" (BCN) is a news and weather web application. BCN allows the user to login, view news articles, view news articles by the users interests, and checks the users upcoming weather.

  COLOR PALETTE            |  DEMO
:-------------------------:|:-------------------------:
<img style="width: 100%;" src="./README_FILES/BaseCampNews.png" alt="Color Codes">   |  <img style="width: 100%; height: 100%;" src="./README_Files/BCN-DEMO.gif" alt="DEMO"> 
</div>

## **KEY FEATURES:**
1. **INITIAL START:**
    - The unregistered user will see a welcome message and will ask the users what they would like to do.
    - The user will be able to **Login**, **Sign up**, and **Learn about Base Camp** on this page.

2. **LOGIN:**
   - This is where the user will be able to login to the application.
   - The user must supply their email and password to be able to login.
   - If the user does not have a account, then they can click the **sign up** button to register a account.

3. **SIGN UP:**
   - This is where the user can register a account.
   - The user must supply their email, password, and their three interests that they may be interested in.
   - If the user already has a account, then they can click the **sign in** button to login.

4. **LEARN ABOUT BASE CAMP:**
   - This will take the user to the about me page of [Base Camp Coding Academy](https://basecampcodingacademy.org/about).

5. **HOMEPAGE:**
    - The registered user will see a welcome message that displays their name. 
    - The application will give the users the weather information, news based on their interests, and give the users the option to **SEARCH**, go to **SETTINGS**, and **LOGOUT**.

6. **SEARCH:**
    - At the start of this page, it will display the top news in north america.
    - The user is able to search for specific topics of their choice and it would display the news articles based around the searched topic.
    - The other options that the user could do would be to go back to the **HOMEPAGE**,  go to **SETTINGS**, **LOGOUT**, and visit [Base Camp`s](https://basecampcodingacademy.org/) social media platforms.

7. **SETTINGS/LOGOUT:**
    - Settings: This is where the user could change any information about themselves.
    - Logout: This is where the user would logout of their account and would be sent back to the **INITIAL START** page.

8. **INSPIRATION**
   - Note:
        - The group members consisted of a backend(Will Collins), Front End(Quinton Summerford), and the Full Stack(RJay Pickering) developers.
   - This application was made for a Capstone Project at [Base Camp Coding Academy](https://basecampcodingacademy.org/).
   - We discussed on a lot of different ideas of what we could do for our major project and came to the idea of a News Aggregator because we felt that it is a helpful real world app idea and that we could make it easier for the users to access.

## **HOW TO USE (Visual Studio Code)**
1.  Install [Python](https://www.youtube.com/watch?v=gTcKMLznTcI) and [Django](https://www.youtube.com/watch?v=8JBdPDkKMiA) to your computer
2.  Download [Visual Studio Code](https://www.youtube.com/watch?v=HxJXKFxhah4)
3.  Install the extentions "Python" by Microsoft and "Django" by Baptiste Darthenay
4.  clone this repo
5.  Open the project
6.  In the terminal, open the python shell --- `python manage.py shell`
7.  Import the get_random_secret_key() function --- `from django.core.management.utils import get_random_secret_key`
8.  Generate the Secret Key in the Terminal using the get_random_secret_key() function --- `print(get_random_secret_key())`
9.  Copy and Paste the Key into your SECRET_KEY variable in the settings.py
10. Exit out of the python shell
11. In the terminal, run the project through the terminal --- `python manage.py runserver`
12. Go to [localhost](http://127.0.0.1:8000/) through the browser to view the project running

## **LICENSE**
BSD 3-Clause License