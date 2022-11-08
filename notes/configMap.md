## ConfigMap

As the name is very descritive, the ConfigMap Object will create a map of all the configurations that we want to keep in some enviroment (staging, homologation, production...). For example:

```
staging:
  PORT=4000
  DATABASE_NAME=database-staging

production:
  PORT=8080
  DATABASE_NAME=database-production