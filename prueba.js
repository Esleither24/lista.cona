const contacts = [
    { name: 'John', email: '' },
    { name: '', email: '' } // invalid entry, missing both a name and an email address
    ];
    function validateContact(contact) {
    if (!contact.name ||!contact.email){
    return false;
    }
    let regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(!regExEmail.test(contact.email)){
    console.log("Invalid Email");
    return false;
    }
    
    return true;
    };
    
    for (let i=0;i);