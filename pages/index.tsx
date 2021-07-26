import Image from "next/image";

import everythingPassesPoster from "../img/everythingPassesPoster.jpg";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Monkeyzbox - Positive Vibrations">
    <div className="posterText">
      <h1>Monkeyzbox</h1>
      <p>You have to go away to come back...</p>
    </div>
    <div className="poster">
      <Image
        src={everythingPassesPoster}
        alt="Artwork background with colourful flowers, hearts and faces on a black background"
        layout="fixed"
        sizes="1346"
      />
    </div>
  </Layout>
);

export default IndexPage;
