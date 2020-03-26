# India Statewise COVID-19 Status/Data

Collecting all Indian :india: states COVID-19 data :minidisc: , extracting from [Official Ministry of Health & Family Welfare](https://www.mohfw.gov.in/)

- Updated hourly :watch:
- 100% Reliable :+1:

## Usage

### cURL

`curl https://cdn.jsdelivr.net/gh/covid-19-tracker/india-state-wise@latest/data.json`

### fetch

```js
fetch(
  "https://cdn.jsdelivr.net/gh/covid-19-tracker/india-state-wise@latest/data.json"
)
  .then(res => res.json())
  .then(data => console.log(data));
```
