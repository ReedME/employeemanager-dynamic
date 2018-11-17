/**
 * Authorization Roles
 */
const authRoles = {
    admin    : ['admin'],
    manager  : ['admin', 'manager'],
    employee : ['admin', 'manager', 'employee'],
    onlyGuest: ['guest']
};

export default authRoles;
