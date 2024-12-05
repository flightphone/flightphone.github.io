import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use a service account.
cred = credentials.Certificate('sveltetest2.json')
app = firebase_admin.initialize_app(cred)
db = firestore.client()


'''
doc_ref = db.collection('users').document('alovelace')
doc_ref.set({
    'first': 'Ada',
    'last': 'Lovelace',
    'born': 1815
})


doc_ref = db.collection('users').document('aturing')
doc_ref.set({
    'first': 'Alan',
    'middle': 'Mathison',
    'last': 'Turing',
    'born': 1912
})

doc_ref = db.collection('users').document()


doc_ref.set({
    'first': 'Alexander1',
    'middle': 'Pushkin1',
    'last': 'Art1',
    'born': 1799
})

doc = doc_ref.get()

print(doc.id)
'''
docs = db.collection("users").stream()
for e in docs:
    print(e.to_dict())
