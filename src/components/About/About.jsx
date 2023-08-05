import './About.css';



const Aboutzinggy=({About})=>{
    return(
        <>
            <div className='heading-container'>
            <h3>About</h3>
            </div>
            <div className='Main-descontainer'>
                {About?.map((event)=>(
                  <div className='Des-container'>
                  <h3>{event.main}</h3>
                  <span>{event.Description}</span>
              </div>  
                ))}
            </div>

        </>
    )
}
export default Aboutzinggy;