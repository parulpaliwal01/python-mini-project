import pickle

def DataAdding(word):
    file = open('words.bat', 'rb')
    words = pickle.load(file)
    a = words[word[0]]
    a.append(word)
    b = word[0]
    words[b] = a
    file.close()
    
    file = open('words.bat', 'wb')
    pickle.dump(words, file)
    file.close()

file = open('words.bat', 'rb')
words = pickle.load(file)
file.close()
