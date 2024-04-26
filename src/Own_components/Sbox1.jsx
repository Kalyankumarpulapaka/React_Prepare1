const Sbox1=(props)=>{
    
    console.log(props)
    return(
<div className="minibox">
<h1 className="hd">{props.raw.name}</h1>
<p1 className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate repellendus enim aut, harum reiciendis veniam rerum labore nesciunt dignissimos sed! Voluptates facere reprehenderit dolorem molestias corporis et perspiciatis magni?</p1> 
<h4 className="hd">Turn over : {props.raw.budject}</h4>
</div>
)
}
export default Sbox1;