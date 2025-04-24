var typed = new Typed(".typewriter", {
    strings: ["Frontend Developer ?", "Fullstack Developer ?", "Software Engineer ?", "Cyber Security Expert ?"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});



function AboutUs(){
    let x = document.querySelector(".box")
    x.style.marginLeft="57px"
    x.style.marginTop="13px"
    
    let html=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400..800&display=swap');
    </style>
    <link rel="stylesheet" href="AboutUs.css">
    <style>
        *{
    font-family: "Baloo Bhai 2", sans-serif;
    padding: 0px;
    margin: 0px;
    }
    .aboutUs{
    font-size: 8px;
    }
    .para1,.para2,.para3{
    font-size: 4px;
    margin-top: 5px;
    }
    </style>
</head>
<body>
    <div class="aboutUs">About Us</div>
    <div class="para1">
        At Know Your Job, we are dedicated to bridging the gap between students and the ever-evolving world of Information Technology. Our platform delivers timely updates, news, and insights straight from the IT industry, helping students stay informed about the latest trends, innovations, and opportunities. Whether it's emerging technologies, tech company announcements, or industry movements — we bring it all to your fingertips.
    </div>
    <div class="para2">
        Our mission goes beyond just sharing information. We aim to connect aspiring professionals with the corporate world through curated content, industry exposure, and community interaction. By fostering a space where students and tech professionals can interact, we encourage networking, mentorship, and a deeper understanding of real-world corporate dynamics.
    </div>
    <div class="para3">
        In addition to keeping our audience informed and connected, we offer a wide range of upskilling courses tailored to industry demands. From beginner-level programming to advanced tech certifications, our learning resources are designed to help students build practical skills and improve their career prospects. At Know Your Job, we’re not just keeping you updated — we’re preparing you for the future.
    </div>
</body>
</html>`

    document.querySelector(".box").innerHTML=html

}

function Updates(){

    let x = document.querySelector(".box")
    x.style.marginLeft="57px"
    x.style.marginTop="13px"

    let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400..800&display=swap');
    </style>
    <style>
        *{
    font-family: "Baloo Bhai 2", sans-serif;
    padding: 0px;
    margin: 0px;
    color:#262424;
}
    .si{
        color:#D6efff;
    }
.Que{
    font-size: 7px;
    font-whight:550;
}
.list{
    font-size: 5px;
    margin-top: 3px;
    
}
.heading{
    font-size: 6px;
    font-weight: 530;
}

    </style>
</head>
<body>
    <div class="Que">
        What happens in IT field in last 48 Hours !?
    </div>
    <div class="list">
        <list>
            <ul>
                <div class="heading">Surge in IT Stocks</div>
                <li>The Nifty IT index recently surpassed the 45,000 mark for the first time, led by gains in companies like TCS and HCL, reflecting strong investor confidence in the IT sector.</li>
                <div class="heading">Graduates Transitioning to Tech Careers</div>
                <li>An increasing number of young professionals are leaving arts-related jobs for more lucrative positions in technology, attracted by higher salaries and better work-life balance.</li>
                <div class="heading">AI's Growing Role in National Security</div>
                <li>Artificial intelligence is becoming a central focus in national security discussions, influencing governmental strategies and policies.</li>
                <div class="heading">Meta Announces 'LlamaCon' Event</div>
                <li>Meta has introduced 'LlamaCon,' a new event scheduled for April 29th, 2025, focusing on advancements in open-source AI to assist developers in creating applications and products.</li>
                <div class="heading">Apple's Upcoming WWDC 2025</div>
                <li>Apple's Worldwide Developers Conference (WWDC) 2025 is set to begin on June 9th, with expectations of unveiling iOS 19, featuring a major overhaul with rounded icons and a camera app inspired by Vision Pro. </li>
                <div class="heading">Google Faces Lawsuit Over AI Feature</div>
                <li>Google is being sued over its AI Overviews feature, with allegations that it reduces demand for original content and harms the digital publishing industry.</li>
                <div class="heading">Advancements in AI Video Technology</div>
                <li>AI video technology is poised for mainstream adoption, with models from companies like Google and OpenAI becoming more accessible, promising real-time assistance and innovative applications. </li>
            </ul>
        </list>
    </div>
</body>
</html>`

document.querySelector(".box").innerHTML= html
}

function network(){

    let x = document.querySelector(".box")
    x.style.marginLeft="57px"
    x.style.marginTop="13px"

    let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400..800&display=swap');
    </style>
    <style>
        
*{
    padding: 0px;
    margin: 0px;
    font-family: "Baloo Bhai 2", sans-serif;
    color: #262424;
}
.si{
    color:#D6efff;
}
.network{
    font-size: 8px;
    font-weight: 520;
    margin-left: 5px;
    margin-top: 3px;
}
.cards{
    display: grid;
    grid-template-columns: 60px 60px 60px;
    margin-left:2.5px;
}
.c{
    border: 1px solid #262424;
    height: 50px;
    width: 50px;
    position: relative;
    z-index: -1;
    border-radius: 2px;
    margin: 4px;
}
    .c:hover {
        box-shadow:1px 3px 5px;
    }
.cover{
    border-bottom: 1px solid #262424;
    height: 20px;
    width: 50px;
    position: relative;
    z-index: -1;
}
.coverimg{
    height: 20px;
    width: 50px;
    border-radius: 1.5px;
}
.profile{
    height: 15px;
    width: 15px;
    border: 1px solid #262424;
    border-radius: 12px;
    position: absolute;
    top: 12px;
    left: 16px;
    background-color: aliceblue;
    background-size:cover;
}
.profileimg{
    height: 16.5px;
    width: 15px;
    overflow:hidden;
    position: relative;
    top: -1px;
    
}
.name{
    font-size: 6px;
    position: relative;
    top: 9px;
    left: 10px;
}
.proff{
    font-size: 5px;
    position: relative;
    color: #4e4c4c;
    top: 9px;
    left: 6px;
}

    </style>
</head>
<body>
    <div class="network">Network</div>
    <div class="cards">
        <div class="c1 c">
            <div class="cover"><img src="cover.webp" class="coverimg" alt=""></div>
            <div class="profile"><img src="profile.png" class="profileimg" alt=""></div>
            <div class="name">Yogini Patel</div>
            <div class="proff">Software Engineer</div>
        </div>
        <div class="c2 c">
            <div class="cover"><img src="cover.webp" class="coverimg" alt=""></div>
            <div class="profile"><img src="profile.png" class="profileimg" alt=""></div>
            <div class="name">Harsh shah</div>
            <div class="proff">Website Developer</div>
        </div>
        <div class="c3 c">
            <div class="cover"><img src="cover.webp" class="coverimg" alt=""></div>
            <div class="profile"><img src="profile.png" class="profileimg" alt=""></div>
            <div class="name">Jitesh Patel</div>
            <div class="proff">Fullstack Developer</div>
        </div>
        <div class="c4 c">
            <div class="cover"><img src="cover.webp" class="coverimg" alt=""></div>
            <div class="profile"><img src="profile.png" class="profileimg" alt=""></div>
            <div class="name">Rudra Patel</div>
            <div class="proff">Frontend Engineer</div>
        </div>
        <div class="c5 c">
            <div class="cover"><img src="cover.webp" class="coverimg" alt=""></div>
            <div class="profile"><img src="profile.png" class="profileimg" alt=""></div>
            <div class="name">Mann Patel</div>
            <div class="proff">AI & ML Engineer</div>
        </div>
        <div class="c6 c">
            <div class="cover"><img src="cover.webp" class="coverimg" alt=""></div>
            <div class="profile"><img src="profile.png" class="profileimg" alt=""></div>
            <div class="name">Hetvi Modi</div>
            <div class="proff">Devops Engineer</div>
        </div>
        <div class="c7 c">
            <div class="cover"><img src="cover.webp" class="coverimg" alt=""></div>
            <div class="profile"><img src="profile.png" class="profileimg" alt=""></div>
            <div class="name">Jash Patel</div>
            <div class="proff">Data Analytics</div>
        </div>
        <div class="c8 c">
            <div class="cover"><img src="cover.webp" class="coverimg" alt=""></div>
            <div class="profile"><img src="profile.png" class="profileimg" alt=""></div>
            <div class="name">Rakesh Patel</div>
            <div class="proff">Software Engineer</div>
        </div>
        <div class="c c9">
            <div class="cover"><img src="cover.webp" class="coverimg" alt=""></div>
            <div class="profile"><img src="profile.png" class="profileimg" alt=""></div>
            <div class="name">Parth Patel</div>
            <div class="proff">Website Developer</div>
        </div>
    </div>
</body>
</html>`

    document.querySelector(".box").innerHTML=html
}

function Upskill(){

    let x = document.querySelector(".box")
    x.style.marginLeft="57px"
    x.style.marginTop="13px"

    let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400..800&display=swap');
    </style>
    <style>
        *{
    font-family: "Baloo Bhai 2", sans-serif;
    padding: 0px;
    margin: 0px;
    }
.upskill{
    font-size: 9px;
    font-weight: 530;
    color: #262424;
    margin-left: 6px;
    margin-top: 3px;
}

.cont{
    height: 40px;
    width: 200px;
    border: 1px solid #262424;
    margin-left: 5px;
    margin-top: 3px;
    padding: 3px;
    border-radius: 2px;
    display: flex;
    color: #262424;
    position: relative;
    z-index:-1;
}



.thumbnail{
    height:38px;
    width: 65px;
    border: 1px solid #262424;
    border-radius: 1px;
    position:relative;
    z-index:-1;
}

.courseTitle{
    font-size: 7px;
    margin-left: 4px;
}
.courseTitle2{
    font-size: 7px;
    margin-left: 4px;
}
.viewer{
    font-size: 5px;
    position: relative;
    top: 14px;
    left: -90px;
}
.viewer2{
    font-size: 5px;
    position: relative;
    top: 14px;
    left: -67px;
}
.viewer5{
    font-size: 5px;
    position: relative;
    top: 14px;
    left: -60px;
}
.viewer6{
    font-size: 5px;
    position: relative;
    top: 14px;
    left: -60px;
}
.duration{
    font-size: 5px;
    position: relative;
    top: 14px;
    left: -80px;
}
.duration2{
    font-size: 5px;
    position: relative;
    top: 14px;
    left: -56px;
}
.duration5{
    font-size: 5px;
    position: relative;
    top: 14px;
    left: -50px;
}
.duration6{
    font-size: 5px;
    position: relative;
    top: 14px;
    left: -50px;
}
.cost{
    font-size: 5px;
    position: absolute;
    top: 17px;
    left: 130px;
}
.thumb{
    height: 38px;
    width: 65px;
}

    </style>
</head>
<body>
    <div class="upskill">UpSkill</div>
    <div class="cont1 cont">
        <div class="thumbnail"><img src="fullstack.jpg" class="thumb" alt=""></div>
        <div class="courseTitle">Fullstack Development course</div>
        <div class="viewer">245K</div>
        <div class="duration">145 Lectures</div>
        <div class="cost">5999 Rupees</div>
    </div>
    <div class="cont2 cont">
        <div class="thumbnail"><img src="cyberSecurity.jpg" class="thumb" alt=""></div>
        <div class="courseTitle">Cyber Security Course</div>
        <div class="viewer2">645K</div>
        <div class="duration2">134 Lectures</div>
        <div class="cost">1999 Rupees</div>
    </div>
    <div class="cont3 cont">
        <div class="thumbnail"><img src="frontend.jpg" class="thumb" alt=""></div>
        <div class="courseTitle">Frontend Development course</div>
        <div class="viewer">745K</div>
        <div class="duration">75 Lectures</div>
        <div class="cost">999 Rupees</div>
    </div>
    <div class="cont4 cont">
        <div class="thumbnail"><img src="backend.jpg" class="thumb" alt=""></div>
        <div class="courseTitle">Backend Development course</div>
        <div class="viewer">545K</div>
        <div class="duration">141 Lectures</div>
        <div class="cost">2999 Rupees</div>
    </div>
    <div class="cont5 cont">
        <div class="thumbnail"><img src="datas.webp" class="thumb" alt=""></div>
        <div class="courseTitle">Data Science course</div>
        <div class="viewer5">285K</div>
        <div class="duration5">47 Lectures</div>
        <div class="cost">6999 Rupees</div>
    </div>
    <div class="cont6 cont">
        <div class="thumbnail"><img src="cpp with dsa.jpg" class="thumb" alt=""></div>
        <div class="courseTitle">C++ with DSA course</div>
        <div class="viewer6">2.3M</div>
        <div class="duration6">245 Lectures</div>
        <div class="cost">0 Rupees</div>
    </div>
</body>
</html>`

    document.querySelector(".box").innerHTML=html;
}

function Notification(){

    let x = document.querySelector(".box")
    x.style.marginLeft="57px"
    x.style.marginTop="13px"

    let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notifications</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400..800&display=swap');
    </style>
    <style>
        *{
    font-family: "Baloo Bhai 2", sans-serif;
    padding: 0px;
    margin: 0px;
}
.notification{
    font-size: 8px;
    font-weight: 530;
    margin-left: 2px;
}
.r{
    height: 19px;
    width: 120px;
    border: 1px solid #262424;
    margin-top: 4px;
    margin-left: 2px;
    border-radius: 2px;
}
.profile{
    height: 14px;
    width: 14px;
    border: 0.7px solid #262424;
    border-radius: 12px;
    position: relative;
    top: 2px;
    left: 3px;
    display: inline-block;
}
.notiprofile{
    height: 14px;
    width: 14px;
    position: relative;
    top: -0px;
}
.name{
    font-size: 6px;
    position: relative;
    top: -15px;
    left: 22px;
}
.lineofNoti{
    font-size: 4px;
    position: relative;
    top: -15px;
    left: 22px;
}
.r:hover{
    box-shadow: 1px 3px 5px #262424;
    cursor: pointer;
}
    </style>
</head>
<body>
    <div class="notification">Notification</div>
    <div class="request">
        <div class="r r1">
            <div class="profile">
                <img src="profile.png" class="notiprofile" alt="">
            </div>
            <div class="notifrom">
                <div class="name">Smit Mevawala</div>
                <div class="lineofNoti">Sent You Connection request</div>
            </div>
        </div>
        <div class="r r2">
            <div class="profile">
                <img src="profile.png" class="notiprofile" alt="">
            </div>
            <div class="notifrom">
                <div class="name">Bhavya Modi</div>
                <div class="lineofNoti">Sent You Connection request</div>
            </div>
        </div>
        <div class="r r3">
            <div class="profile">
                <img src="profile.png" class="notiprofile" alt="">
            </div>
            <div class="notifrom">
                <div class="name">Sarvesh Prajapati</div>
                <div class="lineofNoti">Sent You Connection request</div>
            </div>
        </div>
        <div class="r r4">
            <div class="profile">
                <img src="profile.png" class="notiprofile" alt="">
            </div>
            <div class="notifrom">
                <div class="name">Viha Shah</div>
                <div class="lineofNoti">Sent You Connection request</div>
            </div>
        </div>
        <div class="r r5">
            <div class="profile">
                <img src="profile.png" class="notiprofile" alt="">
            </div>
            <div class="notifrom">
                <div class="name">Maitry Gajjar</div>
                <div class="lineofNoti">Sent You Connection request</div>
            </div>
        </div>
        <div class="r r6">
            <div class="profile">
                <img src="profile.png" class="notiprofile" alt="">
            </div>
            <div class="notifrom">
                <div class="name">Vishva Boghawala</div>
                <div class="lineofNoti">Sent You Connection request</div>
            </div>
        </div>
    </div>

</body>
</html>`

    document.querySelector(".box").innerHTML=html
}

function ongoing(){

    let x = document.querySelector(".box")
    x.style.marginLeft="57px"
    x.style.marginTop="13px"

    let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400..800&display=swap');
    </style>
    <link rel="stylesheet" href="ongoing.css">
    <style>
        *{
    font-family: "Baloo Bhai 2", sans-serif;
    padding: 0px;
    margin: 0px;
}
.ongoing{
    font-size:10px;
    margin-left: 0px;
    font-whight:530;
}
.nothing{
    font-size: 7px;
    margin-left: 60px;
    margin-top: 20px;
}
    </style>
</head>
<body>
    <div class="ongoing">Ongoing</div>
    <div class="nothing">You have not purchased any course yet !!</div>
</body>
</html>`

    document.querySelector(".box").innerHTML=html
}

function settings(){

    let x = document.querySelector(".box")
    x.style.marginLeft="57px"
    x.style.marginTop="13px"

    let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400..800&display=swap');
    </style>
    <style>
        *{
    font-family: "Baloo Bhai 2", sans-serif;
    padding: 0px;
    margin: 0px;
}
.settings{
    font-size: 10px;
    font-weight: 530;
    margin-left: 2px;
}
.setbox{
    height: auto;
    width: 100px;
    border: 1px solid #262424;
    margin-left: 2px;
    border-radius: 2px;
}
.option{
    font-size: 7.6px;
    padding-left: 4px;
}
.option:hover{
    box-shadow: inset 1px 1px 1px #262424;
}
.hr{
    height: 0.1px;
    width: 90px;
    background-color: #262424;
    color: #262424;
    margin-left:4px;
}
    </style>
</head>
<body>
    <div class="settings">Settings</div>
    <div class="setbox">
        <div class="accountP option">Acoount Preferences</div>
        <div class="hr"></div>
        <span class="lock"></span><div class="option sis">Sign in & Security</div>
        <div class="hr"></div>
        <div class="option vis">Visibility</div>
        <div class="hr"></div>
        <div class="option dp">Data Privacy</div>
        <div class="hr"></div>
        <div class="advert option">Advertising Data</div>
    </div>
</body>
</html>`

    document.querySelector(".box").innerHTML=html
}

function Noti(){

    let x = document.querySelector(".box")
    x.style.marginLeft="57px"
    x.style.marginTop="13px"

    let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notifications</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400..800&display=swap');
    </style>
    <style>
        *{
    font-family: "Baloo Bhai 2", sans-serif;
    padding: 0px;
    margin: 0px;
}
.notification{
    font-size: 8px;
    font-weight: 530;
    margin-left: 2px;
}
.r{
    height: 19px;
    width: 120px;
    border: 1px solid #262424;
    margin-top: 4px;
    margin-left: 2px;
    border-radius: 2px;
}
.profile{
    height: 14px;
    width: 14px;
    border: 0.7px solid #262424;
    border-radius: 12px;
    position: relative;
    top: 2px;
    left: 3px;
    display: inline-block;
}
.notiprofile{
    height: 14px;
    width: 14px;
    position: relative;
    top: -3px;
}
.name{
    font-size: 6px;
    position: relative;
    top: -25px;
    left: 22px;
}
.lineofNoti{
    font-size: 4px;
    position: relative;
    top: -25px;
    left: 22px;
}
.r:hover{
    box-shadow: 1px 3px 5px #262424;
    cursor: pointer;
}
    </style>
</head>
<body>
    <div class="notification">Notification</div>
    <div class="request">
        <div class="r r1">
            <div class="profile">
                <img src="profile.png" class="notiprofile" alt="">
            </div>
            <div class="notifrom">
                <div class="name">Smit Mevawala</div>
                <div class="lineofNoti">Sent You Connection request</div>
            </div>
        </div>
        <div class="r r2">
            <div class="profile">
                <img src="profile.png" class="notiprofile" alt="">
            </div>
            <div class="notifrom">
                <div class="name">Bhavya Modi</div>
                <div class="lineofNoti">Sent You Connection request</div>
            </div>
        </div>
        <div class="r r3">
            <div class="profile">
                <img src="profile.png" class="notiprofile" alt="">
            </div>
            <div class="notifrom">
                <div class="name">Sarvesh Prajapati</div>
                <div class="lineofNoti">Sent You Connection request</div>
            </div>
        </div>
        <div class="r r4">
            <div class="profile">
                <img src="profile.png" class="notiprofile" alt="">
            </div>
            <div class="notifrom">
                <div class="name">Viha Shah</div>
                <div class="lineofNoti">Sent You Connection request</div>
            </div>
        </div>
        <div class="r r5">
            <div class="profile">
                <img src="profile.png" class="notiprofile" alt="">
            </div>
            <div class="notifrom">
                <div class="name">Maitry Gajjar</div>
                <div class="lineofNoti">Sent You Connection request</div>
            </div>
        </div>
        <div class="r r6">
            <div class="profile">
                <img src="profile.png" class="notiprofile" alt="">
            </div>
            <div class="notifrom">
                <div class="name">Vishva Boghawala</div>
                <div class="lineofNoti">Sent You Connection request</div>
            </div>
        </div>
    </div>

</body>
</html>`

    document.querySelector(".box").innerHTML=html
}