// Intersection types
interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}

type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;

//===============================================================================


// typeof
type alphanumeric = string | number;

function add(a: alphanumeric, b: alphanumeric) {
    if ( typeof a === 'number' && typeof b === 'number' ) {
        return a + b;
    }

    if ( typeof a === 'string' && typeof b === 'string' ) {
        return a.concat(b);
    }

    throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
}

//=============================================================================

// is-instanceof
class Customer1 {
    isCreditAllowed(): boolean {
        // ...
        return true;
    }
}

function isCustomer(partner: any): partner is Customer {
    return partner instanceof Customer1;
}

// in
if ( 'isCreditAllowed' in Customer1 )
    console.log('exist');