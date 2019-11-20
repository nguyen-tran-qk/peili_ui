// courtesy of https://codepen.io/jebbles/pen/MKoYya

import React, { useState, useEffect } from 'react';
import './register.styles.scss';
import logoImage from '../../assets/images/peili-icon.png';
import boyAvatar from '../../assets/images/boy-avatar.png';
import FormInput from '../../components/form-input/form-input.component';
import skillsIcon from '../../assets/images/skills-icon.png';
import { Link } from 'react-router-dom';

const skillsAndInterests = [
  { id: 0, name: 'Video games' },
  { id: 1, name: 'Computer' },
  { id: 2, name: 'Programming' },
  { id: 3, name: 'Economics' },
  { id: 4, name: 'Music composition' },
  { id: 5, name: 'Marketing' },
  { id: 6, name: 'Visual design' },
  { id: 7, name: 'Singing' },
  { id: 8, name: 'Fashion' },
  { id: 9, name: 'Sports' },
];

const RegisterPage = () => {
  const [showPage, setShowPage] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [name, setName] = useState('user');
  const [qualities, setQualities] = useState([]);
  const maxPageIndex = 3;

  useEffect(() => {
    setTimeout(() => {
      setShowPage(true);
    }, 400);
  }, []);

  const nextPage = () => {
    if (pageIndex < maxPageIndex) {
      setPageIndex(pageIndex + 1);
    }
  };

  const prevPage = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  };

  const renderAgeOptions = () => {
    let result = '';
    for (let i = 0; i < 14; i++) {
      const age = 16 + i;
      result += `<option value={${age}}>${age}</option>`;
    }
    return result;
  };

  const toggleSelectTag = (tagId: number) => () => {
    const newQualities = [...qualities];
    if (newQualities.includes(tagId)) {
      newQualities.splice(newQualities.indexOf(tagId), 1);
    } else {
      newQualities.push(tagId);
    }
    setQualities(newQualities);
  };

  return (
    <div className="oboarding-page">
      <div className={`walkthrough${showPage ? ' show' : ''}`}>
        <div className="walkthrough-pagination">
          <span className={`dot${pageIndex === 0 ? ' active' : ''}`} />
          <span className={`dot${pageIndex === 1 ? ' active' : ''}`} />
          <span className={`dot${pageIndex === 2 ? ' active' : ''}`} />
          <span className={`dot${pageIndex === 3 ? ' active' : ''}`} />
        </div>
        <div className="walkthrough-body">
          <ul className="screens animate">
            <li className={`screen${pageIndex === 0 ? ' active' : ''}`}>
              <div className="media logo">
                <img alt="peili-logo" className="logo" src={logoImage} />
              </div>
              <h3>Welcome to Peili</h3>
              <p>
                It's amazing you are here!
                <br />
                We aim to help you find your strengths and make the best career choices.
                <br />
                So let's get started!
              </p>
              <div className="register-form">
                <div className="register-form-group">
                  <label>Firstly, how should we call you?</label>
                  <FormInput placeholder="Your name" onChange={evt => setName(evt.target.value)} maxLength={40} />
                </div>
              </div>
            </li>
            <li className={`screen${pageIndex === 1 ? ' active' : ''}`}>
              <div className="media person">
                <img alt="icon" className="icon" src={boyAvatar} />
              </div>
              <h3>Hello {name}</h3>
              <p>To continue using Peili and exploring about yourself, you will need an account. Let's create one!</p>
              <div className="register-form">
                <div className="register-form-group">
                  <label>An email to login</label>
                  <FormInput placeholder="Your email" />
                </div>
                <div className="register-form-group">
                  <label>A secure password</label>
                  <FormInput placeholder="Your password" />
                </div>
                <div className="register-form-group age-select">
                  <label>What's your age?</label>
                  <select dangerouslySetInnerHTML={{ __html: renderAgeOptions() }} />
                </div>
              </div>
            </li>
            <li className={`screen${pageIndex === 2 ? ' active' : ''}`}>
              <div className="media skills">
                <a hidden href="https://icons8.com">
                  Cloud icon by Icons8
                </a>
                <img alt="icon" className="icon" src={skillsIcon} />
              </div>
              <h3>Tell us more</h3>
              <p>Select your interests and skills from the list below</p>
              <div className="skills-interests tags-group">
                {skillsAndInterests.map(item => (
                  <div key={item.id} className={`tag${qualities.includes(item.id) ? ' active' : ''}`} onClick={toggleSelectTag(item.id)}>
                    {item.name}
                  </div>
                ))}
              </div>
            </li>
            <li className={`screen completed${pageIndex === 3 ? ' active' : ''}`}>
              <div className="media logo">
                <img alt="peili-logo" className="logo" src={logoImage} />
              </div>
              <h3>You're all set!</h3>
              <p>
                Thank you for joining us at Peili. <span role="img" aria-label="heart">❤️</span>
                <br />
                We will help you learn more about yourself with a wide range of quizzes. And the more answers you make, the easier for us to
                find the best career choices for you.
              </p>
              <p>We will enjoy this journey together! <span role="img" aria-label="hand">🤟</span></p>
            </li>
          </ul>
          <button className="prev-screen" disabled={pageIndex === 0} onClick={prevPage}>
            <i className="material-icons">keyboard_arrow_left</i>
          </button>
          <button className="next-screen" disabled={pageIndex === maxPageIndex} onClick={nextPage}>
            <i className="material-icons">keyboard_arrow_right</i>
          </button>
        </div>
        <div className="walkthrough-footer">
          <button className="button next-screen" onClick={nextPage}>
            Next
          </button>
          <Link to="/" className={`button finish${pageIndex === maxPageIndex ? ' active' : ''}`}>
            Let's go!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
