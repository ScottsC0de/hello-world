import React from 'react';

function Footer() {
    return (
        <div>
            <footer>
                <a href="https://github.com/ScottsC0de" target="_blank"><img src="public/img/githubpng.png"
                    alt="GitHub logo linked to my account" width={70} height={70}></img></a>
                <a href='www.linkedin.com' target='_blank'><img src='src/img/linkedinlogo.png' alt='LinkedIn logo' width={60} height={60}></img>LinkedIn</a>
                <a href="https://www.youtube.com/channel/UCk-sgTvFeA_LQx-MTba9tZA" target="_blank"><img
                    src="public/img/youtubepng.png" alt="YouTune logo linked to my account" width={50}
                    height={50}></img></a>
            </footer>
        </div>
    );
};

export default Footer;