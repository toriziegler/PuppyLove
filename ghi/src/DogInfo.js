import React from 'react';

class DogInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            breed: '',
            description: '',
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleBreedChange = this.handleBreedChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };

        const url = 'http://localhost:8080/api/dogs/'
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            this.setState({
                name: '',
                age: '',
                breed: '',
                description: '',
            });
        }
    }

    handleNameChange(event) {
        const value = event.target.value;
        this.setState({ name: value });
    }
    handleAgeChange(event) {
        const value = event.target.value;
        this.setState({ age: value });
    }
    handleBreedChange(event) {
        const value = event.target.value;
        this.setState({ breed: value });
    }
    handleDescriptionChange(event) {
        const value = event.target.value;
        this.setState({ description: value });
    }

    render() {
        return (
            <div className="App">
                <div
                    className="container-fluid d-flex align-items-center"
                    style={{
                        height: "100vh",
                        backgroundImage:
                            "url(https://images.pexels.com/photos/776373/pexels-photo-776373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <div className="doginfo" id="doginfo">
                        <div className="card mx-auto" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h1>Dog Information</h1>
                                <hr />
                                <form onSubmit={this.handleSubmit} id="create-appointment-form">
                                    <div className="form-floating mb-3">
                                        <input onChange={this.handleNameChange} value={this.state.name}
                                            placeholder="Name" required type="text" name="name"
                                            id="name" />
                                    </div>
                                    <div className="form-floating mb-3" >
                                        <input onChange={this.handleAgeChange} value={this.state.age}
                                            placeholder="Age" required type="number" name="age"
                                            id="age" />
                                    </div>
                                    <div className="form-floating mb-3" >
                                        <input onChange={this.handleBreedChange} value={this.state.breed}
                                            placeholder="Breed" required type="text" name="breed"
                                            id="breed" />
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input onChange={this.handleDescriptionChange} value={this.state.description}
                                            placeholder="Description" required type="text" name="description"
                                            id="description" />
                                    </div>
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default DogInfo;
