export default function generate_password(configs) {
    let characters_pool = "";
    let length = configs.length;


    if (configs.uppercase) {
        characters_pool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    
    if (configs.lowercase) {
        characters_pool += "abcdefghijklmnopqrstuvwxyz";
    }

    if (configs.numbers) {
        characters_pool += "0123456789";
    }

    if (configs.symbols) {
        characters_pool += "!@#$%^&*()_+";
    }

    if (configs.ambiguous) {
        characters_pool += "{}[]()/\'\"`~,;:.<>";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        let random_index = Math.random(0, characters_pool.length);
        password += characters_pool[random_index];
    }

    return password;
}