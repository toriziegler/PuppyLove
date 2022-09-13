import React from 'react';
import { Link } from 'react-router-dom';

class DogInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            breed: '',
            description: '',
            owners: [],
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleBreedChange = this.handleBreedChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleOwnerChange = this.handleOwnerChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };
        delete data.owners
        console.log("CHECKING DATAAAAA", data)

        const url = 'http://localhost:8080/api/dogs/'
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, fetchConfig);
        console.log("RESPONSEEEEEEE", response)
        if (response.ok) {
            this.setState({
                name: '',
                age: '',
                breed: '',
                description: '',
                owners: '',
            });
        }
    }

    async componentDidMount() {
        const URL = 'http://localhost:8080/api/ownerVOs/'
        const response = await fetch(URL);
        if (response.ok) {
            const data = await response.json();
            this.setState({ owners: data.owners });
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
    handleOwnerChange(event) {
        const value = event.target.value;
        this.setState({ owner: value });
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
                                <form onSubmit={this.handleSubmit} id="create-dog-form">
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

                                    <div className="mb-3">
                                        <select onChange={this.handleOwnerChange} value={this.state.owner} required name="owner" id="owner" className="form-select">
                                            <option value="">Choose Dog's Owner</option>
                                            {this.state.owners.map((owner) => {
                                                return (
                                                    <option key={owner.id} value={owner.id}>
                                                        {owner.name}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <br></br>
                                    <Link to="/profile" className="mainlink"><button className="btn btn-primary"
                                        type="submit">Submit</button></Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}


export default DogInfo;
