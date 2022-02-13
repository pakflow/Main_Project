import React from "react";
import nikepatta from "../components/Videos/nikepatta.mp4";
import './Home.css';

const Home = () => {
  return (
    <div className="bkgrd">
      <video
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "traslate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={nikepatta} type="video/mp4" />
      </video>
      <div className="forvirgil">
      <h2 style={{color: "white"}}>"VIRGIL FOREVER"</h2>
      <div className="virgil-forever">
      <img
        style={{ width: "400px", height: "auto" }}
        src="https://static01.nyt.com/images/2021/11/28/obituaries/28Abloh/28Abloh-superJumbo.jpg?quality=75&auto=webp"
        alt="Virgil Ablo"
      />
      <p style={{marginLeft: "20px", marginRight: "15px"}}>
      We are devastated to announce the passing of our beloved Virgil Abloh, a fiercely devoted father, husband, son, brother, and friend. He is survived by his loving wife Shannon Abloh, his children Lowe Abloh and Grey Abloh, his sister Edwina Abloh, his parents Nee and Eunice Abloh, and numerous dear friends and colleagues.
<br></br>
For over two years, Virgil valiantly battled a rare, aggressive form of cancer, cardiac angiosarcoma. He chose to endure his battle privately since his diagnosis in 2019, undergoing numerous challenging treatments, all while helming several significant institutions that span fashion, art, and culture.
<br></br>
Through it all, his work ethic, infinite curiosity, and optimism never wavered. Virgil was driven by his dedication to his craft and to his mission to open doors for others and create pathways for greater equality in art and design. He often said, “Everything I do is for the 17-year-old version of myself,” believing deeply in the power of art to inspire future generations.
<br></br>
We thank you all for your love and support, and we ask for privacy as we grieve and celebrate Virgil’s life.
<br></br><br></br>
Virgil Abloh
September 30, 1980 – November 28, 2021
      </p>
      </div>
      </div>
    </div>
  );
};

export default Home;
