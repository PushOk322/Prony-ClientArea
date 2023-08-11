import { Link } from "react-router-dom";

import Head from "../components/BigComponents/Head";
import Footer from "../components/BigComponents/Footer";


export default function NotFound() {
    return (
        <div class="wrapper">

            <Head></Head>

            <div class="path">

            </div>

            <div class="body">

                {/* 404-component */}
                <div class="page-404">

                    <div class="page-404__title">
                        SOMETHING wrong
                    </div>

                    <img src="./img/404-img.png" alt="" class="page-404__img" />

                    <div class="page-404__text">
                        This page is missing or you assembled the link incorrectly
                    </div>
                    <Link to="/server-error">
                        <button class="page-404__button">
                            <div class="page-404__button-text">To home page</div>
                            <div class="page-404__button-shadow"></div>
                        </button>
                    </Link>

                </div>
                {/* 404-component */}


            </div>


            <Footer></Footer>



        </div>
    )
}