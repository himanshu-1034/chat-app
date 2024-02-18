export default function (state = true, action: any) {
    switch (action.type) {
        case 'LOGIN': {
            return true;
        }
        case 'LOGOUT': {
            return false;
        }
    }
    return state;
}