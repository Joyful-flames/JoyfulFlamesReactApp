import React from "react";
import PropTypes from "prop-types";

function Profile({ username, email, signature, phone}) {
    return (
        <>
            <div className="wrap">
                <form className="profile">
                    <div className="info">
                        <label>Username</label>
                        <input type="text" name="username" value={username}></input>
                    </div>
                    <div className="info">
                        <label>E-mail</label>
                        <input type="text" name="email" value={email}></input>
                    </div>
                    <div className="info">
                        <label>Personalized signatures</label>
                        <input className="sign" type="text" name="signature" value={signature}></input>
                    </div>
                    <div className="info">
                        <label>Phone Numbaer</label>
                        <input type="text" name="username" value={phone}></input>
                    </div>
                </form>
            </div>
        </>
    );
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
};

export default Profile;