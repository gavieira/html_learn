# Using a covid API - Parsing and visualizing data:

Importing necessary modules:


```python
import requests
```

Getting request from [COVID19 API](https://covid19api.com/):


```python
req = requests.get(url = 'https://api.covid19api.com/summary')
```

Reading the json output:


```python
rawdata = req.json()
```


```python
rawdata
```


```python
print(rawdata.keys())
```

    dict_keys(['Global', 'Countries', 'Date'])


Creating a function to get COVID information for a single country - could use both country name ('Brazil') or country code ('BR'):


```python
def get_country_info(country_name):
    for record in rawdata['Countries']:
        if record['Country'] == country_name.capitalize() or record['CountryCode'] == country_name.upper():
            return(record)
```


```python
get_country_info('it') # Testing our function
```




    {'Country': 'Italy',
     'CountryCode': 'IT',
     'Slug': 'italy',
     'NewConfirmed': 2357,
     'TotalConfirmed': 195351,
     'NewDeaths': 415,
     'TotalDeaths': 26384,
     'NewRecovered': 2622,
     'TotalRecovered': 63120,
     'Date': '2020-04-26T21:06:28Z'}



Get only **total** and **new** cases confirmed, recovered and deaths for a given country:


```python
data = get_country_info('Brazil')
print("Country: {}\nNew Confirmed: {}\nTotal Confirmed: {}\n\
New Recovered: {}\nTotal Recovered: {}\n\
New Deaths: {}\nTotal Deaths: {}".format(
    data['Country'],
    data['NewConfirmed'],
    data['TotalConfirmed'],
    data['NewRecovered'],
    data['TotalRecovered'],
    data['NewDeaths'],
    data['TotalDeaths']))
```

    Country: Brazil
    New Confirmed: 5281
    Total Confirmed: 59324
    New Recovered: 1505
    Total Recovered: 29160
    New Deaths: 353
    Total Deaths: 4057

