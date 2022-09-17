import React from "react";
import Cover from "../../../../assets/images/code-with-me/make-a-website.png";

function Website() {
  return (
    <div className="website">
      <section>
        <article className="blog-title">
          <h3> Make a website in 14 minutes (6 steps) </h3>
          <p>
            {" "}
            Last updated <b>09/01/2022 </b>
          </p>
        </article>
      </section>
      <article>
        <p> No Experience. No problem.</p>
        <img src={Cover}></img>
      </article>
      <article>
        <h3> Glimpse </h3>
      </article>
      <article>
        <h3>
          {" "}
          <u> STEP 0 </u> Update Computer{" "}
        </h3>
        <p> Optional but Reccommended for smooth sailing </p>
      </article>
      <article>
        <h3>
          {" "}
          <u> STEP 1</u> Software Setup{" "}
        </h3>
        <div className="to-dos">
          <input type="checkbox" />
          Download Google Chrome{" "}
          <a target="_blank" href="https://www.google.com/chrome/downloads/">
            {" "}
            here{" "}
          </a>
        </div>

        <div className="to-dos">
          <input type="checkbox" />
          Install Visual Studio Code (VS Code){" "}
          <a
            target="_blank"
            href="https://code.visualstudio.com/?wt.mc_id=DX_841432"
          >
            {" "}
            here{" "}
          </a>
        </div>

        <div className="to-dos">
          <input type="checkbox" />
          Install Github Desktop{" "}
          <a
            target="_blank"
            href="https://code.visualstudio.com/?wt.mc_id=DX_841432"
          >
            {" "}
            here{" "}
          </a>
        </div>
      </article>
      <article>
        <h3>
          {" "}
          <u> STEP 2</u> Set up html file
        </h3>
        <p>
          {" "}
          Hypertext Markup Language (html) is the language that your browser
          such as Chrome or Safari understands to build the web page.
          Essentially, the content in the file you are about to create will give
          structure to the website.
        </p>
        <div className="to-dos">
          <input type="checkbox" />
          Create a folder in visual studio to store all files for website
        </div>

        <div className="to-dos">
          <input type="checkbox" />
          Create index.html file. It is best practice to name your main html
          file "index.html"
        </div>
        <div className="to-dos">
          <input type="checkbox" />
          In the index.html file, type "!". This will set up the structure of
          the document. No need to understand what all this means. You will
          start to realize that no one knows everything.
        </div>

        <div className="to-dos">
          <input type="checkbox" />
          Go into the body tag, and add an h1 tag
        </div>
      </article>

      <article>
        <h3>
          {" "}
          <u> STEP 3</u> See html file in browser
        </h3>

        <div className="to-dos">
          <input type="checkbox" />
          Add the live preview extension in visual studio
        </div>

        <div className="to-dos">
          <input type="checkbox" />
          Hover over html file and click show preview. You should see it pop up
          in browser.
        </div>
        <p> Epic, you now you have a website. This is a big stepping stone. </p>
      </article>

      <article>
        <h3>
          {" "}
          <u> STEP 4</u> Style website by creating CSS file
        </h3>

        <div className="to-dos">
          <input type="checkbox" />
          Add the live preview extension in visual studio
        </div>

        <div className="to-dos">
          <input type="checkbox" />
          Hover over html file and click show preview. You should see it pop up
          in browser.
        </div>
        <p>
          {" "}
          Epic, you now you have a website. This is a big stepping stone. The
          next step is to post it on the internet.{" "}
        </p>
      </article>

      <article>
        <h3>
          {" "}
          <u> STEP 5</u> Post your website to the internet
        </h3>

        <div className="to-dos">
          <input type="checkbox" />
          Set up Github account
        </div>

        <div className="to-dos">
          <input type="checkbox" />
          Open Github Desktop and sign in
        </div>
        <p> Epic, you now you have a website. This is a big stepping stone. </p>
      </article>

      <article>
        <h3>
          {" "}
          <u> STEP 6</u> If you want to make changes to website
        </h3>

        <div className="to-dos">
          <input type="checkbox" />
          When you make changes to your files.
        </div>

        <div className="to-dos">
          <input type="checkbox" />
          Open Github Desktop and sign in
        </div>
        <p> Epic, you now you have a website. This is a big stepping stone. </p>
      </article>
    </div>
  );
}

export default Website;
