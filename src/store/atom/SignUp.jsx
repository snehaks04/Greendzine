import {atom} from 'recoil'


export const User = atom({
    key:'User',
    default:''
})

// export const Uservalue=selector({
//     key: "UserValue",  
//     get:({get})=>{
//        return get(User).toString()
//     }
// })
export const Pass = atom({
    key:'Pass',
    default:''
})

// export const Passvalue=selector({
//     key: "Passvalue",  
//     get:({get})=>{
//     return get(Pass).toString()
//     }
// })


export const Newpass = atom({
    key:'Newpass',
    default:''
})
// export const Newpassvalue=selector({
//     key: "Newpassvalue",  
//     get:({get})=>{
//     return get(Pass).toString()
//     }
// })
