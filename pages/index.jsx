import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import MyExpertise from '../components/HomeComponents/Expertise/MyExpertise';
import Recommendations from '../components/HomeComponents/Recommendations/Recommendations';
import ClientReviews from '../components/HomeComponents/ClientReviews/ClientReviews';
import { Analytics } from "@vercel/analytics/react"
import { Helmet } from "react-helmet"
const home = () => {
    return (
        <main>
            <Helmet>
                <Analytics />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6172208143098274"
                    crossorigin="anonymous"></script>
		<meta name="google-adsense-account" content="ca-pub-6172208143098274" />
        <title>Asimwe Landry</title>
            </Helmet>
            <div className="Home-Page -z-10">
                <Banner />
                <MyExpertise />
                <Recommendations />
                <ClientReviews />
                <Footer />
            </div>

        </main>
    )
}

export default home
