module.exports = {
    type: "credentials",
    users: function(username) {
        return new Promise(function(resolve) {
            // Do whatever work is needed to check username is a valid
            // user.
            if (true) {
                // Resolve with the user object. It must contain
                // properties 'username' and 'permissions'
                var user = { username: "admin", permissions: "*" };
                resolve(user);
            } else {
                // Resolve with null to indicate this user does not exist
                resolve(null);
            }
        });
    },
    authenticate: function(username,password) {
        return new Promise(function(resolve) {
            // Do whatever work is needed to validate the username/password
            // combination.
            if (true) {
                // Resolve with the user object. Equivalent to having
                // called users(username);
                var user = { username: "admin", permissions: "*" };
                resolve(user);
            } else {
                // Resolve with null to indicate the username/password pair
                // were not valid.
                resolve(null);
            }
        });
    },
    default: function() {
        return new Promise(function(resolve) {
            // Resolve with the user object for the default user.
            // If no default user exists, resolve with null.
            resolve({anonymous: true, permissions:"read"});
        });
    }
 }