import Layout from "../../layout/empty.vue"
const userAction = { 
    path : "/UserAction",
    name : "UserActions",
    component : Layout,
    children :[ 
        {
            path : "",
            name : "",
            component : () => import("../../views/StudentRegister.vue")
        },
        {
            path : "StudentRegister",
            name : "StudentRegister",
            component : () => import("../../views/StudentRegister.vue")
        },
        {
            path : "MentorRegister",
            name : "MentorRegister",
            component : () => import("../../views/MentorRegister.vue")
        }
        
    ]
}

export default userAction;