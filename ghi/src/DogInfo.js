import React from 'react';
import { Link } from 'react-router-dom';
// import UploadImageToS3WithNativeSdk from './UploadImageToS3';

class DogInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            breed: '',
            sizes: [],
            genders: [],
            description: '',
            owners: [],
            // image: '',
            hasSignedUp: false,
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleBreedChange = this.handleBreedChange.bind(this);
        this.handleSizeChange = this.handleSizeChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleOwnerChange = this.handleOwnerChange.bind(this);
        // this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };
        delete data.owners;
        delete data.genders;
        delete data.sizes;
        delete data.hasSignedUp;

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
            let successTag = document.getElementById('success-message');
            let formTag = document.getElementById('create-dog-form');
            successTag.classList.remove('d-none');
            formTag.classList.add('d-none');
            this.setState({
                name: '',
                age: '',
                breed: '',
                sizes: '',
                genders: '',
                description: '',
                owners: '',
                // image: '',
                hasSignedUp: true,
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
    handleSizeChange(event) {
        const value = event.target.value;
        this.setState({ size: value });
    }
    handleGenderChange(event) {
        const value = event.target.value;
        this.setState({ gender: value });
    }
    handleDescriptionChange(event) {
        const value = event.target.value;
        this.setState({ description: value });
    }
    handleOwnerChange(event) {
        const value = event.target.value;
        this.setState({ owner: value });
    }
    // handleImageChange(event) {
    //     const value = event.target.value;
    //     this.setState({ image: value });
    // }


    render() {
        let messageClasses = 'alert alert-success d-none mb-0';
        let formClasses = '';
        if (this.state.hasSignedUp) {
            messageClasses = 'alert alert-success mb-0';
            formClasses = 'd-none';
        }
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
                        backgroundRepeat: "no-repeat",
                        opacity: .9,
                    }}
                >
                    <div className="doginfo" id="doginfo">
                        <div className="card mx-auto" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h1>Dog Information</h1>
                                <hr />
                                <form className={formClasses} onSubmit={this.handleSubmit} id="create-dog-form">
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
                                    <div className="mb-3">
                                        <select onChange={this.handleSizeChange} value={this.state.size} required name="size" id="size" className="form-select">
                                            <option value="">Choose Size</option>
                                            <option value="Toy">Toy</option>
                                            <option value="Small">Small</option>
                                            <option value="Medium">Medium</option>
                                            <option value="Large">Large</option>
                                            <option value="Giant">Giant</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <select onChange={this.handleGenderChange} value={this.state.gender} required name="gender" id="gender" className="form-select">
                                            <option value="">Choose Gender</option>
                                            <option value="M">Male</option>
                                            <option value="F">Female</option>
                                        </select>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <textarea onChange={this.handleDescriptionChange} value={this.state.description}
                                            placeholder="Description" required type="text" name="description"
                                            id="description" />
                                    </div>
                                    <div className="mb-3">
                                        <select onChange={this.handleOwnerChange} value={this.state.owner} required name="owner" id="owner" className="form-select">
                                            <option value="">Choose Dog's Owner</option>
                                            {this.state.owners && this.state.owners.map((owner) => {
                                                return (
                                                    <option key={owner.id} value={owner.id}>
                                                        {owner.name}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <br></br>
                                    <button className="btn btn-secondary" type="submit">Submit</button>
                                </form>
                                <div className={messageClasses} id="success-message">
                                    Congratulations!
                                    <br></br>
                                    Your dog is all signed up.
                                    <br></br>
                                    View your dog's profile here:
                                    <br></br>
                                    <Link to="/profile" className="mainlink">
                                        <button type="button" className="btn btn-secondary">View Profile</button>
                                    </Link>
                                    <br></br>
                                    Or create another dog here:
                                    <br></br>
                                    <Link to="/doginfo" className="mainlink">
                                        <button type="button" className="btn btn-secondary">Add Dog</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}


export default DogInfo;
