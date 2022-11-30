import "./About.css";

export default function About() {
  return (
    <div className="about-wrapper">
      <div className="project-description">
        <h1>notYouTube</h1>
        <p>
          notYouTube was a collaborative effort between Carlos Mendoza and
          Youssef Mohamed Farouk to recreate the functionality of a popular
          online video hosting website that cannot be named for legal reasons.
        </p>
      </div>


        <div className="about-carlos">
          <img src="./carlos.png" alt="give us 100% pls" />
          <p>
            Carlos Mendoza was born and raised in Bronx, NY. He is 26 years old
            and first generation college graduate. Currently, Carlos is a fellow
            at Pursuit studying and gaining project experience in Software
            Engineering.
          </p>
        </div>

        <div className="about-youssef">
          <img src="./youssef.png" alt="give us 100% pls" />
          <p>
            Youssef Mohamed Farouk was born in Cairo, Egypt and grew up in
            Brooklyn, NY. He is 26 years old and first generation college
            graduate. Youssef enjoys long walks on the beach and getting 100% on
            the Youtube React assignment.
          </p>
        </div>

    </div>
  );
}
