const avatarsData = require('../data');

class Avatar{
    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.health = data.health;
        this.strength = data.strength;
        this.endurance = data.endurance;
    };
    static get all(){
        const avatars = avatarsData.map((avatar) => {new Avatar(avatar)});
        return avatars;
    };
    static findBy(id){
        const avatarData = avatarsData.filter((avatar) => {avatar.id === id})[0];
        const avatar = new Avatar(avatarData);
        return avatar;
    };
};
module.exports = Avatar;