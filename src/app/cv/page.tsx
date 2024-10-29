import React from 'react'
import "./cv.css"
const page = () => {
  return (
    <div>
    <section className="start-section">
    <div className="heading">
      <h2>Rabia Sohail</h2>
      <h3>Frontend Web Developer</h3>
    </div>
  </section>
  <section className="work-section">
    <div className="main">
      <div className="leftsidebar">
        <h4>Summary</h4>
        <br />
        <p style={{ textAlign: "justify", marginTop: 20 }}>
          As a passionate Front-End Developer, I specialize in crafting
          responsive, visually appealing, and user-friendly websites and web
          applications. With a deep understanding of HTML, CSS, Tailwind-CSS
          JavaScript, and TypeScript, I bring designs to life, ensuring seamless
          user experiences across all devices. My expertise in React.js,
          Angular, and modern front-end frameworks enables me to build dynamic
          and interactive user interfaces. <br />
          <br />
          I focus on performance optimization, accessibility, and clean code
          practices, ensuring every project meets the highest standards.
          Collaborating closely with designers and back-end developers, I ensure
          that UI/UX visions are transformed into functional, interactive
          applications. With experience in using tools like Git and vercel I
          streamline the development process and deliver maintainable code.{" "}
          <br />
          <br />
          Constantly learning and adapting to new technologies, I am committed
          to enhancing my skills to stay ahead of the latest trends in web
          development. Whether it’s building a single-page application or
          optimizing existing websites, I aim to provide efficient solutions
          that meet both user needs and business goals.
        </p>
        <h4>Work History</h4> <hr />
        <div className="table">
          <br />
          <table>
            <tbody>
              <tr>
                <td></td>
                <th> 2021-2022</th>
                <td>
                  <span>Project&nbsp;Manager</span>{" "}
                </td>
                <td>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing Error,
                    minus ipsa labore molestias repellendus alias nisi dolorum
                    aliquam dolo ribus debitis, blanditiis non, iure dolores in
                    aliquid? Repellat quide perferendis culpa!{" "}
                  </p>
                </td>
                <td>
                  <ul>
                    <li>Tendering</li>
                    <li>Procurement</li>
                    <li>Estimating</li>
                    <li>Site Supervising and</li>
                    <li>Material Testing</li>
                  </ul>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table">
          <br />
          <table>
            <tbody>
              <tr>
                <td></td>
                <th>2015-2020</th>
                <td>
                  <span>Assistant&nbsp;Manager</span>
                </td>
                <td>
                  {" "}
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius impedit harum earum quaerat nobis commodi fugit
                    reprehenderit distinctio vel dicta, incidunt, provident
                    architecto, aliquid consequuntur? Ad consequatur esse alias
                    iste?
                  </p>
                </td>
                <td>
                  {" "}
                  <ul>
                    <li>LoremIspum</li>
                    <li>LoremIspum</li>
                    <li>LoremIspum dolar </li>
                    <li>LoremIspum</li>
                    <li>LoremIspum dolar</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table">
          <br />
          <table>
            <tbody>
              <tr>
                <td></td>
                <th>2015-2020</th>
                <td>
                  <span>Assistant&nbsp;Manager</span>
                </td>
                <td>
                  {" "}
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius impedit harum earum quaerat nobis commodi fugit
                    reprehenderit distinctio vel dicta, incidunt, provident
                    architecto, aliquid consequuntur? Ad consequatur esse alias
                    iste?
                  </p>
                </td>
                <td>
                  {" "}
                  <ul>
                    <li>LoremIspum </li>
                    <li>LoremIspum Dolor</li>
                    <li>LoremIspum </li>
                    <li>LoremIspum </li>
                    <li>LoremIspum Dolor</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4>Education</h4>
        <hr />
        <br />
        <div className="table2">
          <table>
            <tbody>
              <tr>
                <th>2009-2010 </th>
                <td>Bachelor's of Art from Karachi University (2nd Division)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table2">
          <table>
            <tbody>
              <tr>
                <th>2007-2008</th>
                <td>Intermediate from Government Girls College of Korangi 6 (1st Division)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table2">
          <table>
            <tbody>
              <tr>
                <th> 2005-2006 </th>
                <td>Matric from Nasir English Secondary School (B Grade)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="rightsidebar">
        <img
          src="/images/rab (4).jpg"
          alt=""
          height="200px"
          width="200px"
          className="image"
        />
        <h2>Personal Info</h2>
        <br />
        <h3>Address</h3>
        <br />
        <span className="span">House No 21 B-46 Lorem, ipsum</span> <br />{" "}
        <span>dolor sit amet consectetur adipisicing.</span>
        <br />
        <h3>Phone</h3>
        <br />
        <span className="span">+92-3101234567 </span> <br />
        <h3>Email</h3>
        <br />
        <a href="">
          <span className="span">rabiasohail@gmail.com</span>
        </a>{" "}
        <br />
        <h3>Date of Birth</h3> <br />
        <span className="span">
          0 <sup>th</sup> January 1900{" "}
        </span>
        <br />
        <h3>Marital Status</h3>
        <br /> <span className="span">Married</span>
        <h2>Skills</h2> <br />
        <ul className="skillss">
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
          <li>AutoCAD 2D &amp; 3D</li>
          <li>PRIMAVERA</li>
          <li>
            Internet, Microsoft Office <br /> (PPT,EXCEL &amp; Word)
          </li>
        </ul>

        <div className='lang'>
        <h2>Languages</h2>
        <br />
        <h3>English⭐⭐⭐⭐⭐</h3>
        <br />
        <h3>Urdu⭐⭐⭐⭐⭐</h3>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default page