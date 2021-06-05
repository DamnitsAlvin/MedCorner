export default function Category(props){
    const {category} = props; 
    return(
        category.map(cat=>(
            <span>{cat}</span>
        ))
    )
}