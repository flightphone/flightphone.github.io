import json
import requests
import os

os.environ["FIREBASE_WEB_API_KEY"] = "AIzaSyDCxxnO3QpTtwv1bqMpgErKHgYFZgJY8C4"
FIREBASE_WEB_API_KEY = os.environ.get("FIREBASE_WEB_API_KEY")
rest_signin = f"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword"
rest_signup = f"https://identitytoolkit.googleapis.com/v1/accounts:signUp"
rest_confirm = f"https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode"
rest_info = f"https://identitytoolkit.googleapis.com/v1/accounts:lookup"


email_t = "efimmanevich@gmail.com" 
password_t = "aA12345678"

def info(idToken:str):
    payload = json.dumps({
        "idToken": idToken
    })
    r = requests.post(rest_info,
                      params={"key": FIREBASE_WEB_API_KEY},
                      data=payload)
    
    return r.json()
    #r['emailVerified']

def confirm_email(idToken:str):
    #send email cofirm
    payload = json.dumps({
        "requestType":"VERIFY_EMAIL",
        "idToken": idToken
    })

    r = requests.post(rest_confirm,
                      params={"key": FIREBASE_WEB_API_KEY},
                      data=payload)

    return r.json()

def sign_up(email: str, password: str, return_secure_token: bool = True):
    #create user
    payload = json.dumps({
        "email": email,
        "password": password,
        "returnSecureToken": return_secure_token
    })

    r = requests.post(rest_signup,
                      params={"key": FIREBASE_WEB_API_KEY},
                      data=payload)

    return r.json()


def sign_in(email: str, password: str, return_secure_token: bool = True):
    #login
    payload = json.dumps({
        "email": email,
        "password": password,
        "returnSecureToken": return_secure_token
    })

    r = requests.post(rest_signin,
                      params={"key": FIREBASE_WEB_API_KEY},
                      data=payload)

    return r.json()

def test_confirm():
    token = sign_in(email_t, password_t)
    id = token["idToken"]
    token = confirm_email(id)
    print(token)


def test_sigin():
    token = sign_in(email_t, password_t)
    id = token["idToken"]
    token = info(id)
    print(token)

def test_sigup():
    token = sign_up(email_t, password_t)
    id = token["idToken"]
    token = confirm_email(id)
    print(token)

#test_confirm()
#test_sigup()
test_sigin()
