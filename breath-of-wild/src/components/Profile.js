import React from "react";
import PropTypes from "prop-types";

function Profile({ username, email, signature, phone}) {
    return (
        <>
            <div className="wrap">
                <form className="profile" method="post" action="#">
                    <div className="info">
                        <label>Username</label>
                        <input type="text" name="username"></input>
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