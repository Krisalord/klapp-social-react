import logoWhite from '../images/logoWhite.png'

const Index = () => {
    return(
        <div className='index_wrapper'>
            <div className='index_box'>
                <img src={logoWhite}/>
                <span className='signin_span'>Sign In to KLapp</span>
                <button className='signin_btn'><span>Sign In</span></button>
                <span className='index_or'>or</span>
                <button className='signup_btn'><span>Sign Up</span></button>
            </div>
        </div>
    )
}

export default Index