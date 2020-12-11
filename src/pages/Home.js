import profile from '../static/profile.jpg'

function Home() {
    return(
        <div className="page-container">
            <div className="initial-greeting">
                <h1 className="greeting">Hello! 👋</h1>
                <p>I'm Joshua Burer.</p>
                <p>I'm an aspiring software developer, currently pursuing a Bachelor's in Computer Science. 💻</p>
            </div>
            <div className="info-box">
                <img src={profile} alt="profile" />
                <h2>⚠ Testing!</h2>
                <p>Everything here is a placeholder. This is a box to contain information in a section and a photo. </p>
                <p>To implement: When the info-box has room, move photo to the right side.</p>
            </div>
            <div>
                <p>I can put more content down here and things will be fine.</p>
                <p>Below are social media links that I spent way too long styling! They're kinda cool.</p>
            </div>
        </div>
    );
}

export default Home;