# Alamsyah.github.io

*index.html*
``` <!DOCTYPE html>
<html lang="id">

    <!--HEAD-->
        <head>

           <!--META_DEVICE-->
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible"IE-edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <!--END-->

            <!--TITLE_WEBSITE-->
            <title> @Alamsyah </title>
            <!--end-->

            <!--URL_ONLY-->
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
            <!--end-->

            <!--CUSTOME_CSS-->
            <link rel="stylesheet" href="style.css">
            <!--end-->

        </head>
    <!--end-->

    <!--BODY-->

        <body>

            <!--header design-->
            <header class="header">

                <a href="#" class="logo">Alamsyah</a>

                <div class="action">
                    <div class="profile" id="menu-icon" onclick="menuToggle();">
                        <img src="https://telegra.ph/file/b1481844fc1736928fe60.jpg" alt="">
                    </div>
            
                    <div class="menu">
                        <h3>
                            User Account
                            <div>
                                Operational
                            </div>
                        </h3>
                        <ul>
                            <li>
                                <img src="media/Profile.gif">
                                <a href="#about">My Profile</a>
                            </li>
                            <li>
                                <img src="media/Source.gif">
                                <a href="source-code/readme.md">Source Code</a>
                            </li>
                            <li>
                                <img src="media/Support.gif">
                                <a href="support/index.html">Support:}</a>
                            </li>
                            <li>
                                <img src="media/Web.gif">
                                <a href="website/index.html">Web Kelas</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </header>

                            <!--home-->

            <section class="home" id="home">
                 <div class="home-content">
                    <h3> Hello Viwers, Me a</h3>
                    <h1> Alamsyah</h1>
                    <h3> And I'm a <span class="multiple-text"></span>  </h3>
                    <p>  I am a student who wants to study and deepen programming, if you want to become a programmer, study hard yourself because the teacher doesn't teach all the time </p>
                    <div class="social-media">
                        <a href="#"><i class='bx bxl-facebook'></i></a>
                        <a href="#"><i class='bx bxl-whatsapp'></i></a>
                        <a href="#"><i class='bx bxl-instagram-alt'></i></a>
                        <a href="#"><i class='bx bxl-github'></i></a>
                    </div>
                    <a href="#" class="btn">Download CV</a>
                 </div>
                 <div class="home-img">

                    <img src="media/pp.png">

                </div>
            </section>

                            <!--endd-->
                            <!--about-->
            
  <!-- About Section -->
  <section class="about" id="about">
    <div class="about-img">
    <img class="img-about" src="https://telegra.ph/file/a8af5c3d22fa3e6b46b95.jpg">
    </div>
    </div>
    <div class="about-content">
    <h2 class="heading"> About <span> Mee </span> </h2> <br/>   
    <h3> Frontend Developer </h3>
    <p>  I am a student who wants to study and deepen programming, if you want to become a programmer, study hard yourself because the teacher doesn't teach all the time </p>
    <a href="#" class="btn"> Read More </a> 
    </div>
</section>
  <!-- End About Section -->

  <!-- Services Section -->

    <section class="services" id="services">
        <h2 class="heading">Our <span> Service </span> </h2>

        <div class="services-container">
            <div class="services-box">
                <i class='bx bx-code-alt'></i>
                <h3> Web Development </h3>
                <p> Web developers create and maintain websites.
                    <br/> They are also responsible for the site's technical aspects, such as its performance and capacity, which are measures of a website's speed and how much traffic the site can handle.
                    <br/> In addition, web developers may create content for the site </p>
                <a href="#" class="btn" > Read More </a>
            </div>
        </div>

        <div class="services-container">
            <div class="services-box">
                <i class='bx bxs-paint'></i>
                <h3> Designer </h3>
                <p>A designer is a person who plans the form or structure of something before it is made, by preparing drawings or plans.
                    <br> In practice, anyone who creates tangible or intangible objects, products, processes, laws, games, graphics, services, or experiences can be referred to as a designer.</p>
                <a href="#" class="btn" > Read More </a>
            </div>
        </div>

        <div class="services-container">
            <div class="services-box">
                <i class='bx bx-bot'></i>
                <h3> Bot WhatsApp Dev </h3>
                <p>WhatsApp chatbot is an automated software powered by rules or artificial intelligence (AI) and runs on the WhatsApp platform.
                <br/> People communicate with WhatsApp chatbot via the chat interface, like talking to a real person.</p>
                <a href="#" class="btn" > Read More </a>
            </div>
        </div>

    </section><br>
            
  <!-- End Services Section -->     
  
  <!-- Galery Section -->


<section class="galery" id="galery">


  <h2 class="heading"> Galery <span>Post</span> </h2><br>

<div class="slider">
<div class="slider-box">
    <!-- fade css -->
    <div class="myslide">
        <img src="media/thumbnail.jpg" style="width: 100%; height: 100%;">
    </div>
    
    <div class="myslide">
        <img src="media/pp.png" style="width: 100%; height: 100%;">
    </div>
    
    <div class="myslide">
        <img src="https://telegra.ph/file/9dd5a26d96e6baa30f8ca.png" style="width: 100%; height: 100%;">
    </div>
    
    <div class="myslide">
        <img src="https://telegra.ph/file/6adeecff9c6d5427ecc59.jpg" style="width: 100%; height: 100%;">
    </div>
    
    <div class="myslide">
        <img src="https://telegra.ph/file/5032381fe1a2bb6f7ef5b.png" style="width: 100%; height: 100%;">
    </div>
    <!-- /fade css -->
    
    <!-- onclick js -->
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
      <a class="next" onclick="plusSlides(1)">&#10095;</a>
    
    <div class="dotsbox" style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
        <span class="dot" onclick="currentSlide(4)"></span>
        <span class="dot" onclick="currentSlide(5)"></span>
    </div>
    </div>
    <!-- /onclick js -->
</div><br><br> 
</section>

<!-- stats section -->

<section class="stats" id="stats">

<h2 class="heading"> Skill <span> Codingan </span> </h2> <br>
                       <div class="our-skills">
<div class="skill">
   <p class="html">Html</p>
   <div class="progress-line" style="
               --bg: #ff981a;
               --wd: 80%;
               --tx: '80%'">
       <span></span>
   </div>
</div>
<div class="skill">
   <p class="css">CSS</p>
   <div class="progress-line" style="
               --bg: #3bd8ff;
               --wd: 50%;
               --tx: '50%'">
       <span></span>
   </div>
</div>
<div class="skill">
   <p class="js">Js</p>
   <div class="progress-line" style="
               --bg: #ffff08;
               --wd: 8%;
               --tx: '8%'">
       <span></span>
   </div>
</div>
<div class="skill">
    <p class="python">python</p>
    <div class="progress-line" style="
                --bg: #2600ff;
                --wd: 10%;
                --tx: '10%'">
        <span></span>
    </div>
 </div>
 <div class="skill">
    <p class="php">php</p>
    <div class="progress-line" style="
                --bg: #c300dd;
                --wd: 5%;
                --tx: '5%'">
        <span></span>
    </div>
 </div>
 <div class="skill">
    <p class="designer">designer</p>
    <div class="progress-line" style="
                --bg: #19ff40;
                --wd: 40%;
                --tx: '40%'">
        <span></span>
    </div>
 </div>
</div>
</section>

<!-- End -->

</section>

  <!-- End Galery Section -->

  <!-- Section Project -->

    <section class="portfolio" id="portfolio">
        <h2 class="heading">Latest <span> Project</span> </h2>

        <div class="portfolio-container">
            <div class="portfolio-box">
                <img src="media/img1.jpg" alt="">
                <div class="portfolio-layer">
                    <h4>Web</h4>
                    
                    <a href="#"> <i class='bx bx-link-external'> </i> </a>
                </div>
            </div>

            <div class="portfolio-box">
                <img src="media/img2.jpg" alt="">
                <div class="portfolio-layer">
                    <h4> Design </h4>
                    
                    <a href="#"> <i class='bx bx-link-external'> </i> </a>
                </div>
            </div>

            <div class="portfolio-box">
                <img src="media/img3.jpg" alt="">
                <div class="portfolio-layer">
                    <h4> Bot</h4>
                    
                    <a href="#"> <i class='bx bx-link-external'> </i> </a>
                </div>
            </div>

            <div class="portfolio-box">
                <img src="media/img4.jpg" alt="">
                <div class="portfolio-layer">
                    <h4> none </h4>
                    
                    <a href="#"> <i class='bx bx-link-external'> </i> </a>
                </div>
            </div>

            <div class="portfolio-box">
                <img src="media/img5.jpg" alt="">
                <div class="portfolio-layer">
                    <h4>none </h4>
                    
                    <a href="#"> <i class='bx bx-link-external'> </i> </a>
                </div>
            </div>

            <div class="portfolio-box">
                <img src="media/img2.jpg" alt="">
                <div class="portfolio-layer">
                    <h4> none </h4>
                    
                    <a href="#"> <i class='bx bx-link-external'> </i> </a>
                </div>
            </div>
        </div>

    </section>

  <!-- End Project Section -->
  
  <section class="contact" id="contact">
      <div class="heading"> Contact <span> Me! </span>
      
      <form action="#">
          <div class="input-box">
              <input type="text" placeholder="Full Name">
              <input type="email" placeholder="Enail Address">
          </div>
          <div class="input-box">

              <input type="number" placeholder="Mobile Number">

              <input type="text" placeholder="Enail Subject">
          </div>
          <textarea name="" cols="30" rows="10" placeholder="Your Message"></textarea>
          <input type="submit" value="Send Message" class="btn">
      </form>
  </section>
  
  <footer class="footer">
  <div class="footer-text">
  <p> Copyright & copy; 2023 by Yu:3 | All Right Reserved.| </p>
  </div>
  </footer>



        </body>

    <!--end-->
<script src="https://unpkg.com/scrollreveal"></script>
    <script src="src/script-scroll-v2.js"></script>
    <script src="src/script-scroll.js"></script>
    <script src="src/script-menu.js"></script>
    

    <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>
    <script src="src/script-slide.js"></script>
    <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
<script src="src/script-type.js"></script>

</html> ```



*style.css*
``` @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

* 
{
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
    text-decoration: none;
    border: none;
    outline: none;
    scroll-behavior: smooth;
    font-family: 'Poppins', sans-serif;
}


:root
{
    --bg-color: #1f242d;
    --second-bg-color: #323945;
    --text-color: #fff;
    --main-color: #0ef;
    --main-after: rgb(103, 245, 255) ;
    --shadow-after: #ff52f1;
    --shadow-color: #ff00ea;
}

html
{
    font-size: 62.5%;
    overflow-x: hidden;
}

body
{
    background: var(--bg-color);
    color: var(--text-color);
}

section
{
    min-height: 100vh;
    padding: 10rem 9% 2rem;
}

span
{
    color: var(--main-color);
}

.section-title {
	font-size: 4rem;
	font-weight: 300;
	color: black;
	margin-bottom: 10px;
	text-transform: uppercase;
	letter-spacing: 0.2rem;
	text-align: center;
}

                    /* HEADER */
.header
{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    padding: 2rem 9%;
    background: var(--bg-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
}

.header .sticky
{
  border-bottom: .1rem solid rgba(0,0,0, .2);
}

.logo
{
    font-size: 2.5rem;
    color: var(--text-color);
    font-weight: 600;
    cursor: default;
}

.action{
    position: relative;
    right: 25px;
    top: 0px
}
.action .profile{
    border-radius: 50%;
    cursor: pointer;
    height: 48px;
    overflow: hidden;
    position: relative;
    width: 48px;
}
.action .profile img{
    width: 100%;
    top:0;
    position: relative;
    object-fit: cover;
    left: 0;
    height: 100%;
}
.action .menu{
    background-color: var(--second-bg-color);
    box-sizing:0 5px 25px rgba(0,0,0,0.1);
    box-shadow: var(--bg-color);
    border-radius: 15px;
    padding: 10px 20px;
    position: absolute;
    right: -15px;
    width: 200px;
    transition: 0.5s;
    top: 120px;
    visibility: hidden; 
    opacity: 0;
}
.action .menu.active{
    opacity: 1;
    top: 60px;
    visibility: visible;
}
.action .menu::before{
    background-color: var(--second-bg-color);
    box-shadow: .0.1rem .1rem 0rem var(--text-color);
	box-sizing:0 5px 25px rgba(0,0,0,0.1);
    content: '';
    height: 20px;
    position: absolute;
    right: 30px;
    transform:rotate(45deg);
    top:-5px;
    width: 20px;
}
.action .menu h3{
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: 600;
    line-height: 1.3em;
    padding: 20px 0px;
    text-align: left;
    width: 100%;
}
.action .menu h3 div{
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
}
.action .menu ul li{
    align-items: center;
    border-top:1px solid rgba(0,0,0,0.05);
    display: flex;
    justify-content: left;
    list-style: none;
    padding: 10px 0px;
}
.action .menu ul li img{
    max-width: 20px;
    margin-right: 10px;
    opacity: 0.5;
    transition:0.5s
}
.action .menu ul li a{
    display: inline-block;
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 600;
    padding-left: 15px;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
}
.action .menu ul li:hover img{
    opacity: 1;
}
.action .menu ul li:hover a{
    color:#ff00ff;}

    @media only screen and (min-width: 1200px) {
        /* header */
        #header .hamburger {
            display: none;
        }
        #header .nav-list ul {
            position: initial;
            display: block;
            height: auto;
            width: fit-content;
            background-color: transparent;
        }
        #header .nav-list ul li {
            display: inline-block;
        }
        #header .nav-list ul li a {
            font-size: 1.8rem;
        }
        #header .nav-list ul a:after {
            display: none;
        }
        /* End header */
    
    }
    
    .icons-size{
        color: #333;
        font-size: 14px;
    }
                /*end*/

/* home*/

.home-img img
{
    width: 35vw;
    animation: floatImage 4s ease-in-out infinite;
}

@keyframes floatImage
{
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2.4rem);
  }
  100% {
    transform: translateY(0);
  }
}

.home
{
    display: flex;
    justify-content: center;
    align-items: center;
}

.home-content h3
{
    font-size: 3.2rem;
    font-weight: 700;
}

.home-content h3:nth-of-type(2)
{
    margin-bottom: 2rem;
}

.home-content h1
{
    font-size: 5.6rem;
    font-weight: 700;
    line-height: 1.3;
}

.home-content p 
{
    font-size: 1.6rem;
}

.social-media a
{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    background: transparent;
    border: .2rem solid var(--main-color);
    border-radius: 50%;
    font-size: 2rem;
    color: var(--main-color);
    margin: 3rem 1.5rem 3rem 0;
    transition: .5rem ease;
    box-shadow: 0 .5rem 1rem var(--shadow-color);
}

.social-media a:hover
{
    background: var(--main-color);
    color: var(--second-bg-color);
    box-shadow: 0 .5rem 1rem var(--shadow-after);
}

.btn
{
    display: inline-block;
    padding: 1rem 2.8rem;
    background: var(--main-color);
    border-radius: 4rem;
    box-shadow: 0 .5rem 1rem var(--shadow-color);
}

.btn:hover
{
    box-shadow: none;
}


	/* About */

    .about
    {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        background: var(--second-bg-color);
    }

    .about-img .img-about
    {
        height: 100%;
        width: 100%;
        position: relative;
        border: 8px  solid white;
        box-shadow: .9rem .9rem 1rem var(--main-color);
    }

    .heading 
    {
        text-align: center;
        font-size: 4.5rem;
    }
  
    .about-content h2
    {
        text-align: left;
        line-height: 1.2;
    }

    .about-content h3
    {
        font-size: 2.6rem;
    }

    .about-content p
    {
        font-size: 1.6rem;
        margin: 2rem 0 3rem;
    }

    /* End About */

    /* Services */

    .services h2
    {
        margin-bottom: 5rem;
    }

    .services-container
    {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;
    }

    .services-container .services-box
    {
        flex: 1 1 30rem;
        background: var(--second-bg-color);
        padding: 3rem 2rem 4rem;
        border-radius: 2rem;
        text-align: center;
        border:  .3rem solid var(--bg-color);
        transition: .5 ease;
        box-shadow: 0 .5rem 1rem var(--shadow-color);
    }

    .services-container .services-box:hover
    {
        border-color: var(--shadow-after);
        transform: scale(1.02);
        box-shadow: 0 .5rem 1rem var(--main-color);
    }

    .services-box i
    {
        font-size: 7rem;
        color: var(--main-color);
    }

    .services-box h3
    {
        font-size: 2.6rem;
    }

    .services-box p
    {
        font-size: 1.6rem;
        margin: 1rem 0 3rem;
    }

    /* Images Galery */

    .galery
    {
        justify-content: center;
        align-items: center;
        background: var(--second-bg-color);
    }

    .heading 
    {
        text-align: center;
        font-size: 4.5rem;

    }
    
    .slider .slider-box
    {
        border-radius: 2rem;
        border:  .3rem solid var(--bg-color);
        box-shadow: 0 .5rem 1rem var(--shadow-color);
    }

    .slider{
        align-items: center;
        position: relative;
        width: 700px;
        height: 100%;
        left: 19%;
    }
    .myslide{
        height: 460px;

        display: none;
        overflow: hidden;
        border-radius: 2rem;
    }
    
    .prev, .next{
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        font-size: 50px;
        padding: 15px;
        cursor: pointer;
        color: #fff;
        transition: 0.1s;
        user-select: none;
    }
    .prev:hover, .next:hover{
        color: #00a7ff; /* blue */
    }
    .next{
        right: 0;
    }
    .dotsbox{
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        bottom: 20px;
        cursor: pointer;
    }
    .dot{
        display: inline-block;
        width: 15px;
        height: 15px;
        border: 3px solid #fff;
        border-radius: 50%;
        margin: 0 10px;
        cursor: pointer;
    }
    /* /2 */
    
    /* javascript */
    .active, .dot:hover{
        border-color: #00a7ff; /* blue */
    }
    /* /javascript */
    
    /* muslide add fade */
    .fade {
      -webkit-animation-name: fade;
      -webkit-animation-duration: 1.5s;
      animation-name: fade;
      animation-duration: 1.5s;
    }
    
    @-webkit-keyframes fade {
      from {opacity: 0.8}
      to {opacity: 1}
    }
    
    @keyframes fade {
      from {opacity: 0.8}
      to {opacity: 1}
    }
    /* /muslide add fade */
    
    /* 3 */

    @-webkit-keyframes posi {
      from {left: 25%;}
      to {left: 15%;}
    }
    
    
    @keyframes posi {
      from {left: 25%;}
      to {left: 15%;}
    }
    
    /* /3 */
    
    /* 4 */

    @-webkit-keyframes zoomin {
      from {transform: scale(1, 1);}
      to {transform: scale(1.5, 1.5);}
    }
    
    
    @keyframes zoomin {
      from {transform: scale(1, 1);}
      to {transform: scale(1.5, 1.5);}
    }
    /* /4 */
    
    
    
    /* 5 */
    @media screen and (max-width: 800px){
        .myslide{
            height: 500px;
        }

        @-webkit-keyframes posi2 {
          from {top: 35%;}
          to {top: 50%;}
        }
    
    
        @keyframes posi2 {
          from {top: 35%;}
          to {top: 50%;}
        }

    
    }
    /* /5 */
    
    /* 6 */
    @media screen and (max-width: 520px){

    }
      
      .slides input{
        display: none;
      }
      
      .slide{
        width: 20%;
        transition: 2s;
      }
      
      .slide img{
        width: 500px;
        height: 300px;
        left: 500px;
      }
      
      /*css for manual slide navigation*/
      
      .navigation-manual{
        position: absolute;
        width: 800px;
        margin-top: -219px;
        display: flex;
        justify-content: center;
      }
      
      .manual-btn{
        border: 2px solid #40D3DC;
        padding: 5px;
        border-radius: 10px;
        cursor: pointer;
        transition: 1s;
      }
      
      .manual-btn:not(:last-child){
        margin-right: 40px;
      }
      
      .manual-btn:hover{
        background: #40D3DC;
      }
      
      #radio1:checked ~ .first{
        margin-left: 0;
      }
      
      #radio2:checked ~ .first{
        margin-left: -20%;
      }
      
      #radio3:checked ~ .first{
        margin-left: -40%;
      }
      
      #radio4:checked ~ .first{
        margin-left: -60%;
      }
      
      /*css for automatic navigation*/
      
      .navigation-auto{
        position: absolute;
        display: flex;
        width: 800px;
        justify-content: center;
        margin-top: 280px;
      }
      
      .navigation-auto div{
        border: 2px solid #40D3DC;
        padding: 5px;
        border-radius: 10px;
        transition: 1s;
      }
      
      .navigation-auto div:not(:last-child){
        margin-right: 40px;
      }
      
      #radio1:checked ~ .navigation-auto .auto-btn1{
        background: #40D3DC;
      }
      
      #radio2:checked ~ .navigation-auto .auto-btn2{
        background: #40D3DC;
      }
      
      #radio3:checked ~ .navigation-auto .auto-btn3{
        background: #40D3DC;
      }
      
      #radio4:checked ~ .navigation-auto .auto-btn4{
        background: #40D3DC;
      }
      
    
      /* End */

      /* Skill */

      .stats
      {
        background-size: 100%;
        justify-content: center;
        align-items: center;
        background: var(--bg-color);
      }

      .stats .heading .our-skills {
          position: 0;
          padding: 15px;
          width: 325px;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          box-shadow: 5px 5px 10px var(--main-after),
              inset 5px 5px 10px var(--shadow-after),
              inset -5px -5px 10px var(--main-color),
              -5px -5px 10px var(--shadow-color);
      }
      .our-skills
      {
        padding: 15px;
        border-radius: 10px;
        box-shadow: 5px 5px 10px var(--main-after),
            inset 5px 5px 10px var(--shadow-after),
            inset -5px -5px 10px var(--main-color),
            -5px -5px 10px var(--shadow-color);

      }
      
      .our-skills .skill {
          margin: 40px 10px;
      }
      
      .skill p {
          margin-bottom: 10px;
          color: #fff;
          font-size: 22px;
      }
      
      .skill .progress-line {
          position: relative;
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
      }
      
      .skill .progress-line::before {
          position: absolute;
          content: "";
          height: 15px;
          width: 15px;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          background: var(--bg);
          border-radius: 50%;
          box-shadow: 0 0 5px var(--bg), 0 0 10px var(--bg);
          z-index: 1;
          animation: circle-animate 2s forwards ease-out;
          opacity: 0;
      }
      
      @keyframes circle-animate {
          25% {
              left: 0;
              opacity: 1;
          }
          100% {
              opacity: 1;
              left: calc(var(--wd) - 8px);
          }
      }
      
      .skill .progress-line span {
          position: relative;
          display: block;
          height: 100%;
          width: 0;
          background: var(--bg);
          border-radius: 8px;
          box-shadow: 0 0 5px var(--bg);
          animation: span-animate 2s forwards ease-out;
      }
      
      @keyframes span-animate {
          25% {
              width: 0;
          }
          100% {
              width: var(--wd);
          }
      }
      
      .skill .progress-line span::before {
          position: absolute;
          content: "";
          width: 0;
          height: 0;
          border: 7px solid transparent;
          border-top-color: var(--bg);
          top: -9px;
          right: -6px;
          opacity: 0;
          animation: hint 0.2s forwards 2.2s;
      }
      
      .skill .progress-line span::after {
          position: absolute;
          content: var(--tx);
          color: #222;
          top: -30px;
          right: -16px;
          background: var(--bg);
          padding: 3px 6px;
          font-size: 14px;
          font-weight: bold;
          border-radius: 4px;
          box-shadow: 0 0 5px var(--bg);
          opacity: 0;
          animation: hint 0.2s forwards 2.2s;
      }
      
      @keyframes hint {
          to {
              transform: translateY(-5px);
              opacity: 1;
          }
      }
      
        .stats p 
        {
            text-align: center;
            position: relative;
            top: -30px;
        }

      /* end */

      /* portfolio */

      .portfolio
      {
        background: var(--second-bg-color);
      }

      .portfolio h2
      {
        margin-bottom: 4rem;
      }

      .portfolio-container
      {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        gap: 2.5rem;
      }

      .portfolio-container .portfolio-box
      {
        position: relative;
        border-radius: 2rem;
        box-shadow: 0 0 1rem var(--bg-color);
        overflow: hidden;
        display: flex;
      }

      .portfolio-box img
      {
        width: 100%;
      }

      .portfolio-box img:hover
      {
        transform: scale(1.1);
      }

      .portfolio-box .portfolio-layer
      {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient( rgba(0,0,0, .1), var(--main-color) );
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        padding: 0 4rem;
        transform: translateY(100%);
        transition: .5s ease;
      }

      .portfolio-box:hover .portfolio-layer
      {
        transform: translateY(0);
      }

      .portfolio-layer h4 
      {
        font-size: 3rem;
      }

      .portfolio-layer p
      {
        font-size: 1.6rem;
        margin: .3rem 0 1rem;
      }

      .portfolio-layer a
      {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 5rem;
        height: 5rem;
        background: var(--text-color);
        border-radius: 50%;
      }

      .portfolio-layer a i 
      {
        font-size: 2rem;
        color: var(--second-bg-color);
      }
      
      /* Contact */
      
      .contact h2
      {
        margin-bottom: 3rem;
      }
      
      .contact form 
      {
        max-width: 70rem;
        margin: 1rem auto;
        text-align: center;
        margin-bottom: 3rem;;
      }
      
      .contact form .input-box
      {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      
      .contact form .input-box input,
      .contact form textarea
      {
        width: 100%;
        padding: 1.5rem;
        font-size: 1.6rem;
        color: var(--text-color);
        background: var(--second-bg-color);
        border-radius: .8rem;
        margin: .7rem 0;
      }
      
      .contact form .input-box input-box{
        margin: 49%;
      }
      
      .contact form textarea
      {
        resize: none;
      }
      
      .contact form .btn-about{
        margin-top: 2rem;
        cursor: pointer;
      }
      
      /*end*/
      
      /* Last */
      
      @media (max-width: 1200px) {
        html {
          font-size: 55%;
        }
      }
      
      @media (max-width: 991px) {
        .header {
          padding: 2rem 3%;
        }
        
        section {
          padding: 10rem 3% 2rem;
        }
        
        .services
        {
          padding-bottom: 7rem;
        }

        .slider .slider-box
        {
            border-radius: 2rem;
            border:  .3rem solid var(--bg-color);
            box-shadow: 0 .5rem 1rem var(--shadow-color);
        }
    
        .slider{
            align-items: center;
            position: relative;
            width: 99%;
            left: 1%;
        }
        
        .portfolio
        {
          padding-bottom: 7rem;
        }
        
        .contact{
          min-height: auto;
        }
        
        .footer {
          padding: 2rem 3%;
        }
      }
      
      @media (max-width: 768px) {
.home 
{
  flex-direction: column;
}

.home-content h3
{
  font-size: 2.6rem;
}

.home-content h1
{
  font-size: 5rem;
}

.home-img 
{
  width: 70vw;
  margin-top: 4rem;
}

.about
{
  flex-direction: column-reverse;
}

.about img{
  width : 70vw;
  margin-top: 4rem;
}

.services h2
{
  margin-bottom: 3rem;
}

.portfolio h2
{
  margin-bottom: 3rem;
}

.portfolio-container
{
  grid-template-columns: repeat(2, 1fr);
}

.slider
{
  margin-bottom: 3rem;
}

}

@media (max-width: 617px) {
  .portfolio-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 450px)
{
  html {
    font-size: 50%;
  }
  
  .contact form .input-box input 
  {
    width: 100%;
  }
}

@media (max-width: 450px){
  .home-img img {
    width: 90vw;
  }
  
  .about-img img {
    width: 90vw;
  }
} ```

*script-menu.js*
```
/*=== menu navbar ===*/




function menuToggle(){

    const toggleMenu = document.querySelector('.menu');

    toggleMenu.classList.toggle('active')
}
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
hamburger.classList.toggle('active');
mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
var scroll_position = window.scrollY;
if (scroll_position > 250) {
header.style.backgroundColor = '#29323c';
} else {
header.style.backgroundColor = 'transparent';
}
});

menu_item.forEach((item) => {
item.addEventListener('click', () => {
hamburger.classList.toggle('active');
mobile_menu.classList.toggle('active');
});
});

/*=== end ===*/
```

*script-scroll-v2*
```
/*=== scroll reveal===*/




ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});



ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .service-container, .portofolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
/*=== end ===*/
```

*script-scroll.js*
```
/*=== scroll sections active link ===*/

let sections = document.querySelectorAll('section');

let navLinks = document.querySelectorAll('section');

window.onscroll = () => {
 sections.forEach(sec => {
  let top = window.scrollY;
  let offset = sec.offsetTop - 150;
  let height= sec.offsetHeight;
  let id= sec.getAttribute('id');
  
  id(top >= offset && top < offset + height ){
    navLinks.forEach(links => {
      links.classList.remove('active');
      document.querySelector('header nav a[href*=' + id + ']'),classList.add('active');
    });
  };
 });
 /*=== end ===*/
```

*script-slide.js*
```
/*=== slide ===*/

const myslide = document.querySelectorAll('.myslide'),


	  dot = document.querySelectorAll('.dot');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";

};

/*=== end ===*/
```

*script-type.js*

```
/*=== Typed Reveal ===*/



const typed = new Typed('.multiple-text', {
strings: ['Fronted Newbie','Student','Desinger'],
typeSpeed: 100,
backSpeed: 100,
backDelay: 1000,
loop: true
});

/*=== end ===*/
```
