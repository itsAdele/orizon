# Orizon Backend API
Questo progetto costituisce il backend ufficiale per l'agenzia di viaggi Orizon. È stato sviluppato per gestire in modo efficiente e sostenibile la prenotazione di viaggi, le attività locali e la relazione tra utenti e servizi, garantendo integrità dei dati e scalabilità.


## Tecnologie Utilizzate
Node.js & Express: Architettura RESTful.

MySQL: Database relazionale per gestire ordini, utenti e prodotti.

Mocha/Chai/Sinon: Suite di test unitari automatizzati.


## Installazione
Clona il repository.

Installa le dipendenze:
**npm install**

Avvia il Server:
**npm start**


## Configurazione Database
Avvia il tuo server MySQL (tramite XAMPP o altro).

Crea un nuovo database chiamato orizon_db.

Importa il file **database.sql** (presente nella cartella principale) nel tuo database appena creato.

Assicurati che le credenziali di connessione nel tuo file server.js (o models/db.js) corrispondano a quelle del tuo server MySQL locale.



## Variabili di Ambiente
Il progetto è pronto per gestire credenziali sensibili tramite un file .env. Se necessario, crea un file .env nella root del progetto:
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=orizon_db


## Testing
Il progetto include unit test per garantire la stabilità del codice.
Per eseguire i test:
npm test


## Lista API (Endpoints)
Metodo,Endpoint,Descrizione
GET,/api/users,Elenco di tutti gli utenti
GET,/api/products,Catalogo completo dei prodotti
POST,/api/orders,Crea un nuovo ordine
GET,/api/orders/:id,Dettaglio di uno specifico ordine
POST,/api/order-products,Aggiunge un prodotto a un ordine
GET,/api/order-products/:order_id,Recupera i prodotti di un ordine