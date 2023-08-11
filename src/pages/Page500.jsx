
import { Link } from "react-router-dom";

import Head from "../components/BigComponents/Head";
import Footer from "../components/BigComponents/Footer";


export default function ServerError() {
    return (
        <div class="wrapper">

            <Head></Head>

            <div class="path">

            </div>

            <div class="body">

                {/* 505 Component */}
                <div class="page-404">

                    <div class="page-404__title">
                        unexpected error
                    </div>

                    <img src="./img/500-img.png" alt="" class="page-404__img" />

                    <div class="page-404__text">
                        An error ocurred and your request couldn’t be <br />completed.
                    </div>
                    <Link to="/">
                        <button class="page-404__button">
                            <div class="page-404__button-text">To home page</div>
                            <div class="page-404__button-shadow"></div>
                        </button>
                    </Link>
                    <div className="page-404__report-button">
                        Report this issue
                    </div>

                </div>
                {/* 505 Component */}

            </div>


            <Footer></Footer>



        </div>
    )
}