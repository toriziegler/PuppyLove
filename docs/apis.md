# APIs
  will contain the documentation for the APIs that you think you'll need to make the project work

# Create New Account
* **Method**: `POST`
* **Path**: /api/account

Input:

```json
{
  "name": string,
  "age": number,
  "zip": number,
  "owner_name": string,
  "picture_url": string "optional"
}
```

Output:

```json
{
  "id": number,
  "name": string,
  "age": number,
  "zip": number,
  "owner_name": string,
  "picture_url": string "optional"
}
```

# Get All Account 
* **Method**: `GET`
* **Path**: /api/account/ 

Input:

```json
{
  "name": string,
  "age": number,
  "zip": number,
  "owner_name": string,
  "picture_url": string "optional"
}
```

Output:

```json
{
  "id": number,
  "name": string,
  "age": number,
  "zip": number,
  "owner_name": string,
  "picture_url": string "optional"
}
```
 *the above retreives all accounts*

# Get Single Account
 * **Method**: `GET`
* **Path**: /api/account/<int:pk>

Input:

```json
{
  "name": string,
  "age": number,
  "zip": number,
  "owner_name": string,
  "picture_url": string "optional"
}
```

Output:

```json
{
  "id": number,
  "name": string,
  "age": number,
  "zip": number,
  "owner_name": string,
  "picture_url": string "optional"
}
```
 *the above retreives a specific account* 

## Update Account

* **Method**: `PUT`
* **Path**: /api/account/<int:pk>

Input:

```json
{
    "name": string,
  "age": number,
  "zip": number,
  "owner_name": string,
  "picture_url": string "optional"
}
```

Output:

```json
{
    "id": number,
  "name": string,
  "age": number,
  "zip": number,
  "owner_name": string,
  "picture_url": string "optional"
}
```

* **Creating a new account** gathers all required date
from the user via a form on the landing page. this information is sent to the database and given a new database_id.


## Create new Message

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
## Get a Message

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

## Get all Messages

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

* **Messages**  the primary form of communication