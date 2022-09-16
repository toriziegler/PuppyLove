# APIs
  will contain the documentation for the APIs that you think you'll need to make the project work

# Create New Account
* **Method**: `POST`
* **Path**: /api/users/

Input:

```json
{
  "username": string,
  "password": string,
}
```

Output:

```json
{
  "username": string,
  "password": string,
}
```

* **Creating a new account** gathers all required date
from the user via a form on the landing page. this information is sent to the database and given a new database_id.


# Get All Account 
* **Method**: `GET`
* **Path**: /api/users/

Input:

```json
{
  "username": string,
  "password": string,
}
```

Output:

```json
{
  "username": string,
  "password": string,
}
```
 *the above retreives all accounts*

# Get Single Account
 * **Method**: `GET`
* **Path**: /api/current/<int:pk>

Input:

```json
{
  "username": string,
  "password": string,
}
```

Output:

```json
{
  "username": string,
  "password": string,
}
```
 *the above retreives a specific account* 

## Update Account

* **Method**: `PUT`
* **Path**: /api/current/<int:pk>

Input:

```json
{
  "username": string,
  "password": string,
}
```

Output:

```json
{
  "username": string,
  "password": string,
}
```


## Create new Message - NOT IMPLEMENTED YET

* **Method**: `POST`
* **Path**: /api/<int:pk>/message/<int:pk>
* **first <int:pk>** primary logged in user
* **second <int:pk>** secondary connection with primary user

Input:

```json
{
  "body": string
}
```

Output:

```json
{
  "id": number,
  "body": string
}
```

## Get a Message - NOT IMPLEMENTED YET

* **Method**: `get` 
* **Path**: /api/<int:pk>/message/<int:pk>
* **first <int:pk>** primary logged in user
* **second <int:pk>** secondary connection with primary user

Input:

```json
{
  "body": string
}
```

Output:

```json
{
  "id": number,
  "body": string
}
```

## Get all Messages - NOT IMPLEMENTED YET

* **Method**: `get` 
* **Path**: /api/<int:pk>/message/
* **first <int:pk>** primary logged in user

Input:

```json
{
  "body": string
}
```

Output:

```json
{
  "id": number,
  "body": string
}
```

* **Messages**  will be the primary form of communication


## Create New Owner

* **Method**: `POST`
* **Path**: /owners/


Input:

```json
{
  "body": string
}
```

Output:

```json
{
  "id": number,
  "body": string
}
```


* **Method**: `POST`
* **Path**: /states/


Input:

```json
{
  "name": string,
  "id": integer PK,
  "abbreviation": string
}
```

Output:

```json
{
  "name": string,
  "id": integer PK,
  "abbreviation": string
}
```

* **Method**: `POST`
* **Path**: /api/dogs/


Input:

```json
{
  "body": string
}
```

Output:

```json
{
  "id": number,
  "body": string
}
```