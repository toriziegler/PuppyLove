import React from 'react';
import { Link } from 'react-router-dom';

// function ProfileColumn(props) {
//     return (
//         <div className="col">
//             {props.list.map(data => {
//                 const dog = data.dog;
//                 return (
//                     <div key={dog.id} className="card mb-3 shadow card text-white bg-dark">
//                         <img src="https://puppy-love-assets.s3.amazonaws.com/media/Willie_image.webp" className="card-img-top" />
//                         <div className="card-body">
//                             <h5 className="card-title">{dog.name}</h5>
//                             <h6 className="card-subtitle mb-2 text-muted">
//                                 {dog.breed}
//                             </h6>
//                             <p className="card-text">
//                                 {dog.description}
//                             </p>
//                         </div>
//                         <ul className="list-group list-group-flush">
//                             <li className="list-group-item">{dog.age}</li>
//                             <li className="list-group-item">{dog.gender}</li>
//                             <li className="list-group-item">{dog.size}</li>
//                             <li className="list-group-item">{dog.owner.email}</li>
//                             <li className="list-group-item">{dog.owner.phone}</li>
//                         </ul>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// }

const linkStyle = {
    color: 'black',
    textDecoration: "none"
}
class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: [],
            owners: [],
        };
        this.handleOwnerChange = this.handleOwnerChange.bind(this);
        this.getDogs = this.getDogs.bind(this);
    }

    async getDogs() {
        const dogsResponse = await fetch(`http://localhost:8080/api/owners_dogs/${this.state.owner}/`);
        if (dogsResponse.ok) {
            const dogsData = await dogsResponse.json();
            this.setState({
                'dogs': dogsData.dogs,
            })
        }
    }

    async handleOwnerChange(event) {
        const value = event.target.value;
        await this.setState({ owner: value })
        this.getDogs()
    }

    async componentDidMount() {
        const ownerResponse = await fetch('http://localhost:8080/api/ownerVOs/');

        try {
            if (ownerResponse.ok) {
                const ownerData = await ownerResponse.json();
                this.setState({
                    owners: ownerData.owners
                });
            };
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <div className="App">
                <div
                    className="container-fluid d-flex align-items-center"
                    style={{
                        height: "100vh",
                        backgroundImage:
                            "url(https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <div className="mb-3">
                        <select onChange={this.handleOwnerChange} value={this.state.owner} name="owner" required id="owner" className="form-select">
                            <option value="">Which of your dogs would you like to see?</option>
                            {this.state.owners.map(owner => {
                                return (
                                    <option key={owner.id} value={owner.id}>
                                        {owner.name}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <div>
                        <p><Link style={linkStyle} to="/ownerinfo" className="mainlink">
                            <button type="button">Edit your information</button></Link>
                            <Link style={linkStyle} to="/doginfo" className="mainlink">
                                <button type="button">Edit your dog information</button></Link></p>
                        <div>
                            <img src="https://puppy-love-assets.s3.amazonaws.com/media/Willie_image.webp" alt="Willie Da Dog" height={200} width={200} />
                        </div>
                        <h1>Profile</h1>
                        <table className="table table-success table-striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Breed</th>
                                    <th>Size</th>
                                    <th>Gender</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.dogs.map(dog => {
                                    return (
                                        <tr key={dog.id}>
                                            <td>{dog.name}</td>
                                            <td>{dog.description}</td>
                                            <td>{dog.breed}</td>
                                            <td>{dog.size}</td>
                                            <td>{dog.gender}</td>
                                            <td>{dog.owner.email}</td>
                                            <td>{dog.owner.phone}</td>
                                        </tr>
                                    );
                                })}
                                {/* {this.state.dogs.map(dog => {
                                    return (
                                        <ProfileColumn key={dog.id} />
                                    );
                                })} */}
                            </tbody>
                        </table>
                        <h2>Pictures</h2>
                        <table className="table table-success table-striped">
                            <thead>
                                <tr>
                                    <th>Pictures</th>
                                    <th><button>Upload your pictures</button></th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
