let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;
if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);


let userType = "subscriber";
let userCategory;
switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";


console.log("Authentication Status:", authenticationStatus);

let Role = "enrolled member";  
let accessMessage;

switch (Role) {
    case "employee":
        accessMessage = "Access granted: You have full access to Dietary Services.";
        break;
    case "enrolled member":
        accessMessage = "Access granted: You have full access to Dietary Services and one-on-one interaction with a dietician.";
        break;
    case "subscriber":
        accessMessage = "Partial access granted: You can access limited features of the Dietary Services.";
        break;
    case "non-subscriber":
        accessMessage = "Access denied: Please enroll or subscribe to access Dietary Services.";
        break;
    default:
        accessMessage = "Invalid role: Please enter a valid role (Employee, Enrolled Member, Subscriber, or Non-Subscriber).";
}

console.log("User Role:", userRole);
console.log(accessMessage);
