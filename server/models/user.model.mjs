class UserModel {
    id;
    firstName;
    lastName;
    username;
    password;
    is_admin;
    /** 
          * @param {number} id 
         * @param {string} firstName 
         * @param {string} lastName 
         * @param {string} username 
         * @param {string} password 
         * @param {boolean} is_admin 
     */
    constructor(id, firstName, lastName, username, password, is_admin) {

    }
}
export { UserModel }