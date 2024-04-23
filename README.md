# API för Experience av Johan Magnusson
Repot innehåller kod för att skapa ett REST API med express skapat av mig för att kunna hämta arbetserfarenhet samt lägga till, uppdatera och ta bort. API:et använder sig av en MongoDB-databas för att lagra data. 

## Länk
Länk till APIet finns här: [https://backend-moment3-mongobd.onrender.com/experience](https://backend-moment3-mongobd.onrender.com/experience) 


## Användning
Hur API:et används för olika ändamål:

|Metod  |Ändpunkt     |Beskrivning                                                                           |
|-------|-------------|--------------------------------------------------------------------------------------|
|GET    |/experience     |Hämtar alla tillgängliga arbetserfarenheter.                                                      |
|GET    |/experience/:ID |Hämtar en specifik arbetserfarenhet med angivet ID.                                               |
|POST   |/experience     |Lagrar en ny arbetserfarenhet. Kräver att ett arbetserfarenhet-objekt skickas med.                            |
|PUT    |/experience/:ID |Uppdaterar en existerande arbetserfarenhet med angivet ID. Kräver att ett arbetserfraenhet-objekt skickas med.|
|DELETE |/experience/:ID |Raderar en arbetserfarenhet med angivet ID.                                                       |

Ett arbetserfarenhets-objekt returneras/skickas som JSON med följande struktur:
```
  {
    "_id": "66262e78486cccd34f9e4b33",
    "jobtitle": "lärare",
    "companyname": "Kunskapsskolan",
    "location": "Trelleborg",
    "description": "Lärare i SO för åk 8 och 9",
    "__v": 0
  },