// There is a tradeoff between query perfomance and consistency

// Normalization (Using references) --> Gives consistency although you have to make double query to get the 
// author and course
let author = {
    name:"tjay"
}

let course = {
    author: "id",
}
// Denormalization (Using embended documents) -- high perfomance as once search can help get the names of all the 
// authors. However consistency problem as one would have to make multiple updates to mae sure every thing 
// worsk correctly
let newcourse = {
    author : {
        name: "tjay"
    }

}
// Hybrid helps give data snapshot over time
let newauthor = {
name: "tjay"
// other props
}
let courses = {
author:{
    id: 'ref',
    name: "tjay"
}
}
