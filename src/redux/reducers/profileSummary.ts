export default function (state: any = null, action: any) {
    switch(action?.type) {
        case 'ADD_USER_PROFILE_SUMMARY': {
            return action?.payload?.status === 200 ? (action?.payload?.data ?? state) : state;
        }
    }
    return state;
}