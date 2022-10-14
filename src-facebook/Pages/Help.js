const Help = () => {
  return (
    <>
      <div>
        <br />
        <center>
          <h3>ABOUT US</h3>
        </center>
        <br />
        <center>
          <p>
            Facebook is an online social media and social networking service
            owned by American company Meta Platforms. Founded in 2004 by Mark
            Zuckerberg with fellow Harvard College students and roommates
            Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris
            Hughes, its name comes from the face book directories often given to
            American university students. Membership was initially limited to
            Harvard students, gradually expanding to other North American
            universities and, since 2006, anyone over 13 years old.
          </p>
        </center>
      </div>
      <div>
        <br />
        <center>
          <h3>Any Feedback</h3>
        </center>
        <br />
        <center>
          <textarea
            rows="10"
            cols="100"
            placeholder="Provide us with the Feedback"
          ></textarea>
        </center>
      </div>
      <div>
        <center>
          {" "}
          <button className="btn">Submit</button>
        </center>
        <br />
        <br />
      </div>
    </>
  );
};
export default Help;
