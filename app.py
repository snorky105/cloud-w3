from flask import Flask, render_template
import fdb
from config import DB_CONFIG

app = Flask(__name__)

def get_users():
    conn = fdb.connect(
        host=DB_CONFIG['host'],
        database=DB_CONFIG['database'],
        user=DB_CONFIG['user'],
        password=DB_CONFIG['password'],
        charset=DB_CONFIG['charset']
    )
    cursor = conn.cursor()
    cursor.execute("SELECT  S.IDSOGGETTO,S.COGNOME,W.NOME_LOGIN FROM DCSOGGETTI S INNER JOIN DCWRKGRP W ON W.IDSOGGETTO = S.IDSOGGETTO WHERE W.NOME_LOGIN LIKE '%DBA%' ORDER BY S.IDSOGGETTO")  # Modifica secondo la tua tabella
    qrygestori = cursor.fetchall()
    conn.close()
    return qrygestori

@app.route('/')
def home():
    utenti = get_users()  # Chiamata alla funzione che recupera i dati dal database
    return render_template('index.html', utenti=utenti)  # Passa 'utenti' al template

if __name__ == '__main__':
    app.run(debug=True)
