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
 *the above retrieves all accounts*

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


## Create new Message - NOT YET IMPLEMENTED

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
## Get a Message - NOT YET IMPLEMENTED

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

## Get all Messages - NOT YET IMPLEMENTED

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



# Create New Owner
* **Method**: `POST`
* **Path**: /owners/

Input:

```json
{
  "name": string,
  "email": string,
  "phone": integer,
  "description": string,
  "state": foreign key to state model,
}
```

Output:

```json
{
  "name": string,
  "email": string,
  "phone": integer,
  "description": string,
  "state": foreign key to state model,
}
```


# Get All Owners
* **Method**: `GET`
* **Path**: /owners/

Input:

```json
{
  "name": string,
  "email": string,
  "phone": integer,
  "description": string,
  "state": foreign key to state model,
}
```

Output:

```json
{
  "name": string,
  "email": string,
  "phone": integer,
  "description": string,
  "state": foreign key to state model,
}
```

# Update Owner
* **Method**: `PUT`
* **Path**: /owners/<int:pk>

Input:

```json
{
  "name": string,
  "email": string,
  "phone": integer,
  "description": string,
  "state": foreign key to state model,
}
```

Output:

```json
{
  "name": string,
  "email": string,
  "phone": integer,
  "description": string,
  "state": foreign key to state model,
}
```

# Get Specific Owner
* **Method**: `PUT`
* **Path**: /owners/<int:pk>

Input:

```json
{
  "name": string,
  "email": string,
  "phone": integer,
  "description": string,
  "state": foreign key to state model,
}
```

Output:

```json
{
  "name": string,
  "email": string,
  "phone": integer,
  "description": string,
  "state": foreign key to state model,
}
```

# Delete Specific Owner
* **Method**: `DELETE`
* **Path**: /owners/<int:pk>

Input:

```json
{
  "name": string,
  "email": string,
  "phone": integer,
  "description": string,
  "state": foreign key to state model,
}
```

Output:

```json
{
  "name": string,
  "email": string,
  "phone": integer,
  "description": string,
  "state": foreign key to state model,
}
```

# Get Specific State
* **Method**: `GET`
* **Path**: /states/

Input:

```json
{
  "name": string,
  "id": integer,
  "abbreviation": string,
}
```

Output:

```json
{
  "name": string,
  "id": integer,
  "abbreviation": string,
}
```

# Create Dog
* **Method**: `POST`
* **Path**: /api/dogs/

Input:

```json
{
  "name": string,
  "age": integer,
  "breed": string,
  "image": file,
  "description": string,
  "gender": string,
  "size": string,
  "owner": foreign key to ownerVO model,
}
```

Output:

```json
{
  "name": string,
  "age": integer,
  "breed": string,
  "image": file,
  "description": string,
  "gender": string,
  "size": string,
  "owner": foreign key to ownerVO model,
}
```

# Get All Dogs
* **Method**: `GET`
* **Path**: /api/dogs/

Input:

```json
{
  "name": string,
  "age": integer,
  "breed": string,
  "image": file,
  "description": string,
  "gender": string,
  "size": string,
  "owner": foreign key to ownerVO model,
}
```

Output:

```json
{
  "name": string,
  "age": integer,
  "breed": string,
  "image": file,
  "description": string,
  "gender": string,
  "size": string,
  "owner": foreign key to ownerVO model,
}
```

# Update Dog
* **Method**: `PUT`
* **Path**: /api/dogs/<int:pk>/

Input:

```json
{
  "name": string,
  "age": integer,
  "breed": string,
  "image": file,
  "description": string,
  "gender": string,
  "size": string,
  "owner": foreign key to ownerVO model,
}
```

Output:

```json
{
  "name": string,
  "age": integer,
  "breed": string,
  "image": file,
  "description": string,
  "gender": string,
  "size": string,
  "owner": foreign key to ownerVO model,
}
```

# Delete Dog
* **Method**: `DELETE`
* **Path**: /api/dogs/<int:pk>/

Input:

```json
{
  "name": string,
  "age": integer,
  "breed": string,
  "image": file,
  "description": string,
  "gender": string,
  "size": string,
  "owner": foreign key to ownerVO model,
}
```

Output:

```json
{
  "name": string,
  "age": integer,
  "breed": string,
  "image": file,
  "description": string,
  "gender": string,
  "size": string,
  "owner": foreign key to ownerVO model,
}
```

# Get Specific Dog
* **Method**: `GET`
* **Path**: /api/dogs/<int:pk>/

Input:

```json
{
  "name": string,
  "age": integer,
  "breed": string,
  "image": file,
  "description": string,
  "gender": string,
  "size": string,
  "owner": foreign key to ownerVO model,
}
```

Output:

```json
{
  "name": string,
  "age": integer,
  "breed": string,
  "image": file,
  "description": string,
  "gender": string,
  "size": string,
  "owner": foreign key to ownerVO model,
}
```