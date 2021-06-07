import Layout from "../../layout/index.vue"
const base = { 
    path : "/",
    name : "Home",
    component : Layout,
    children :[ 
        {
            path : "",
            name : "",
            component : () => import("../../views/Home.vue")
        }
    ]
}

export default base;