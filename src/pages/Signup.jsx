import "../assets/styles/signup.css";
import signupIMG from "../assets/img/signup.png"
const Signup = () => {
    return (
        <div className="content">
            <div className="login-form">
                <div className="flex justify-center">
                    <img
                        className=" top-img"
                        src={signupIMG}
                        alt="flowers"
                    />
                </div>
                <div className="mt-5 mb-6">
                    <h1 className="text-black text-2xl lg:text-5xl mb-5 md:text-3xl">
                        Welcome to <span className="welcome">Airbnb</span>
                    </h1>
                    <p className="text-black text-xs lg:text-lg md:text-base">
                        Travel far, travel wide, and travel with an open heart.
                        <br />
                        The world is your greatest teacher.
                    </p>
                </div>
                <form className="form-login" action="#" method="post">
                    <label htmlFor="email" className="m-1 text-xs md:text-base lg:text-lg">
                        Email
                    </label>
                    <input
                        className="md:text-base lg:text-lg text-xs"
                        type="email"
                        name=""
                        placeholder="Example@email.com"
                        required=""
                        autofocus=""
                    />
                    <label htmlFor="Phone" className="m-1 text-xs md:text-base lg:text-lg">
                        Phone Number
                    </label>
                    <input
                        className="md:text-base lg:text-lg text-xs"
                        type="tel"
                        name=""
                        placeholder="08123456789"
                        pattern="[0-9]+"
                        required=""
                        autofocus=""
                    />
                    <label htmlFor="Password" className="m-1 md:text-base text-xs lg:text-lg">
                        Password
                    </label>
                    <input
                        className="text-xs md:text-base lg:text-lg"
                        type="password"
                        name=""
                        placeholder="At least 8 characters"
                        required=""
                        autofocus=""
                        pattern=".{8,}"
                        title="Eight or more characters"
                    />
                    <button className="btn text-xs lg:text-base md:text-sm" type="submit">
                        Sign up
                    </button>
                </form>
                <div className="or-container">
                    <h3>or</h3>
                    <button className="btng text-xs lg:text-base md:text-sm" type="submit">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png"
                            alt="#"
                        />
                        Continue With Facebook
                    </button>
                    <button className="btng text-xs lg:text-base md:text-sm" type="submit">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
                            alt="#"
                        />
                        Continue with Google
                    </button>
                    <button className="btng text-xs lg:text-base md:text-sm" type="submit">
                        <img
                            src="https://help.apple.com/assets/6362E41904F57C36D47F1246/6362E41E04F57C36D47F1254/en_US/cfef5ce601689564e0a39b4773f20815.png"
                            alt="#"
                        />
                        Continue with Apple
                    </button>
                </div>
            </div>
            <div className="right-img form-img ">
                <img
                    src={signupIMG}
                    alt="landscape"
                />
            </div>
            {/* We’ll call or text you to confirm your number. Standard message and data rates apply. */}
        </div>
    );
}
export default Signup;