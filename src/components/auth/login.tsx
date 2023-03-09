import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authentication } from "../../firebase-config";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [submittingData, setSubmittingData] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        const user = authentication.currentUser
        if (user) {
            // User is signed in.
            navigate("/dashboard");
        } else {
            // No user is signed in.
        }
    }, [])
    return (<React.Fragment>

        {/* <!--begin::Main--> */}
        <div className="d-flex flex-column flex-root">
            {/* <!--begin::Authentication - Sign-in --> */}
            <div className="d-flex flex-column flex-lg-row flex-column-fluid">
                {/* <!--begin::Aside--> */}
                <div className="d-flex flex-column flex-lg-row-auto bg-primary w-xl-600px positon-xl-relative">
                    {/* <!--begin::Wrapper--> */}
                    <div className="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-600px scroll-y">
                        {/* <!--begin::Header--> */}
                        <div className="d-flex flex-row-fluid flex-column text-center p-5 p-lg-10 pt-lg-20">
                            {/* <!--begin::Logo--> */}
                            <a href="../../index.html" className="py-2 py-lg-20">
                                <img alt="Logo" src="../../assets/media/logos/logo-ellipse.svg" className="h-60px h-lg-70px" />
                            </a>
                            {/* <!--end::Logo--> */}

                            {/* <!--begin::Title--> */}
                            <h1 className="d-none d-lg-block fw-bold text-white fs-2qx pb-5 pb-md-10">
                                Welcome to Craft
                            </h1>
                            {/* <!--end::Title--> */}

                            {/* <!--begin::Description--> */}
                            <p className="d-none d-lg-block fw-semibold fs-2 text-white">
                                Plan your blog post by choosing a topic creating <br />
                                an outline and checking facts
                            </p>
                            {/* <!--end::Description--> */}
                        </div>
                        {/* <!--end::Header--> */}

                        {/* <!--begin::Illustration--> */}
                        <div className="d-none d-lg-block d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-100px min-h-lg-350px"
                            style={{ backgroundImage: "url(./assets/media/illustrations/sigma-1/17.png)" }}>
                            {/* "background-image: url(../../assets/media/illustrations/sigma-1/17.png)" */}
                        </div>
                        {/* <!--end::Illustration--> */}
                    </div>
                    {/* <!--end::Wrapper--> */}
                </div>
                {/* <!--begin::Aside--> */}

                {/* <!--begin::Body--> */}
                <div className="d-flex flex-column flex-lg-row-fluid py-10">
                    {/* <!--begin::Content--> */}
                    <div className="d-flex flex-center flex-column flex-column-fluid">
                        {/* <!--begin::Wrapper--> */}
                        <div className="w-lg-500px p-10 p-lg-15 mx-auto">

                            {/* <!--begin::Form--> */}
                            <form className="form w-100" noValidate={false} id="kt_sign_in_form" data-kt-redirect-url="/craft/index.html" action="basic.html#">
                                {/* <!--begin::Heading--> */}
                                <div className="text-center mb-10">
                                    {/* <!--begin::Title--> */}
                                    <h1 className="text-dark mb-3">
                                        Sign In to Craft        </h1>
                                    {/* <!--end::Title--> */}

                                    {/* <!--begin::Link--> */}
                                    <div className="text-gray-400 fw-semibold fs-4">
                                        New Here?

                                        <Link to="/register" className="link-primary fw-bold">
                                            Create an Account
                                        </Link>
                                    </div>
                                    {/* <!--end::Link--> */}
                                </div>
                                {/* <!--begin::Heading--> */}

                                {/* <!--begin::Input group--> */}
                                <div className="fv-row mb-10">
                                    {/* <!--begin::Label--> */}
                                    <label className="form-label fs-6 fw-bold text-dark">Email</label>
                                    {/* <!--end::Label--> */}

                                    {/* <!--begin::Input--> */}
                                    <input className="form-control form-control-lg form-control-solid" type="text" name="email" autoComplete="off" onChange={(e) => { setEmail(e.target.value) }} />
                                    {/* <!--end::Input--> */}
                                </div>
                                {/* <!--end::Input group--> */}

                                {/* <!--begin::Input group--> */}
                                <div className="fv-row mb-10">
                                    {/* <!--begin::Wrapper--> */}
                                    <div className="d-flex flex-stack mb-2">
                                        {/* <!--begin::Label--> */}
                                        <label className="form-label fw-bold text-dark fs-6 mb-0">Password</label>
                                        {/* <!--end::Label--> */}

                                        {/* <!--begin::Link--> */}
                                        <a href="password-reset.html" className="link-primary fs-6 fw-bold">
                                            Forgot Password ?
                                        </a>
                                        {/* <!--end::Link--> */}
                                    </div>
                                    {/* <!--end::Wrapper--> */}

                                    {/* <!--begin::Input--> */}
                                    <input className="form-control form-control-lg form-control-solid" type="password" name="password" autoComplete="off" onChange={(e) => { setPassword(e.target.value) }} />
                                    {/* <!--end::Input-->         */}
                                </div>
                                {/* <!--end::Input group--> */}

                                {/* <!--begin::Actions--> */}
                                <div className="text-center">
                                    {/* <!--begin::Submit button--> */}
                                    <button type="submit" id="kt_sign_in_submit" className="btn btn-lg btn-primary w-100 mb-5" onClick={(e) => {
                                        e.preventDefault();
                                        setSubmittingData(true);

                                        signInWithEmailAndPassword(authentication, email, password)
                                            .then((response) => {
                                                console.log("Response " + JSON.stringify(response));
                                                console.log("Response User " + JSON.stringify(response.user));
                                                // window.localStorage.setItem("token", response)
                                                // sessionStorage.setItem('token', response.user..refreshToken)
                                                // navigate 

                                                navigate("/dashboard");

                                            }).catch((error) => {
                                                if (error.code == "auth/email-already-in-use") {
                                                    alert("The email address is already in use");
                                                } else if (error.code == "auth/invalid-email") {
                                                    alert("The email address is not valid.");
                                                } else if (error.code == "auth/operation-not-allowed") {
                                                    alert("Operation not allowed.");
                                                } else if (error.code == "auth/weak-password") {
                                                    alert("The password is too weak.");
                                                }

                                                setSubmittingData(false);
                                            });

                                        // navigate("/about");
                                    }}>
                                        {
                                            submittingData ? <span className="indicator-label">
                                                Please wait...
                                            </span> : <span className="indicator-label">
                                                Continue
                                            </span>
                                        }
                                    </button>
                                    {/* <!--end::Submit button--> */}

                                    {/* <!--begin::Separator--> */}
                                    <div className="text-center text-muted text-uppercase fw-bold mb-5">or</div>
                                    {/* <!--end::Separator--> */}

                                    {/* <!--begin::Google link--> */}
                                    <a href="basic.html#" className="btn btn-flex flex-center btn-light btn-lg w-100 mb-5">
                                        <img alt="Logo" src="../../assets/media/svg/brand-logos/google-icon.svg" className="h-20px me-3" />
                                        Continue with Google
                                    </a>
                                    {/* <!--end::Google link--> */}

                                    {/* <!--begin::Google link--> */}
                                    <a href="basic.html#" className="btn btn-flex flex-center btn-light btn-lg w-100 mb-5">
                                        <img alt="Logo" src="../../assets/media/svg/brand-logos/facebook-4.svg" className="h-20px me-3" />
                                        Continue with Facebook
                                    </a>
                                    {/* <!--end::Google link--> */}

                                    {/* <!--begin::Google link--> */}
                                    <a href="basic.html#" className="btn btn-flex flex-center btn-light btn-lg w-100">
                                        <img alt="Logo" src="../../assets/media/svg/brand-logos/apple-black.svg" className="theme-light-show h-20px me-3" />
                                        <img alt="Logo" src="../../assets/media/svg/brand-logos/apple-black-dark.svg" className="theme-dark-show h-20px me-3" />
                                        Continue with Apple
                                    </a>
                                    {/* <!--end::Google link--> */}
                                </div>
                                {/* <!--end::Actions--> */}
                            </form>
                            {/* <!--end::Form-->  */}
                        </div>
                        {/* <!--end::Wrapper--> */}
                    </div>
                    {/* <!--end::Content-->        */}

                    {/* <!--begin::Footer--> */}
                    <div className="d-flex flex-center flex-wrap fs-6 p-5 pb-0">
                        {/* <!--begin::Links--> */}
                        <div className="d-flex flex-center fw-semibold fs-6">
                            <a href="https://keenthemes.com" className="text-muted text-hover-primary px-2" target="_blank">About</a>

                            <a href="https://devs.keenthemes.com" className="text-muted text-hover-primary px-2" target="_blank">Support</a>

                            <a href="https://themes.getbootstrap.com/product/craft-bootstrap-5-admin-dashboard-theme" className="text-muted text-hover-primary px-2" target="_blank">Purchase</a>
                        </div>
                        {/* <!--end::Links--> */}
                    </div>
                    {/* <!--end::Footer--> */}
                </div>
                {/* <!--end::Body--> */}
            </div>
            {/* <!--end::Authentication - Sign-in--> */}
        </div>
        {/* <!--end::Main--> */}
    </React.Fragment>);
}

export default LoginPage;