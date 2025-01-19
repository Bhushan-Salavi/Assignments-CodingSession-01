//L1-DynamicUserRoleMessagewithObjectProperties.js
function generateUserRoleMessage(user) {
    const message = 
        user.role === "admin" 
            ? user.active 
                ? "Admin Access Granted!" 
                : "Admin Access Revoked"
            : user.role === "user" 
                ? user.active 
                    ? "User Access Granted!" 
                    : "User Access Revoked"
                : "Access Denied";
    console.log(message);
}

// Example Usage:
let user1 = { name: "Alice", role: "admin", active: false };
generateUserRoleMessage(user1);

let user2 = { name: "Bob", role: "user", active: true };
generateUserRoleMessage(user2); 

let user3 = { name: "Charlie", role: "guest", active: true };
generateUserRoleMessage(user3);
