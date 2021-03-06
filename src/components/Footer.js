import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer center">
        <div className="container">
          <div class="row center">
            <a href="https://github.com/Eksicode" target="_blank"><i class="logos-footer devicon-github-plain colored"></i></a>
            <a href="https://twitter.com/eksicode" target="_blank"><i class="logos-footer devicon-twitter-plain colored"></i></a><br></br>
            2018 eksicode.org
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;